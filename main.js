/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* jshint browserify:true,jquery:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true,unused:true */
/* globals CSV:false */

var SMRS = require('single-market-robot-simulator');
require('json-editor'); // defines window.JSONEditor
if (!(window.JSONEditor))
    throw new Error("required json-editor not found at window.JSONEditor");

function debounce(a, b){
    'use strict';
    var ms = (typeof(a)==='number')? a: b;
    var func = (typeof(a)==='function')? a: b;
    var timer;
    if ((typeof(ms)==='number') && (typeof(func)==='function'))
	return function(){
	    clearTimeout(timer);
	    timer = setTimeout(func, ms);
	};
    else 
	return function(){};
}
    
function asPositiveNumberArray(myInput){
    'use strict';
    if (typeof(myInput)==="string")
	return (myInput
		.replace(/,/g," ")
		.split(/\s+/)
		.map(function(s){ return +s; })
		.filter(function(n){ return n>0; })
	       );
    if (Array.isArray(myInput))
	return (myInput
		.map(function(s){ return +s; })
		.filter(function(n){ return n>0; })
	       );
    throw new Error("asPositiveNumberArray: could not parse myInput"+myInput);
}

function init(){
    'use strict';
    var editorElement = document.getElementById('editor');
    var editorOptions = {
	schema: require('./configSchema.json'),
	startval: require('./examples-highlow.json')
    };
    window.editor = new window.JSONEditor(editorElement, editorOptions);
}

function main(){
    'use strict';
    $('.paramPlot').html("");
    $('.resultPlot').html("");
    window.editor.getValue().forEach(runSimulation);
}

function runSimulation(simConfig, slot){
    'use strict';
    // clear any leftovers
    $('#paramPlot'+slot).html("");
    $('#resultPlot'+slot).html("");
    // set up and run new simulation
    var config = Object.assign({}, simConfig);
    config.xMarket = Object.assign({}, simConfig.xMarket);
    var booklimit = Math.max(config.buySellBookLimit, config.buyerImprovementRuleLevel, config.sellerImprovementRuleLevel);
    config.bookfixed = 1;
    config.booklimit = booklimit || 10;

    var redrawStepChart = function(sim, slot){
	var buyerValues = asPositiveNumberArray(sim.options.buyerValues);
	var sellerCosts = asPositiveNumberArray(sim.options.sellerCosts);
	$('#paramPlot'+slot).html('');
	$.jqplot("paramPlot"+slot, 
		 [buyerValues,sellerCosts],
		 { 
		     seriesDefaults:{
			 step: true
		     },
		     axes:{
			 xaxis:{
			     show:true,
			     tickInterval: 1
			 },
			 yaxis:{
			     show:true,
			     min:0,
			     max: sim.options.H
			 }
		     }	 
		 }
		);
    };


    
    var onPeriod = function(e,sim){
	console.log(sim.period, config.periods, slot);
	if (sim.period<config.periods){
	    $('#resultPlot'+slot).html("<h1>"+Math.round(100*sim.period/config.periods)+"% complete</h1>");
	} else {
	    $('#resultPlot'+slot).html("");
	}
    };

    var makeTradeTable = function(sim){
	(CSV
	 .begin(sim.logs.trade.data)
	 .table("tradingData",{caption:"ZI Robot Market Trades"})
	 .go()
	);
    };

    var activateDownloadButton = function(sim){
	$('<button id="downloadButton">Download trades.csv file</button>').insertAfter("#tradingData");
	$('#downloadButton').click(function(){
	    (CSV
	     .begin(sim.logs.trade.data)
	     .download("trades.csv")
	     .go()
	    );
	});
    };
    
    var plotPriceTimeSeries = function(sim){
	var plotOptions = {
	    axes:{
		xaxis:{
		    show:true,
		    min:0,
		    max: (1+sim.period)*sim.periodDuration,
		    tickInterval: 1000
		},
		yaxis:{
		    show:true,
		    min:0,
		    max: sim.options.H
		}
	    }
	};
	(CSV
	 .begin(sim.logs.trade.data)
	 .jqplot([
	     ["resultPlot"+slot,
	      [["t","price"]],
	      plotOptions
	     ]
	 ])
	 .go()
	);
    };

    var plotOHLC = function(sim){
	var plotOptions = {
	    axes:{
		xaxis: {
		    tickInterval: 1
		},
		y2axis: {
		    show: true,
		    min: 0,
		    max: sim.options.H
		}
	    },
	    seriesDefaults:{yaxis:'y2axis'},
	    series: [{renderer:$.jqplot.OHLCRenderer}]
	};
	$.jqplot("resultPlot"+slot, [sim.logs.ohlc.data], plotOptions);
    };

    var clickCounter = 0;
    var visualizations = [plotOHLC, plotPriceTimeSeries];

    var draw = function(sim){
	$('#resultPlot'+slot).html("");
	$('#resultPlot'+slot).off('click');
	visualizations[clickCounter](sim);
	clickCounter = (1+clickCounter)%(visualizations.length);
	console.log("clickCounter", clickCounter);
	setTimeout(function(){
	    $('#resultPlot'+slot).on('click',  function(){
		draw(sim);
	    });
	}, 500);
    };

    var onDone = function(e,sim){
	draw(sim);
	setTimeout(redrawStepChart, 500, sim);
	// setTimeout(makeTradeTable, 700, sim);
	// setTimeout(activateDownloadButton, 1000, sim);
    }; 

    var mysim = SMRS.runSimulation(config, onDone, onPeriod); 
    redrawStepChart(mysim, slot);
}

$(function(){
    'use strict';
    init();
});

$('#runButton').click(main);
