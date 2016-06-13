/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* jshint browserify:true,jquery:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true,unused:true */

require('json-editor'); // defines window.JSONEditor

/* enable use of twitter bootstrap 3 by json editor. requires bootstrap 3 css/js to be loaded in index.html */
window.JSONEditor.defaults.options.theme = 'bootstrap3';
window.JSONEditor.defaults.options.iconlib = 'bootstrap3';

/* defines a function accepting string, returning array of positive numbers or undefined */
const positiveNumberArray = require('positive-number-array');

/* defines array functions from d3 */
const d3A = require('d3-array');

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
const transpluck = require('transpluck');
const SMRS       = require('single-market-robot-simulator');


var app = (function(){
    'use strict';

    var editor;
    
    window.sims=[];

    function yaxisRange(sim){ 
	return {
	    yaxis: {
		range: [(sim.config.L || 0), (sim.config.H || 200)]
	    }
	};  
    }

    function plotParameters(sim, slot){
	var i,l;
	var xboth=[];
	var buyerValues = sim.config.buyerValues.slice().sort(function(a,b){ return +b-a;});
	var sellerCosts = sim.config.sellerCosts.slice().sort(function(a,b){ return +a-b;});
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
	var layout = Object.assign({}, yaxisRange(sim), { xaxis: { range: [0, xboth.length] } } );
	var plotlyData = [demand, supply];
	plotly.newPlot('paramPlot'+slot, plotlyData, layout);	
    }

    function plotFactory(chart){
	/* chart properties are title, log, names, xs, ys, modes, layout */
	return function(sim) {
	    var series = transpluck(sim.logs[chart.log].data, { pluck: [].concat(chart.xs,chart.ys) });
	    var traces = chart.names.map(function(name,i){
		return {
		    name: name,
		    x: series[chart.xs[i%chart.xs.length]],
		    y: series[chart.ys[i%chart.ys.length]],
		    type: 'scatter',
		    mode: chart.modes[i%chart.modes.length]
		};
	    });
	    var layout = Object.assign({}, {title: chart.title}, yaxisRange(sim), chart.layout);
	    return [traces, layout];
	};
    }

    function histogramFactory(chart){
	/* req chart properties are title, names, logs, vars */ 
	/* opt chart properties are bins, range */
	return function(sim){ 
	    var traces = chart.names.map(function(name,i){
		var mylog = chart.logs[i%chart.logs.length];
		var myvar = chart.vars[i%chart.vars.length];
		return {
		    name: name,
		    x: transpluck(sim.logs[mylog].data, {pluck: [myvar]})[myvar],
		    type: 'histogram',
		    opacity:  0.60,
		    nbinsx: 100
		};
	    });
	    var myrange, mybins;
	    var mymin,mymax; 
	    if (chart.range){ 
		myrange = chart.range;
	    } else {
		mymin = d3A.min(traces, function(trace){ 
		    return d3A.min(trace.x);
		});
		mymax = d3A.max(traces, function(trace){
		    return d3A.max(trace.x);
		});
		myrange = [mymin, mymax];
	    }
	    if (chart.bins) { 
		mybins = chart.bins;
	    } else {
		mybins = Math.max(0, Math.min(200, Math.floor(1+mymax-mymin)));
	    }
	    if (mybins && mybins!==100)
		traces.forEach(function(trace){ trace.nbinsx = mybins; });
	    var layout ={
		barmode: 'overlay',
		xaxis: {
		    range: myrange
		},
		title: chart.title
	    };
	    return [traces, layout];
	};
    }

    function histogram2DFactory(chart){
	/* req chart properties are title, names, logs, vars */
	['names','logs','vars'].forEach(function(prop){ 
	    if (!Array.isArray(chart[prop]))
		throw new Error("histogram2DFactory: Expected array for chart."+prop+" got: "+typeof(chart[prop]));
	    if ((chart[prop].length===0) || (chart[prop].length>2))
		throw new Error("histogram2DFactory: Expected "+prop+" to be array of length 1 or 2, got: "+chart[prop].length);
	});

	return function(sim){
	    var series = chart.names.map(function(name,i){
		var mylog = chart.logs[i%chart.logs.length];
		var myvar = chart.vars[i%chart.vars.length];
		return transpluck(sim.logs[mylog].data, 
				  {pluck: [myvar]})[myvar];
	    });

	    var points = Object.assign(
		{},
		{
		    x: series[0],
		    y: series[1],
		    mode: 'markers',
		    name: 'points',
		    marker: {
			color: 'rgb(102,0,0)',
			size: 2,
			opacity: 0.4
		    }
		},
		chart.points
	    );
				       

	    var density = Object.assign(
		{},
		{
		    x: series[0],
		    y: series[1],
		    name: 'density',
		    ncontours: 30,
		    colorscale: 'Hot',
		    reversescale: true,
		    showscale: false,
		    type: 'histogram2dcontour'
		},
		chart.density
	    );
	    
	    var upper = Object.assign(
		{},
		{
		    x: series[0],
		    name: chart.names[0],
		    marker: { color: points.marker.color},
		    yaxis: 'y2',
		    type: 'histogram'
		},
		chart.upper
	    );
	    
	    var right = Object.assign(
		{},
		{
		    y: series[1],
		    name: chart.names[1],
		    marker: { color: points.marker.color},
		    xaxis: 'x2',
		    type: 'histogram'
		},
		chart.right
	    );
	    
	    var axiscommon = Object.assign(
		{},
		{
		    showgrid: false,
		    zeroline: false
		},
		chart.axiscommon
	    );

	    var layout = Object.assign(
		{},
		{
		    title: chart.title,
		    showlegend: false,
		    margin: {t: 50},
		    hovermode: 'closest',
		    bargap: 0,
		    xaxis: Object.assign(
			{},
			axiscommon,
			{ domain: [0,0.8] }
		    ),
		    yaxis: Object.assign(
			{},
			axiscommon,
			{ domain: [0,0.8] }
		    ),
		    xaxis2: Object.assign(
			{},
			axiscommon,
			{ domain: [0.8,1] }
		    ),
		    yaxis2: Object.assign(
			{},
			axiscommon,
			{ domain: [0.8,1] }
		    )
		},
		chart.layout
	    );

	    return [[points, density, upper, right], layout];

	};
    }

    function prepOHLC(sim){
	var series = transpluck(sim.logs.ohlc.data,['period','open','high','low','close']);
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
    }


    function plotOHLCHistogram(sim){
	var layout = {
	    barmode: 'overlay',
	    xaxis: {
		range: [
		    (sim.config.L || 0),
		    (sim.config.buyerValues[0] || 100)
		]
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
			plot.nbinsx = layout.xaxis.range[1]-layout.xaxis.range[0];
			return plot;
		    })
		   );
	
	return [data, layout];
    }

    function plotOHLCTimeSeries(sim){
	var layout = yaxisRange(sim);	
	var data = prepOHLC(sim);

	return [data, layout];

    }

    var visual = 0;
	
    var smallDataVisuals = [
	plotOHLCTimeSeries,
	plotFactory({
	    title: "trade volume by period",
	    log: "volume",
	    names: ["volume"],
	    xs: ['period'],
	    ys: ['volume'],
	    modes: ['markers'],
	    layout: {yaxis: { }}
	}),
	plotFactory({
	    title: "trade prices",
	    log: "trade",
	    names: ["trades"],
	    xs: ['t'],
	    ys: ['price'],
	    modes: ['markers+lines']
	}),
	plotFactory({
	    title: "trade profitability",
	    log: "trade",
	    names: ["trade","unit value","unit cost"],
	    xs: ["t"],
	    ys: ['price','buyerValue','sellerCost'],
	    modes: ["markers+lines","markers","markers"]
	}),
	histogramFactory({
	    title: "order price distribution",
	    names: ["buyLimitPrice","sellLimitPrice"],
	    logs: ["buyorder","sellorder"],
	    vars: ["buyLimitPrice","sellLimitPrice"]
	})
    ];

    var mediumDataVisuals = [
	histogram2DFactory({
	    title: "close price(y) by volume(x)",
	    names: ["volume","close"],
	    logs: ["volume","ohlc"],
	    vars: ["volume","close"]
	}),
	histogram2DFactory({
	    title: "close price(y) vs open price(x)",
	    names: ["open","close"],
	    logs: ["ohlc"],
	    vars: ["open","close"]
	}),
	histogram2DFactory({
	    title: "trade price(y) vs time in period (tp)",
	    names: ["time","price"],
	    logs: ["trade"],
	    vars: ["tp","price"]
	}),
	histogramFactory({
	    title: "periods (y) by volume(x) histogram",
	    names: ["volume"],
	    logs: ["volume"], 
	    vars: ["volume"]
	}),
	histogramFactory({
	    title: "trades(y) by price(x) histogram",
	    names: ["trades"],
	    logs: ["trade"],
	    vars: ["price"]
	}),
	histogramFactory({
	    title: "trades(y) by profit(x) histogram",
	    names: ["buyer", "seller"],
	    logs:  ["trade"],
	    vars:  ["buyerProfit","sellerProfit"]
	}),
	histogram2DFactory({
	    title: "sellerProfit(y) vs buyerProfit(x)",
	    names: ["buyerProfit","sellerProfit"],
	    logs: ["trade"],
	    vars: ["buyerProfit","sellerProfit"]
	}),
	histogramFactory({
	    title: "trades(y) by cost/value(x) histogram",
	    names: ["buyer","seller"],
	    logs: ["trade"],
	    vars: ["buyerValue","sellerCost"]
	}),
	histogram2DFactory({
	    title: "buyerValue(y) vs sellerCost(x) trade histogram",
	    names: ["seller","buyer"],
	    logs: ["trade"],
	    vars: ["sellerCost","buyerValue"]
	}),
	histogramFactory({
	    title: "trades(y) by time (tp) histogram",
	    names: ["tp"],
	    logs: ["trade"],
	    vars: ["tp"]
	}),
	histogramFactory({
	    title: "order price distribution",
	    names: ["buyLimitPrice","sellLimitPrice"],
	    logs: ["buyorder","sellorder"],
	    vars: ["buyLimitPrice","sellLimitPrice"]
	})
    ];	    

    var largeDataVisuals = [
	histogram2DFactory({
	    title: "close price(y) by volume(x)",
	    names: ["volume","close"],
	    logs: ["volume","ohlc"],
	    vars: ["volume","close"]
	}),
	histogram2DFactory({
	    title: "close price(y) vs open price(x)",
	    names: ["open","close"],
	    logs: ["ohlc"],
	    vars: ["open","close"]
	}),
	histogram2DFactory({
	    title: "trade price(y) vs time in period (tp)",
	    names: ["time","price"],
	    logs: ["trade"],
	    vars: ["tp","price"]
	}),
	histogramFactory({
	    title: "periods (y) by volume(x) histogram",
	    names: ["volume"],
	    logs: ["volume"], 
	    vars: ["volume"]
	}),
	histogramFactory({
	    title: "trades(y) by price(x) histogram",
	    names: ["trades"],
	    logs: ["trade"],
	    vars: ["price"]
	}),
	histogramFactory({
	    title: "trades(y) by profit(x) histogram",
	    names: ["buyer", "seller"],
	    logs:  ["trade"],
	    vars:  ["buyerProfit","sellerProfit"]
	}),
	histogram2DFactory({
	    title: "sellerProfit(y) vs buyerProfit(x)",
	    names: ["buyerProfit","sellerProfit"],
	    logs: ["trade"],
	    vars: ["buyerProfit","sellerProfit"]
	}),
	histogramFactory({
	    title: "trades(y) by cost/value(x) histogram",
	    names: ["buyer","seller"],
	    logs: ["trade"],
	    vars: ["buyerValue","sellerCost"]
	}),
	histogram2DFactory({
	    title: "buyerValue(y) vs sellerCost(x) trade histogram",
	    names: ["seller","buyer"],
	    logs: ["trade"],
	    vars: ["sellerCost","buyerValue"]
	}),
	histogramFactory({
	    title: "trades(y) by time (tp) histogram",
	    names: ["tp"],
	    logs: ["trade"],
	    vars: ["tp"]
	})
    ];	    

	    
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
