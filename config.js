System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clone": "npm:clone@2.1.0",
    "core-js": "npm:core-js@1.2.7",
    "json": "github:systemjs/plugin-json@0.1.2",
    "json-editor": "npm:json-editor@0.7.28",
    "json-editor-positive-number-array-textarea": "npm:json-editor-positive-number-array-textarea@0.4.0",
    "single-market-robot-simulator": "npm:single-market-robot-simulator@0.54.0",
    "single-market-robot-simulator-app-framework": "npm:single-market-robot-simulator-app-framework@0.1.8",
    "single-market-robot-simulator-db-local": "npm:single-market-robot-simulator-db-local@0.1.1",
    "single-market-robot-simulator-savezip": "npm:single-market-robot-simulator-savezip@0.6.0",
    "single-market-robot-simulator-viz-plotly": "npm:single-market-robot-simulator-viz-plotly@0.6.0",
    "systemjs/plugin-json": "github:systemjs/plugin-json@0.1.2",
    "whatwg-fetch": "npm:whatwg-fetch@1.1.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:clone@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:immediate@3.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:json-editor-positive-number-array-textarea@0.4.0": {
      "positive-number-array": "npm:positive-number-array@1.2.0"
    },
    "npm:jszip@3.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-js": "npm:core-js@2.3.0",
      "es6-promise": "npm:es6-promise@3.0.2",
      "lie": "npm:lie@3.1.0",
      "pako": "npm:pako@1.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lie@3.1.0": {
      "immediate": "npm:immediate@3.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:market-agents@0.31.0": {
      "clone": "npm:clone@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "prob.js": "npm:prob.js@1.0.6",
      "random-js": "npm:random-js@1.0.8"
    },
    "npm:market-engine@0.10.5": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:market-example-contingent@0.17.0": {
      "market-engine": "npm:market-engine@0.10.5",
      "market-pricing": "npm:market-pricing@1.1.0",
      "partial-index": "npm:partial-index@1.7.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:market-pricing@1.1.0": {
      "find-zero-range": "npm:find-zero-range@2.0.6"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:prob.js@1.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "random-js": "npm:random-js@1.0.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:single-market-robot-simulator-app-framework@0.1.8": {
      "clone": "npm:clone@2.1.0",
      "single-market-robot-simulator-savezip": "npm:single-market-robot-simulator-savezip@0.6.0"
    },
    "npm:single-market-robot-simulator-db-local@0.1.1": {
      "deep-equal": "npm:deep-equal@1.0.1"
    },
    "npm:single-market-robot-simulator-savezip@0.6.0": {
      "filesaver.js-npm": "npm:filesaver.js-npm@1.0.1",
      "jszip": "npm:jszip@3.1.3"
    },
    "npm:single-market-robot-simulator-viz-plotly@0.6.0": {
      "d3-array": "npm:d3-array@0.8.1",
      "stepify-plotly": "npm:stepify-plotly@1.0.6",
      "transpluck": "npm:transpluck@1.0.2"
    },
    "npm:single-market-robot-simulator@0.54.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "market-agents": "npm:market-agents@0.31.0",
      "market-example-contingent": "npm:market-example-contingent@0.17.0",
      "positive-number-array": "npm:positive-number-array@1.2.0"
    },
    "npm:stepify-plotly@1.0.6": {
      "clone": "npm:clone@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
