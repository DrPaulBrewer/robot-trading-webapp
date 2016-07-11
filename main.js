/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* global sims:true, Plotly:true */

import "json-editor"; // defines window.JSONEditor
import * as SMRS from "single-market-robot-simulator";
import * as VIZ from "single-market-robot-simulator-viz-plotly";
import saveZip from "single-market-robot-simulator-savezip";
import smallDataVisualsJSON from "./small-data-visuals.json!";
import mediumDataVisualsJSON from "./medium-data-visuals.json!";
import configSchema from "./configSchema.json!";
import examplesHighLow from "./examples-highlow.json!";
import positiveNumberArray from "positive-number-array";

/* enable use of twitter bootstrap 3 by json editor. requires bootstrap 3 css/js to be loaded in index.html */

window.JSONEditor.defaults.options.theme = 'bootstrap3';
window.JSONEditor.defaults.options.iconlib = 'bootstrap3';

/* defines a function accepting string, returning array of positive numbers or undefined */

/* suggested by json-editor README.md lines 1122-1165 */

window.JSONEditor.defaults.resolvers.unshift(function(schema){
    if (schema.type === "array" && schema.format === "textarea" &&  schema.flavor==="positiveNumber"){
        return "positiveNumber";
    }
});

/* from an examination of json-editor/src/editors/number.js */

window.JSONEditor.defaults.editors.positiveNumber = window.JSONEditor.defaults.editors.string.extend({
    sanitize(value){
        return (positiveNumberArray(value) || []).join(" ");
    },
    getNumColumns(){
        return 2;
    },
    getValue(){
        return positiveNumberArray(this.value) || [];
    }
});

const smallDataVisuals = VIZ.build(smallDataVisualsJSON);
const mediumDataVisuals = VIZ.build(mediumDataVisualsJSON);

const largeDataJSON = mediumDataVisualsJSON.filter(function(V){
    return ((V.logs.indexOf("buyorder")===-1) && (V.logs.indexOf("sellorder")===-1));
});
const largeDataVisuals = VIZ.build(largeDataJSON);
const plotParamsSupplyDemand = VIZ.helpers.supplyDemand();

const app = ((function(){
    
    let editor;
    
    window.sims=[];

    let visual = 0;

    function plotParameters(sim, slot){
        const plotlyParams = plotParamsSupplyDemand(sim);
        plotlyParams.unshift("paramPlot"+slot);
        Plotly.newPlot(...plotlyParams);
    }

    function showSimulation(simConfig, slot){
        let visuals = [];
        if (simConfig.config.periods<=50)
            visuals = smallDataVisuals;
        else if (simConfig.config.periods<=500)
            visuals = mediumDataVisuals;
        else
            visuals = largeDataVisuals;
        let plotParams = visuals[visual%visuals.length](simConfig);
        plotParams.unshift('resultPlot'+slot);
        Plotly.newPlot(...plotParams);
    }

    function runSimulation(simConfig, slot){
        // set up and run new simulation
        // make a copy to prevent side effects
        let config = Object.assign({}, simConfig);
        config.xMarket = Object.assign({}, simConfig.xMarket);
        // set booklimit, bookfixed
        let booklimit = Math.max(config.buySellBookLimit, config.buyerImprovementRuleLevel, config.sellerImprovementRuleLevel);
        config.bookfixed = 1;
        config.booklimit = booklimit || 10;

        function onPeriod(e,sim){
            if (sim.period<config.periods){
                $('#resultPlot'+slot).html("<h1>"+Math.round(100*sim.period/config.periods)+"% complete</h1>");
            } else {
                $('#resultPlot'+slot).html("");
            }
        }

        function onDone(e,sim){
            showSimulation(sim, slot);
        } 

        let mysim = new SMRS.Simulation(simConfig).run(onDone, onPeriod); 
        plotParameters(mysim, slot);
        if (mysim.config.periods>500){
            delete mysim.logs.buyorder;
            delete mysim.logs.sellorder;
        }

        return mysim;
        
    }


    /* expose these app functions to outside code */

    return {
        init(){
            let editorElement = document.getElementById('editor');
            let editorOptions = {
                schema: configSchema,
                startval: examplesHighLow
            };
            editor = new window.JSONEditor(editorElement, editorOptions);
        },

        run(){
            $('.paramPlot').html("");
            $('.resultPlot').html("");
            let config = editor.getValue();
            sims = config.map(runSimulation);
        },
        
        next(){ 
            visual++;
            sims.forEach(showSimulation);
        },

        downloadData(){
            $('#downloadButton').prop('disabled',true);
            setTimeout(function(){
                $('#downloadButton').prop('disabled',false);
            }, 60*1000);
            saveZip(sims);
        }
    };

})());

$(function(){
    app.init();
});

$('#runButton').click(app.run);
$('#nextButton').click(app.next);
$('#downloadButton').click(app.downloadData);
