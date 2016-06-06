/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* jshint browserify:true,jquery:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true,unused:true */
/* globals console:true */

var app = (function(){
    'use strict';
    var SMRS = require('single-market-robot-simulator');
    require('json-editor'); // defines window.JSONEditor
    if (!(window.JSONEditor))
	throw new Error("required json-editor not found at window.JSONEditor");
    /* enable use of twitter bootstrap 3 by json editor. requires bootstrap 3 css/js to be loaded in index.html */
    window.JSONEditor.defaults.options.theme = 'bootstrap3';
    const plotly = require('plotly.js');
    if (!(plotly))
	throw new Error("require('plotly.js') failed");
    function debounce(a, b){
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

    var editor;

    function init(){
	var editorElement = document.getElementById('editor');
	var editorOptions = {
	    schema: require('./configSchema.json'),
	    startval: require('./examples-highlow.json')
	};
	editor = new window.JSONEditor(editorElement, editorOptions);
    }

    function main(){
	$('.paramPlot').html("");
	$('.resultPlot').html("");
	editor.getValue().forEach(runSimulation);
    }

    function runSimulation(simConfig, slot){
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
	    var i,l;
	    var xboth=[];
	    var buyerValues = asPositiveNumberArray(sim.options.buyerValues);
	    var sellerCosts = asPositiveNumberArray(sim.options.sellerCosts);
	    for(i=0,l=Math.max(buyerValues.length,sellerCosts.length);i<l;++i){
		xboth[i]=1+i;
	    }
	    $('#paramPlot'+slot).html('');
	    var demand = {
		name: 'unit value',
		x: xboth.slice(0,buyerValues.length),
		y: buyerValues,
		mode: 'lines+markers',
		type: 'scatter'
	    };
	    var supply = {
		name: 'unit cost',
		x: xboth.slice(0,sellerCosts.length),
		y: sellerCosts,
		mode: 'lines+markers',
		type: 'scatter'
	    };
	    var layout = {
		xaxis: {
		    range: [0, xboth.length]
		},
		yaxis: {
		    range: [0,200]
		}
	    };
	    var plotlyData = [demand, supply];
	    plotly.newPlot('paramPlot'+slot, plotlyData, layout);
	    
	};


	
	var onPeriod = function(e,sim){
	    console.log(sim.period, config.periods, slot);
	    if (sim.period<config.periods){
		$('#resultPlot'+slot).html("<h1>"+Math.round(100*sim.period/config.periods)+"% complete</h1>");
	    } else {
		$('#resultPlot'+slot).html("");
	    }
	};

	var asSeries = function(data){
	    var result = {};
	    var header = data[0];
	    var i,l,row,j,k;
	    for(i=0,l=header.length;i<l;++i)
		result[header[i]] = [];
	    for(i=1,l=data.length;i<l;++i){
		row = data[i];
		for(j=0,k=row.length;j<k;++j)
		    result[header[j]][i-1] = row[j];
	    }
	    return result;
	};

	var plotPriceTimeSeries = function(sim){
	    var tCol = sim.logs.trade.data[0].indexOf("t");
	    var priceCol = sim.logs.trade.data[0].indexOf("price");
	    var i,l,x=[],y=[];
	    var d = sim.logs.trade.data;
	    for(i=1,l=d.length;i<l;++i){
		x[i-1] = d[i][tCol];
		y[i-1] = d[i][priceCol];
	    }
	    var trace = {
		x: x,
		y: y,
		type: 'scatter',
		mode: 'lines+markers'
	    };
	    var layout = {
		yaxis: {
		    range: [0,200]
		}
	    };
	    plotly.newPlot('resultPlot'+slot, [trace], layout);
	};

	var prepOHLC = function(sim){
	    if (sim.logs.ohlc.data[0][0]!=='period')
		sim.logs.ohlc.data.unshift(['period',
					    'open',
					    'high',
					    'low',
					    'close']);
	    var series = asSeries(sim.logs.ohlc.data);
	    var data = [
		{
		    name: 'open',
		    x: series.period,
		    y: series.open,
		    type: 'scatter',
		    mode: 'markers'
		},
		{
		    name: 'high',
		    x: series.period,
		    y: series.high,
		    type: 'scatter',
		    mode: 'markers'
		},
		{
		    name: 'low',
		    x: series.period,
		    y: series.low,
		    type: 'scatter',
		    mode: 'markers'
		},
		{
		    name: 'close',
		    x: series.period,
		    y: series.close,
		    type: 'scatter',
		    mode: 'lines+markers'
		}];

	    return data;
	};

	var plotOHLC = function(sim){
	    var layout = {
		yaxis: {
		    range: [0,200]
		}
	    };
	    
	    var data = prepOHLC(sim);

	    plotly.newPlot('resultPlot'+slot, data, layout);

	};

	var plotOHLCHistogram = function(sim){
	    var layout = {
		barmode: 'overlay',
		xaxis: {
		    range: [0,100]
		}
	    };
	    var data = (prepOHLC(sim)
			.filter(function(plot){
			    return (plot.name==='open') || (plot.name==='close');
			})
			.map(function(plot){
			    plot.x = plot.y;
			    delete plot.y;
			    delete plot.mode;
			    plot.type = 'histogram';
			    plot.opacity = 0.60;
			    plot.nbinsx = 100;
			    return plot;
			})
		       );
	    
	    plotly.newPlot('resultPlot'+slot, data, layout);
	};

	var visualizations = [plotOHLCHistogram, plotOHLC, plotPriceTimeSeries];

	var clickCounter = 0;

	var draw = function(sim){
	    var drawme = function(){ draw(sim); };
	    $('#changeVisualization').off('click', drawme);
	    $('#resultPlot'+slot).html("");
	    visualizations[clickCounter](sim);
	    clickCounter = (1+clickCounter)%(visualizations.length);
	    setTimeout(function(){
		$('#changeVisualization').on('click',  drawme);
	    }, 500);
	};

	var onDone = function(e,sim){
	    draw(sim);
	    setTimeout(redrawStepChart, 500, sim);
	}; 

	var mysim = SMRS.runSimulation(config, onDone, onPeriod); 
	if (config.periods>=100)
	    delete mysim.logs.order;
	redrawStepChart(mysim, slot);
    }
    return {
	init: init,
	main: main
    };
})();

$(function(){
    'use strict';
    app.init();
});

$('#runButton').click(app.main);

