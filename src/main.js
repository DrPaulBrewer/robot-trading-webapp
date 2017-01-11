/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* global Plotly:true */

/* eslint no-console: "off" */

import 'core-js';
import 'whatwg-fetch';  // Polyfill defines ES7 window.fetch
import "json-editor"; // defines window.JSONEditor
import clone from "clone";
import jsonEditorPositiveNumberArrayTextarea from "json-editor-positive-number-array-textarea";
import * as SMRS from "single-market-robot-simulator";
import * as VIZ from "single-market-robot-simulator-viz-plotly";
import saveZip from "single-market-robot-simulator-savezip";
import * as WDM from "webdismay";
import {customViz} from './custom/customViz';
import smallDataVisualsJSON from "../json/small-data-visuals.json!";
import mediumDataVisualsJSON from "../json/medium-data-visuals.json!";
import configSchema from "../json/configSchema.json!";
import examplesHighLow from "../json/examples-highlow.json!";
import packageJSON from "../package.json!";

$('#version').html("<p>Software package information from package.json</p><pre>"+JSON.stringify(packageJSON, null, 4)+"</pre>");

window.WDM = WDM;

const myVIZ = Object.assign({}, (VIZ.helpers || VIZ ), customViz());

/* enable use of twitter bootstrap 3 by json editor. requires bootstrap 3 css/js to be loaded in index.html */

window.JSONEditor.defaults.options.theme = 'bootstrap3';
window.JSONEditor.defaults.options.iconlib = 'bootstrap3';

jsonEditorPositiveNumberArrayTextarea();

const smallDataVisuals = VIZ.build(smallDataVisualsJSON, myVIZ);
const mediumDataVisuals = VIZ.build(mediumDataVisualsJSON, myVIZ);

const largeDataJSON = mediumDataVisualsJSON.filter(function(V){
    return (!V.logs) || ((V.logs.indexOf("buyorder")===-1) && (V.logs.indexOf("sellorder")===-1));
});
const largeDataVisuals = VIZ.build(largeDataJSON, myVIZ);
const plotParamsSupplyDemand = VIZ.helpers.supplyDemand();

const app = ((function(){
    
    let editor;
    let periodsEditor;
    const periodTimers = [];
    let savedConfigs = [];
    let chosenScenarioIndex = 0;
    const saveList  = WDM.list('saveList');
    const trashList = WDM.list('trashList');
    
    window.sims=[];

    let visual = 0;

    function commonFrom(config){
        return function(c){
            const result =  Object.assign({},clone(c),clone(config.common));
            return result;
        };
    }

    function adjustBook(sim){
        sim.bookfixed=1;
        sim.booklimit = Math.max(...([sim.buySellBookLimit, sim.buyerImprovementRule, sim.sellerImprovementRule]
                                     .filter((x)=>(typeof(x) === 'number')))) || 10;
        return sim;
    }

    function allSim(config){
        return (config
                .configurations
                .map(commonFrom(config))
                .map(adjustBook)
                .map((s)=>(new SMRS.Simulation(s)))
                );
    }

    function plotParameters(sim, slot){
        const plotlyParams = plotParamsSupplyDemand(sim);
        plotlyParams.unshift("paramPlot"+slot);
        Plotly.newPlot(...plotlyParams);
    }

    function showParameters(conf){
        $('.paramPlot').html("");
        (conf
         .configurations
         .map(commonFrom(conf))
         .map((config)=>(new SMRS.Simulation(config)))
         .forEach(plotParameters)
        );
    }    

    function guessTime(){
        const l = periodTimers.length;
        let guess = 0;
        if (l>2){ 
            guess = ((periodsEditor.getValue())*(periodTimers[l-1]-periodTimers[1])/(l-2))+periodTimers[1];
        } else if (l===2){
            guess = (periodsEditor.getValue())*periodTimers[1];
        }
        if (guess){
            const seconds = Math.round(guess/1000.0);
            const minutes = Math.ceil(seconds/60);
            $('span.estimated-running-time').text((minutes>1)? ('~'+minutes+'min'): ('~'+seconds+'sec'));
        } else {
            $('span.estimated-running-time').text("?");
        }
    }
    
    function timeit(scenario){
        const t0 = Date.now();
        periodTimers.length = 0;
        function markperiod(sim){
            const elapsed = Date.now()-t0;
            periodTimers[sim.period] = elapsed;
            // hack to end simulations if over 5 sec
            if (elapsed>5000)
                sim.config.periods = 0;
            return sim;
        }
        const scenario2p = clone(scenario);
        scenario2p.common.periods=5;
        (Promise.all(
            allSim(scenario2p).map((s)=>(s.run({update: markperiod})))
        ).then(function(){
            console.log("simulation period timers", periodTimers);
            guessTime();
        })
         .catch((e)=>(console.log(e)))
             );
    }

    function choose(n){
        chosenScenarioIndex = Math.max(0, Math.min(Math.floor(n),savedConfigs.length-1));
        const choice = savedConfigs[chosenScenarioIndex];
        if (choice){
            editor.setValue(clone(choice));
            // initialize periodsEditor only after a scenario is chosen
            periodsEditor = editor.getEditor('root.common.periods');
            timeit(clone(choice)); // time a separate clone
            app.refresh();
        }
    }   

    function renderConfigSelector(){
        $("#selector > option").remove();
        savedConfigs.forEach((c,n)=> ($("#selector").append('<option value="'+n+'">'+c.title+'</option>')));
        $('#selector').on('change', (evt)=>choose(evt.target.selectedIndex));
    }

    function getVisuals(simConfig){
        let visuals = [];
        const cfg = simConfig.config || simConfig;
        if (cfg.periods<=50)
            visuals = smallDataVisuals;
        else if (cfg.periods<=500)
            visuals = mediumDataVisuals;
        else
            visuals = largeDataVisuals;
        return visuals;
    }

    function showSimulation(simConfig, slot){
        let visuals = getVisuals(simConfig);
        let plotParams = visuals[visual%visuals.length](simConfig);
        plotParams.unshift('resultPlot'+slot);
        Plotly.newPlot(...plotParams);
    }

    function runSimulation(simConfig, slot){
        // set up and run new simulation

        function onPeriod(sim){
            if (sim.period<sim.config.periods){
                $('#resultPlot'+slot).html("<h1>"+Math.round(100*sim.period/sim.config.periods)+"% complete</h1>");
            } else {
                $('#resultPlot'+slot).html("");
            }
            return sim;
        }

        function onDone(sim){
            function toSelectBox(v,i){
                return [
                    '<option value="',
                    i,
                    '"',
                    ((i===visual)? ' selected="selected" ': ''),
                    '>',
                     (v.meta.title || v.meta.f),
                    '</option>'
                ].join('');
            }
            const visuals = getVisuals(simConfig);
            if (Array.isArray(visuals)){
                const vizchoices = visuals.map(toSelectBox).join("");
                $('#vizselect').html(vizchoices);
            } else {
                console.log("invalid visuals", visuals);
            }
            showSimulation(sim, slot);
            $('.spinning').removeClass('spinning');
            $('.postrun').removeClass('disabled');
            $('.postrun').prop('disabled',false);
        } 

        adjustBook(simConfig);

        let mysim = new SMRS.Simulation(simConfig);

        plotParameters(mysim, slot);

        (mysim
         .run({update: onPeriod})
         .then(onDone)
         .catch(function(e){ console.log(e); })
        );
        if (mysim.config.periods>500){
            delete mysim.logs.buyorder;
            delete mysim.logs.sellorder;
        }

        return mysim;
        
    }

    function expand(how){
        const xfactor = +$('#xfactor').val();
        const config = editor.getValue();
        if (xfactor){
            config.title += ' x'+xfactor;
            config.configurations.forEach(function(sim){
                sim.buyerValues = how(sim.buyerValues, xfactor);
                sim.sellerCosts = how(sim.sellerCosts, xfactor);
                if (sim.numberOfBuyers>1) 
                    sim.numberOfBuyers  *= xfactor;
                if (sim.numberOfSellers>1)
                    sim.numberOfSellers *= xfactor;
            });
            editor.setValue(config);
            timeit(clone(config));
            app.refresh();
        }
    }

    /* expose these app functions to outside code */

   return {
        init(){
            $('.postrun').prop('disabled',true);
            let editorElement = document.getElementById('editor');
            let editorOptions = {
                schema: configSchema,
                startval: examplesHighLow
            };
            editor = new window.JSONEditor(editorElement, editorOptions);
            editor.on('change', function(){
                $('#runError').html("Click >Run to run the simulation and see the new results");
            });
            window.E = editor;
            (saveList
             .getAll()
             .then(function(configs){
                 if (Array.isArray(configs) && (configs.length)){
                     savedConfigs = configs;
                     renderConfigSelector();
                     choose(0);
                 }
             })
            );                                               
        },

        estimateTime(){
            timeit(editor.getValue());
        },

        refresh(){
            if (periodsEditor){
                $('input.periods').val(periodsEditor.getValue());
                $('span.periods').text(periodsEditor.getValue());
                guessTime();
            }
            if (editor){
                const current = editor.getValue();
                showParameters(current);
                $('.configTitle').text(current.title);
                $('#xsimbs').html(
                    "<tr>"+(current
                            .configurations
                            .map(
                                function(config,j){
                                    const data = [j,config.numberOfBuyers,config.numberOfSellers];
                                    return "<td>"+data.join("</td><td>")+"</td>";
                                })
                            .join('</tr><tr>')
                           )+"</tr>");
                plotParameters(new SMRS.Simulation((commonFrom(current)(current.configurations[0]))), "ScaleUp");
            }
        },

        interpolate(){
            expand(
                function(a,n){
                    const result = [];
                    for(let i=0,l=a.length;i<(l-1);++i){
                        for(let j=0;j<n;++j){
                            result.push((a[i]*(n-j)+a[i+1]*j)/n);
                        }
                    }
                    const last = a[a.length-1];
                    for(let j=0;j<n;++j)
                        result.push(last);
                    return result;
                }
            );
        },

        duplicate(){
            expand(
                function(a,n){
                    const result = [];
                    for(let i=0,l=a.length;i<l;++i){
                        for(let j=0;j<n;++j){
                            result.push(a[i]);
                        }
                    }
                    return result;
                }
            );
        },

        undo(){
            choose(chosenScenarioIndex);
        },

        moveToTrash(){
            console.log("move-to-trash");
            (trashList
             .len()
             .then(function(trashSize){
                 console.log("trashSize is "+trashSize);
                 (trashList
                  .unshift(savedConfigs[chosenScenarioIndex])
                  .then(function(newTrashSize){
                      console.log("newTrashSize is "+newTrashSize);
                      if (newTrashSize>trashSize){
                          (saveList
                           .remove(savedConfigs[chosenScenarioIndex])
                           .then(function(removedCount){
                               console.log("removedCount is "+removedCount);
                               if (removedCount===1){
                                   savedConfigs.splice(chosenScenarioIndex,1);
                                   renderConfigSelector();
                                   choose(0);
                               } else {
                                   (trashList
                                    .unshift()
                                    .then(()=>(console.log("removed last item from trash to avoid duplication")))
                                   );
                               }
                           })
                          );
                      }
                  })
                 );
             })
            );
        },

        run(){
            $('#runError').html("");
            $('.postrun').removeClass("disabled");
            $('.postrun').addClass("disabled");
            $('.postrun').prop('disabled',true);
            $('.paramPlot').html("");
            $('.resultPlot').html("");
            $('#runButton .glyphicon').addClass("spinning");
            setTimeout(function(){
                let config = editor.getValue();
                window.sims = (config
                               .configurations
                               .map(commonFrom(config))
                               .map(runSimulation)
                              );
            }, 200);
        },

        save(){
            function doSave(){
                (saveList
                 .unshift(editor.getValue())
                 .then(()=>(window.location.reload()))
                );
            }   
            if (savedConfigs.length && (savedConfigs[chosenScenarioIndex]) && (editor.getValue().title===savedConfigs[chosenScenarioIndex].title)){
                (saveList
                 .remove(savedConfigs[chosenScenarioIndex])
                 .then(doSave)
                );
            } else {
                doSave();
            }
        },

        setPeriods(n){
            periodsEditor.setValue(Math.floor(n));
            app.refresh();
        },

       setVisualNumber(n){
           visual = n;
           window.sims.forEach(showSimulation);
       },
       
       downloadData(){
            $('#downloadButton').prop('disabled',true);
            $('#downloadButton').addClass("disabled");
            $('#downloadButton .glyphicon').addClass("spinning");
            setTimeout(function(){
                saveZip({
                    config: editor.getValue(),
                    sims: window.sims,
                    download: true
                }).then(function(){
                    $('#downloadButton .spinning').removeClass("spinning");
                    $('#downloadButton').removeClass("disabled");
                    $('#downloadButton').prop('disabled',false);
                });
            }, 200);
        },

        uploadData(){
            $('#uploadButton').prop('disabled',true);
            $('#uploadButton').addClass('disabled');
            $('#uploadButton .glyphicon').addClass("spinning");
            setTimeout(function(){
                saveZip({
                    config: editor.getValue(), 
                    sims: window.sims, 
                    download: false})
                    .then(function(zipBlob){
                        (WDM
                         .request([zipBlob],"/upload")
                         .then(function(){
                             $('#uploadButton .spinning').removeClass("spinning");
                             $('#uploadButton').removeClass("disabled");
                             $('#uploadButton').prop('disabled',false);
                         })
                         .catch((e)=>(console.log(e)))
                        );
                    });
            }, 200);
        },

        renderTrash(){
            $('#trashList').html("");
            (trashList
             .slice(0,20)
             .then(function(items){
                 items.forEach(function(item){
                     $('#trashList').append('<pre class="pre-scrollable trash-item">'+JSON.stringify(item,null,2)+'</pre>');
                 });
                 $('pre.trash-item').click(function(){
                     try {
                         const restoredScenario = JSON.parse($(this).text());
                         if ( (typeof(restoredScenario)==='object') && 
                              (typeof(restoredScenario.title)==='string') && 
                              (typeof(restoredScenario.common)==='object') && 
                              (Array.isArray(restoredScenario.configurations))
                            ){                        
                             editor.setValue(restoredScenario);
                             $('#editLink').click();
                         } else {
                             console.log("trashed item is not a valid scenario");
                         }
                     } catch(e){ 
                         console.log("could not send trashed item to editor: "+e);
                     }
                 });
             })
            );           
        }
    };

})());

$(function(){
    app.init();
});

$('#vizselect').click( ((evt)=>(app.setVisualNumber(evt.target.value))) );
$("a.innerurl").each(function(){$(this).html(this.href);});
$('button.move-to-trash').click(app.moveToTrash);
$('li.render-trash').click(app.renderTrash);
$('#runButton').click(app.run);
$('button.save-button').click(app.save);
$('#downloadButton').click(app.downloadData);
$('#uploadButton').click(app.uploadData);
$('#interpolateButton').click(app.interpolate);
$('#duplicateButton').click(app.duplicate);
$('button.change-periods').on('click', ((evt)=>app.setPeriods(evt.target.value)));
$('.change-periods').on('change', ((evt)=>app.setPeriods(evt.target.value)));
$('button.undo-button').click(app.undo);
$('li a').click(function(){ setTimeout(app.refresh, 200); });
$('span.glyphicon-time').on('click', app.estimateTime);
