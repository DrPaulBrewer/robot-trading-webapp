/* Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC */
/* This file is open source software.  The MIT License applies to this software. */

/* jshint browserify:true,jquery:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true,unused:true */
/* global sims:true, plotly:true */

import "json-editor"; // defines window.JSONEditor
import * as SMRS from "single-market-robot-simulator";
import * as VIZ from "single-market-robot-simulator-viz-plotly";
import saveZip from "single-market-robot-simulator-savezip";
import smallDataVisuals from "./small-data-visuals.json!";
import mediumDataVisuals from "./medium-data-visuals.json!";
import configSchema from "./configSchema.json!";
import examplesHighLow from "./examples-highlow.json!";
import positiveNumberArray from "positive-number-array";


