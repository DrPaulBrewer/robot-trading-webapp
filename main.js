/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* jshint browserify:true,jquery:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true,unused:true */

require('json-editor'); // defines window.JSONEditor

/* enable use of twitter bootstrap 3 by json editor. requires bootstrap 3 css/js to be loaded in index.html */
window.JSONEditor.defaults.options.theme = 'bootstrap3';
window.JSONEditor.defaults.options.iconlib = 'bootstrap3';

/* defines a function accepting string, returning array of positive numbers or undefined */
const positiveNumberArray = require('positive-number-array');

/* suggested by json-editor README.md lines 1122-1165 */
window.JSONEditor.defaults.resolvers.unshift(function(schema){
    'use strict';
    if (schema.type === "array" && schema.format === "textarea" &&  schema.flavor==="positiveNumber"){
	return "positiveNumber";
    }
});

/* from an examination of json-editor/src/editors/number.js */
window.JSONEditor.defaults.editors.positiveNumber = window.JSONEditor.defaults.editors.string.extend({
    sanitize: function(value){
	'use strict';
	return (positiveNumberArray(value) || []).join(" ");
    },
    getNumColumns: function(){
	'use strict';
	return 2;
    },
    getValue: function(){
	'use strict';
	return positiveNumberArray(this.value) || [];
    }
});

const plotly     = require('plotly.js');
const SMRS       = require('single-market-robot-simulator');
const VIZ        = require('single-market-robot-simulator-viz-plotly');

const smallDataVisuals  = VIZ.build(require("./small-data-visuals.json"));
const mediumDataVisuals = VIZ.build(require("./medium-data-visuals.json"));
const largeDataJSON = require("./medium-data-visuals.json").filter(function(V){
    'use strict';
    return ((V.logs.indexOf("buyorder")===-1) && (V.logs.indexOf("sellorder")===-1));
});
const largeDataVisuals = VIZ.build(largeDataJSON);
const plotParamsSupplyDemand = VIZ.supplyDemand();
	    
var app = (function(){
    'use strict';

    var editor;
    
    window.sims=[];

    var visual = 0;

    function plotParameters(sim, slot){
	var plotlyParams = plotParamsSupplyDemand(sim);
	plotlyParams.unshift("paramPlot"+slot);
	plotly.newPlot.apply(plotly, plotlyParams);
    }

    function showSimulation(simConfig, slot){
	var visuals = [];
	if (simConfig.config.periods<=50)
	    visuals = smallDataVisuals;
	else if (simConfig.config.periods<=500)
	    visuals = mediumDataVisuals;
	else
	    visuals = largeDataVisuals;
	var plotParams = visuals[visual%visuals.length](simConfig);
	plotParams.unshift('resultPlot'+slot);
	plotly.newPlot.apply(plotly, plotParams);
    }

    function runSimulation(simConfig, slot){
	// set up and run new simulation
	// make a copy to prevent side effects
	var config = Object.assign({}, simConfig);
	config.xMarket = Object.assign({}, simConfig.xMarket);
	// set booklimit, bookfixed
	var booklimit = Math.max(config.buySellBookLimit, config.buyerImprovementRuleLevel, config.sellerImprovementRuleLevel);
	config.bookfixed = 1;
	config.booklimit = booklimit || 10;

	var onPeriod = function(e,sim){
	    if (sim.period<config.periods){
		$('#resultPlot'+slot).html("<h1>"+Math.round(100*sim.period/config.periods)+"% complete</h1>");
	    } else {
		$('#resultPlot'+slot).html("");
	    }
	};

	var onDone = function(e,sim){
	    showSimulation(sim, slot);
	}; 

	var mysim = SMRS.runSimulation(simConfig, onDone, onPeriod); 
	plotParameters(mysim, slot);
	if (mysim.config.periods>500){
	    delete mysim.logs.buyorder;
	    delete mysim.logs.sellorder;
	}

	return mysim;
	
    }

    /* expose these app functions to outside code */

    return {
	init: function init(){
	    var editorElement = document.getElementById('editor');
	    var editorOptions = {
		schema: require('./configSchema.json'),
		startval: require('./examples-highlow.json')
	    };
	    editor = new window.JSONEditor(editorElement, editorOptions);
	},

	run: function run(){
	    $('.paramPlot').html("");
	    $('.resultPlot').html("");
	    var config = editor.getValue();
	    sims = config.map(runSimulation);
	},
	
	next: function next(){ 
	    visual++;
	    sims.forEach(showSimulation);
	}
    };

})();

$(function(){
    'use strict';
    app.init();
});

$('#runButton').click(app.run);
$('#nextButton').click(app.next);
