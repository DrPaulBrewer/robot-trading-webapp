var SMRS = require('single-market-robot-simulator');

function main(){
    var config = {};
    // clear any leftovers
    $('.jqplot-target').remove();
    $('#tradingData').remove();
    // set up and run new simulation
    try {
	config = {
	    "H": 200, 
	    "L":1,
	    "sellerCosts": $('#costs').val().split(" ").map(function(s){return +s;}),
	    "buyerValues": $('#values').val().split(" ").map(function(s){return +s;}),
	    "periods": +($('#periods').val()),
	    "numberOfBuyers": +($('#numberOfBuyers').val()),
	    "numberOfSellers": +($('#numberOfSellers').val()),
	    "buyerRate": +($('#buyerRate').val()),
	    "sellerRate": +($('#sellerRate').val()),
	    "periodDuration": +($('#periodDuration').val())
	};
    } catch(e){
	console.log(e);
	$('#runError').text(e);
    }
    var onPeriod = function(e,sim){
	var plotOptions = {
	    title: "ZI robot trades - Period "+sim.period,
	    axes:{
		xaxis:{
		    show:true,
		    label: 't(sec)',
		    min:0,
		    max: sim.periodDuration
		},
		yaxis:{
		    show:true,
		    label: 'price',
		    min:0,
		    max: Math.max.apply(Math,config.buyerValues)
		}
	    }
	};
	(CSV
	 .begin(sim.logs.trade.data)
	 .hslice({period:[sim.period,sim.period]})
	 .jqplot([
	     ["ZI-period-"+sim.period,
	      [["t","price"]],
	      plotOptions
	     ]
	 ])
	 .go()
	);
    };

    var makeTradeTable = function(sim){
	(CSV
	 .begin(sim.logs.trade.data)
	 .table("tradingData",{caption:"ZI Robot Market Trades"})
	 .go()
	);
    };
    
    var onDone = function(e,sim){
	setTimeout(makeTradeTable, 300, sim);
    }; 

    var mysim = SMRS.runSimulation(config, onDone, onPeriod); 
}


$('#runButton').click(main);
