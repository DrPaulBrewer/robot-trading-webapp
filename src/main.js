/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* eslint no-console: "off" */
import 'core-js';
import 'whatwg-fetch';  // Polyfill defines ES7 window.fetch
import "json-editor"; // defines window.JSONEditor
import jsonEditorPositiveNumberArrayTextarea from "json-editor-positive-number-array-textarea";
import * as SMRS from "single-market-robot-simulator";
import * as VIZ from "single-market-robot-simulator-viz-plotly";
import * as DB from "single-market-robot-simulator-db-local";
import * as AF from "single-market-robot-simulator-app-framework";
import {customViz} from './custom/customViz';
import smallDataVisualsJSON from "../json/small-data-visuals.json!";
import mediumDataVisualsJSON from "../json/medium-data-visuals.json!";
import configSchema from "../json/configSchema.json!";
import examplesHighLow from "../json/examples-highlow.json!";
import packageJSON from "../package.json!";
import behavior from "../json/app-click-behavior.json!";

$('#version').html("<p>Software package information from package.json</p><pre>"+JSON.stringify(packageJSON, null, 4)+"</pre>");

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

const Visuals = {
    params: plotParamsSupplyDemand,
    small: smallDataVisuals,
    medium: mediumDataVisuals,
    large: largeDataVisuals
};

// set if unset

DB.init(window.sessionStorage);
DB.openList("saveList", [examplesHighLow]);

const app = new AF.App({
    SMRS,
    DB,
    Visuals,
    behavior,
    saveList: "saveList",
    trashList: "trashList",
    editorConfigSchema: configSchema,
    editorStartValue: examplesHighLow
});

// with DB from single-robot-market-simulator-db-webdismay use $('#uploadButton').click(()=>(app.uploadData()));
// with DB from single-robot-market-simulator-db-local upload should be disabled with an alert message.

$('#uploadButton').click(()=>(window.alert("upload to private cloud unavailable in demo mode. Contact drpaulbrewer@eaftc.com to discuss private cloud simulations.")));

$("a.innerurl").each(function(){$(this).html(this.href);});
$('li a').click(function(){ setTimeout(()=>(app.refresh()), 200); });

$(function(){
    app.init();
});

