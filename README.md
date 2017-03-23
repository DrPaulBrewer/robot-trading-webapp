# robot-trading-webapp

[![Build Status](https://travis-ci.org/DrPaulBrewer/robot-trading-webapp.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/robot-trading-webapp)

Browser-based numerical market experiment webapp for agent-based computational economics and finance.  

## Trying out the software

Go to:    http://drpaulbrewer.github.io/robot-trading-webapp

You do not need to install anything to try out this software.

The web demo above is pre-configured with a simple comparison of markets with different supply/demand intersection.  

### Initial Screen

Clicking the RUN button will run this simulation.  The number of periods can be selected from the interface.
Once the simulation has been run, there is a choice of visualizations from the pulldown menu.

Parameters of the simulations can be changed by clicking the "EDIT" tab at the top of the screen to expand the editor.

If you want to modify the simulator to work differently, or program your own agents, you may wish to 
install this code to your own server and/or create a fork.

## Installing and Changing the source code:  Pre-requisites

These steps are unnecessary if you are only trying out the software.
A copy of this code is already running publicly on the web, see "Usage" above. 

These installation instructions are indended for usage by technically inclined Ph.D. students or others with expertise
in Linux, Javascript browser and server development, and agent-based economic simulation, who wish to examine the
software more closely or adapt it to other usage.

You need

* a Linux-based web server
* a nodejs development environment
* familiarity with ES6 JavaScript is essential; some knowledge of jspm and npm package management is also useful  

Then:

1. `git clone https://github.com/DrPaulBrewer/robot-trading-webapp`
2. Edit and run the build script in `make-local.sh`, in particular, change these lines before running:

```
# Put *your* code to deploy it below this line
rm -rf /var/web/192.168.1.10/zi
mkdir -p /var/web/192.168.1.10/zi
cp -a * /var/web/192.168.1.10/zi/
```
You need to change `/var/web/192.168.1.10/zi` to the directory where you wish to install the files on your web server.

## Other Modules/Libraries (dependencies)

Code in robot-trading-webapp is limited to creating a user interface for reviewing and changing simulation parameters, 
and generating results in the form of graphs or a downloadable .zip package of simulation logs.

All market and agent processes are conducted in separate, tested modules.  Modules are also used for user interface support,
ETL, plotting, and saving data as zip files.  

Significant modules, including modules authored by others, include:

* [market-agents](https://www.npmjs.com/package/market-agents) generic agent functions, specific agents, and pools of agents
* [market-engine](https://www.npmjs.com/package/market-engine) scaffolding for markets with lists of orders, pre-order checks, cancellation, and expiration
* [market-example-contingent](https://www.npmjs.com/package/market-example-contingent) event-driven sequential double auction market with buy, sell, stop limit, OCO one-cancels-other and OSO one-sends-other functionality
* [single-market-robot-simulator](https://www.npmjs.com/package/single-market-robot-simulator) Multiple period simulations, either syncronous or asynchronous, yielding a data log files or arrays.
* [single-market-robot-simulator-app-framework](https://www.npmjs.com/package/single-market-robot-simulator-app-framework) Framework of web app providing functions such as run, edit, download data, plot selection,  etc.
* [single-market-robot-simulator-viz-plotly](https://www.npmjs.com/package/single-market-robot-simulator-viz-plotly) Extraction and transformation of simulation data to formats needed for specific charts in Plotly
* [single-market-robot-simulator-savezip](https://www.npmjs.com/package/single-market-robot-simulator-savezip) saves configuration and data of an array of simulations as a .zip file using 3rd parties jszip and filesaver.js modules.
* [plotly](https://www.npmjs.com/package/plotly.js) Plotly open source scientific plotting package (commercial 3rd party module, MIT Licensed)
* [json-editor](https://www.npmjs.com/package/json-editor) User-interface manager configured via JSON Schema. 


## Tests

Most imported modules above has tests that can be run by running "npm test" in that module's directory.

The top level code, which processes user input and displays the results, does not include automated tests at this time.

## Copyright

Code authored herein is 

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

## License

[The MIT License](https://github.com/DrPaulBrewer/robot-trading-webapp/blob/master/LICENSE.md)
