System.config({
  baseURL: "/",
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
    "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clone": "npm:clone@1.0.2",
    "core-js": "npm:core-js@1.2.7",
    "cumulative-distribution-function": "npm:cumulative-distribution-function@1.0.2",
    "cwise": "npm:cwise@1.0.9",
    "glslify": "npm:glslify@5.1.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "json-editor": "npm:json-editor@0.7.28",
    "json-editor-positive-number-array-textarea": "npm:json-editor-positive-number-array-textarea@0.3.2",
    "market-pricing": "npm:market-pricing@1.1.0",
    "plotly.js": "npm:plotly.js@1.14.1",
    "positive-number-array": "npm:positive-number-array@1.1.0",
    "single-market-robot-simulator": "npm:single-market-robot-simulator@0.52.1",
    "single-market-robot-simulator-savezip": "npm:single-market-robot-simulator-savezip@0.6.0",
    "single-market-robot-simulator-viz-plotly": "npm:single-market-robot-simulator-viz-plotly@0.5.0",
    "stepify-plotly": "npm:stepify-plotly@1.0.6",
    "systemjs/plugin-json": "github:systemjs/plugin-json@0.1.2",
    "webdismay": "npm:webdismay@0.9.2",
    "whatwg-fetch": "npm:whatwg-fetch@1.1.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
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
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:3d-view-controls@2.1.1": {
      "3d-view": "npm:3d-view@2.0.0",
      "mouse-change": "npm:mouse-change@1.3.0",
      "mouse-wheel": "npm:mouse-wheel@1.2.0",
      "right-now": "npm:right-now@1.0.0"
    },
    "npm:3d-view@2.0.0": {
      "matrix-camera-controller": "npm:matrix-camera-controller@2.1.1",
      "orbit-camera-controller": "npm:orbit-camera-controller@4.0.0",
      "turntable-camera-controller": "npm:turntable-camera-controller@3.0.1"
    },
    "npm:JSONStream@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jsonparse": "npm:jsonparse@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:JSV@4.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:a-big-triangle@1.0.2": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-vao": "npm:gl-vao@1.2.1",
      "weak-map": "npm:weak-map@1.0.5"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:acorn@2.7.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:add-line-numbers@1.0.1": {
      "pad-left": "npm:pad-left@1.0.2"
    },
    "npm:affine-hull@1.0.0": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.0.3",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.4"
    },
    "npm:alpha-complex@1.0.0": {
      "circumradius": "npm:circumradius@1.0.0",
      "delaunay-triangulate": "npm:delaunay-triangulate@1.1.6"
    },
    "npm:alpha-shape@1.0.0": {
      "alpha-complex": "npm:alpha-complex@1.0.0",
      "simplicial-complex-boundary": "npm:simplicial-complex-boundary@1.0.1"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:array-union@1.0.2": {
      "array-uniq": "npm:array-uniq@1.0.3"
    },
    "npm:asn1.js@4.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:astw@2.0.0": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:atob-lite@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-code-frame@6.11.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@2.0.0"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.11.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.11.6": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:babel-traverse@6.12.0": {
      "babel-code-frame": "npm:babel-code-frame@6.11.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.11.1",
      "babylon": "npm:babylon@6.8.4",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.14.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.11.1": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.12.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.14.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.8.4": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:barycentric@1.0.1": {
      "robust-linear-solve": "npm:robust-linear-solve@1.0.0"
    },
    "npm:big-rat@1.0.2": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "bn.js": "npm:bn.js@2.2.0",
      "double-bits": "npm:double-bits@1.1.1"
    },
    "npm:bl@0.9.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:bl@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:bn.js@4.11.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:bops@0.0.6": {
      "base64-js": "npm:base64-js@0.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "to-utf8": "npm:to-utf8@0.0.1"
    },
    "npm:boundary-cells@2.0.1": {
      "tape": "npm:tape@4.6.0"
    },
    "npm:box-intersect@1.0.1": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:brace-expansion@1.1.5": {
      "balanced-match": "npm:balanced-match@0.4.1",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:brfs@1.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "quote-stream": "npm:quote-stream@1.0.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@2.0.1"
    },
    "npm:browser-pack@6.0.1": {
      "JSONStream": "npm:JSONStream@1.1.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combine-source-map": "npm:combine-source-map@0.7.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.1",
      "umd": "npm:umd@3.0.1"
    },
    "npm:browser-resolve@1.11.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify@13.0.1": {
      "JSONStream": "npm:JSONStream@1.1.3",
      "assert": "npm:assert@1.3.0",
      "browser-pack": "npm:browser-pack@6.0.1",
      "browser-resolve": "npm:browser-resolve@1.11.2",
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "buffer": "npm:buffer@4.7.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.5.1",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@1.0.0",
      "crypto-browserify": "npm:crypto-browserify@3.11.0",
      "defined": "npm:defined@1.0.0",
      "deps-sort": "npm:deps-sort@2.0.0",
      "domain-browser": "npm:domain-browser@1.1.7",
      "duplexer2": "npm:duplexer2@0.1.4",
      "events": "npm:events@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "has": "npm:has@1.0.1",
      "htmlescape": "npm:htmlescape@1.1.1",
      "https-browserify": "npm:https-browserify@0.0.0",
      "inherits": "npm:inherits@2.0.1",
      "insert-module-globals": "npm:insert-module-globals@7.0.1",
      "labeled-stream-splicer": "npm:labeled-stream-splicer@2.0.0",
      "module-deps": "npm:module-deps@4.0.7",
      "os-browserify": "npm:os-browserify@0.1.2",
      "parents": "npm:parents@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.9",
      "punycode": "npm:punycode@1.3.2",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "read-only-stream": "npm:read-only-stream@2.0.0",
      "readable-stream": "npm:readable-stream@2.0.6",
      "resolve": "npm:resolve@1.1.7",
      "shasum": "npm:shasum@1.0.2",
      "shell-quote": "npm:shell-quote@1.6.1",
      "stream-browserify": "npm:stream-browserify@2.0.1",
      "stream-http": "npm:stream-http@2.3.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "subarg": "npm:subarg@1.0.0",
      "syntax-error": "npm:syntax-error@1.1.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@2.0.1",
      "timers-browserify": "npm:timers-browserify@1.4.2",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.11.0",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:buffer-equal@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@4.7.0": {
      "base64-js": "npm:base64-js@1.1.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:builtin-status-codes@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:cdt2d@1.0.0": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "robust-in-sphere": "npm:robust-in-sphere@1.1.3",
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.4"
    },
    "npm:chalk@0.4.0": {
      "ansi-styles": "npm:ansi-styles@1.0.0",
      "has-color": "npm:has-color@0.1.7",
      "strip-ansi": "npm:strip-ansi@0.1.1"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:circumcenter@1.0.0": {
      "dup": "npm:dup@1.0.0",
      "robust-linear-solve": "npm:robust-linear-solve@1.0.0"
    },
    "npm:circumradius@1.0.0": {
      "circumcenter": "npm:circumcenter@1.0.0"
    },
    "npm:clean-pslg@1.1.0": {
      "big-rat": "npm:big-rat@1.0.2",
      "box-intersect": "npm:box-intersect@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0",
      "nextafter": "npm:nextafter@1.0.0",
      "rat-vec": "npm:rat-vec@1.1.0",
      "robust-segment-intersect": "npm:robust-segment-intersect@1.0.1",
      "union-find": "npm:union-find@1.0.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:colormap@2.2.0": {
      "arraytools": "npm:arraytools@1.1.2",
      "clone": "npm:clone@1.0.2"
    },
    "npm:colors@0.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:combine-source-map@0.7.2": {
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "inline-source-map": "npm:inline-source-map@0.6.2",
      "lodash.memoize": "npm:lodash.memoize@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.4",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:compare-angle@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "robust-product": "npm:robust-product@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "signum": "npm:signum@0.0.0",
      "two-sum": "npm:two-sum@1.0.0"
    },
    "npm:compare-oriented-cell@1.0.1": {
      "cell-orientation": "npm:cell-orientation@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0"
    },
    "npm:concat-stream@1.2.1": {
      "bops": "npm:bops@0.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:concat-stream@1.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:convex-hull@1.0.3": {
      "affine-hull": "npm:affine-hull@1.0.0",
      "incremental-convex-hull": "npm:incremental-convex-hull@1.0.1",
      "monotone-convex-hull-2d": "npm:monotone-convex-hull-2d@1.0.1"
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
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:cwise-compiler@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:cwise-parser@1.0.3": {
      "esprima": "npm:esprima@1.1.1",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:cwise@1.0.9": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2",
      "cwise-parser": "npm:cwise-parser@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "static-module": "npm:static-module@1.3.1",
      "uglify-js": "npm:uglify-js@2.7.0"
    },
    "npm:d3-geo-projection@0.2.16": {
      "brfs": "npm:brfs@1.4.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:dashdash@1.14.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:define-properties@1.1.2": {
      "foreach": "npm:foreach@2.0.5",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:delaunay-triangulate@1.1.6": {
      "incremental-convex-hull": "npm:incremental-convex-hull@1.0.1",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deps-sort@2.0.0": {
      "JSONStream": "npm:JSONStream@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shasum": "npm:shasum@1.0.2",
      "subarg": "npm:subarg@1.0.0",
      "through2": "npm:through2@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:double-bits@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:duplexer2@0.1.4": {
      "readable-stream": "npm:readable-stream@2.0.6"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:edges-to-adjacency-list@1.0.0": {
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:elliptic@6.3.1": {
      "bn.js": "npm:bn.js@4.11.4",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:envify@3.4.1": {
      "jstransform": "npm:jstransform@11.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:es-abstract@1.5.1": {
      "es-to-primitive": "npm:es-to-primitive@1.1.1",
      "function-bind": "npm:function-bind@1.1.0",
      "is-callable": "npm:is-callable@1.1.3",
      "is-regex": "npm:is-regex@1.0.3"
    },
    "npm:es-to-primitive@1.1.1": {
      "is-callable": "npm:is-callable@1.1.3",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-symbol": "npm:is-symbol@1.0.1"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:escallmatch@1.4.2": {
      "array-filter": "npm:array-filter@1.0.0",
      "array-foreach": "npm:array-foreach@1.0.2",
      "array-map": "npm:array-map@0.0.0",
      "array-reduce": "npm:array-reduce@0.0.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "esprima": "npm:esprima@2.7.2",
      "espurify": "npm:espurify@1.6.0",
      "estraverse": "npm:estraverse@4.2.0",
      "indexof": "npm:indexof@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:escodegen@0.0.28": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:escodegen@1.3.3": {
      "esprima": "npm:esprima@1.1.1",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:escodegen@1.8.0": {
      "esprima": "npm:esprima@2.7.2",
      "estraverse": "npm:estraverse@1.9.3",
      "esutils": "npm:esutils@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optionator": "npm:optionator@0.8.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esprima-fb@15001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:espurify@1.6.0": {
      "core-js": "npm:core-js@2.4.1"
    },
    "npm:estraverse@4.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:fast-isnumeric@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:feature-filter@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:filtered-vector@1.2.4": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "cubic-hermite": "npm:cubic-hermite@1.0.0"
    },
    "npm:findup@0.1.5": {
      "colors": "npm:colors@0.6.2",
      "commander": "npm:commander@2.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc4": {
      "async": "npm:async@1.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:geojson-area@0.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "wgs84": "npm:wgs84@0.0.0"
    },
    "npm:geojson-rewind@0.1.0": {
      "concat-stream": "npm:concat-stream@1.2.1",
      "geojson-area": "npm:geojson-area@0.1.0",
      "minimist": "npm:minimist@0.0.5"
    },
    "npm:geojson-vt@2.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:getpass@0.1.6": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:gl-axes3d@1.2.4": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "dup": "npm:dup@1.0.0",
      "extract-frustum-planes": "npm:extract-frustum-planes@1.0.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-state": "npm:gl-state@1.0.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "gl-vec4": "npm:gl-vec4@1.0.1",
      "glslify": "npm:glslify@2.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "split-polygon": "npm:split-polygon@1.0.0",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:gl-buffer@2.1.2": {
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-contour2d@1.1.2": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "cdt2d": "npm:cdt2d@1.0.0",
      "clean-pslg": "npm:clean-pslg@1.1.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@4.0.0",
      "iota-array": "npm:iota-array@1.0.0",
      "ndarray": "npm:ndarray@1.0.18",
      "surface-nets": "npm:surface-nets@1.0.2"
    },
    "npm:gl-error2d@1.1.2": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-error3d@1.0.4": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glslify": "npm:glslify@2.3.1"
    },
    "npm:gl-fbo@2.0.5": {
      "gl-texture2d": "npm:gl-texture2d@2.0.10"
    },
    "npm:gl-format-compiler-error@1.0.2": {
      "add-line-numbers": "npm:add-line-numbers@1.0.1",
      "gl-constants": "npm:gl-constants@1.0.0",
      "glsl-shader-name": "npm:glsl-shader-name@1.0.0",
      "sprintf-js": "npm:sprintf-js@1.0.3"
    },
    "npm:gl-heatmap2d@1.0.2": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@4.0.0",
      "iota-array": "npm:iota-array@1.0.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-line2d@1.3.0": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "glsl-inverse": "npm:glsl-inverse@1.0.0",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18",
      "snap-points-2d": "npm:snap-points-2d@1.0.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-line3d@1.1.0": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glsl-read-float": "npm:glsl-read-float@1.1.0",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18"
    },
    "npm:gl-matrix-invert@1.0.0": {
      "gl-mat2": "npm:gl-mat2@1.0.0",
      "gl-mat3": "npm:gl-mat3@1.0.0",
      "gl-mat4": "npm:gl-mat4@1.1.4"
    },
    "npm:gl-matrix@2.3.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:gl-mesh3d@1.2.0": {
      "barycentric": "npm:barycentric@1.0.1",
      "colormap": "npm:colormap@2.2.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glsl-specular-cook-torrance": "npm:glsl-specular-cook-torrance@2.0.1",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18",
      "normals": "npm:normals@1.1.0",
      "polytope-closest-point": "npm:polytope-closest-point@1.0.0",
      "simplicial-complex-contour": "npm:simplicial-complex-contour@1.0.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-plot2d@1.1.7": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-select-static": "npm:gl-select-static@2.0.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glsl-inverse": "npm:glsl-inverse@1.0.0",
      "glslify": "npm:glslify@2.3.1",
      "text-cache": "npm:text-cache@4.0.0"
    },
    "npm:gl-plot3d@1.5.0": {
      "3d-view-controls": "npm:3d-view-controls@2.1.1",
      "a-big-triangle": "npm:a-big-triangle@1.0.2",
      "gl-axes3d": "npm:gl-axes3d@1.2.4",
      "gl-fbo": "npm:gl-fbo@2.0.5",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-select-static": "npm:gl-select-static@2.0.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-spikes3d": "npm:gl-spikes3d@1.0.5",
      "glslify": "npm:glslify@2.3.1",
      "mouse-change": "npm:mouse-change@1.3.0",
      "ndarray": "npm:ndarray@1.0.18"
    },
    "npm:gl-quat@1.0.0": {
      "gl-mat3": "npm:gl-mat3@1.0.0",
      "gl-vec3": "npm:gl-vec3@1.0.3",
      "gl-vec4": "npm:gl-vec4@1.0.1"
    },
    "npm:gl-scatter2d-fancy@1.1.2": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1",
      "text-cache": "npm:text-cache@4.0.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:gl-scatter2d@1.0.6": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1",
      "snap-points-2d": "npm:snap-points-2d@3.1.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-scatter3d@1.0.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glslify": "npm:glslify@2.3.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:gl-select-box@1.0.1": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1"
    },
    "npm:gl-select-static@2.0.2": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "cwise": "npm:cwise@1.0.9",
      "gl-fbo": "npm:gl-fbo@2.0.5",
      "ndarray": "npm:ndarray@1.0.18",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-shader@4.2.0": {
      "gl-format-compiler-error": "npm:gl-format-compiler-error@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "weakmap-shim": "npm:weakmap-shim@1.1.0"
    },
    "npm:gl-spikes3d@1.0.5": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glslify": "npm:glslify@2.3.1"
    },
    "npm:gl-state@1.0.0": {
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:gl-surface3d@1.2.3": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "colormap": "npm:colormap@2.2.0",
      "dup": "npm:dup@1.0.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glsl-specular-beckmann": "npm:glsl-specular-beckmann@1.1.2",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-gradient": "npm:ndarray-gradient@1.0.0",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "ndarray-pack": "npm:ndarray-pack@1.2.0",
      "ndarray-scratch": "npm:ndarray-scratch@1.2.0",
      "surface-nets": "npm:surface-nets@1.0.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-texture2d@2.0.10": {
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.5",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.2",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@7.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.5",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.2",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:glsl-inject-defines@1.0.3": {
      "glsl-token-inject-block": "npm:glsl-token-inject-block@1.1.0",
      "glsl-token-string": "npm:glsl-token-string@1.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2"
    },
    "npm:glsl-resolve@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@0.6.3",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:glsl-shader-name@1.0.0": {
      "atob-lite": "npm:atob-lite@1.0.0",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2"
    },
    "npm:glsl-specular-cook-torrance@2.0.1": {
      "glsl-specular-beckmann": "npm:glsl-specular-beckmann@1.1.2"
    },
    "npm:glsl-token-defines@1.0.0": {
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2"
    },
    "npm:glsl-token-descope@1.0.2": {
      "glsl-token-assignments": "npm:glsl-token-assignments@2.0.1",
      "glsl-token-depth": "npm:glsl-token-depth@1.1.2",
      "glsl-token-properties": "npm:glsl-token-properties@1.0.1",
      "glsl-token-scope": "npm:glsl-token-scope@1.1.2"
    },
    "npm:glsl-tokenizer@2.1.2": {
      "through2": "npm:through2@0.6.5"
    },
    "npm:glslify-bundle@2.0.4": {
      "glsl-inject-defines": "npm:glsl-inject-defines@1.0.3",
      "glsl-token-defines": "npm:glsl-token-defines@1.0.0",
      "glsl-token-depth": "npm:glsl-token-depth@1.1.2",
      "glsl-token-descope": "npm:glsl-token-descope@1.0.2",
      "glsl-token-scope": "npm:glsl-token-scope@1.1.2",
      "glsl-token-string": "npm:glsl-token-string@1.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2"
    },
    "npm:glslify-bundle@4.0.1": {
      "glsl-inject-defines": "npm:glsl-inject-defines@1.0.3",
      "glsl-token-defines": "npm:glsl-token-defines@1.0.0",
      "glsl-token-depth": "npm:glsl-token-depth@1.1.2",
      "glsl-token-descope": "npm:glsl-token-descope@1.0.2",
      "glsl-token-scope": "npm:glsl-token-scope@1.1.2",
      "glsl-token-string": "npm:glsl-token-string@1.0.1",
      "glsl-token-whitespace-trim": "npm:glsl-token-whitespace-trim@1.0.0",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
      "murmurhash-js": "npm:murmurhash-js@1.0.0",
      "shallow-copy": "npm:shallow-copy@0.0.1"
    },
    "npm:glslify-bundle@5.0.0": {
      "glsl-inject-defines": "npm:glsl-inject-defines@1.0.3",
      "glsl-token-defines": "npm:glsl-token-defines@1.0.0",
      "glsl-token-depth": "npm:glsl-token-depth@1.1.2",
      "glsl-token-descope": "npm:glsl-token-descope@1.0.2",
      "glsl-token-scope": "npm:glsl-token-scope@1.1.2",
      "glsl-token-string": "npm:glsl-token-string@1.0.1",
      "glsl-token-whitespace-trim": "npm:glsl-token-whitespace-trim@1.0.0",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
      "murmurhash-js": "npm:murmurhash-js@1.0.0",
      "shallow-copy": "npm:shallow-copy@0.0.1"
    },
    "npm:glslify-deps@1.2.5": {
      "events": "npm:events@1.0.2",
      "findup": "npm:findup@0.1.5",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.4",
      "inherits": "npm:inherits@2.0.1",
      "map-limit": "npm:map-limit@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7"
    },
    "npm:glslify@2.3.1": {
      "bl": "npm:bl@0.9.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glslify-bundle": "npm:glslify-bundle@2.0.4",
      "glslify-deps": "npm:glslify-deps@1.2.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@0.6.5",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:glslify@4.0.0": {
      "bl": "npm:bl@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glslify-bundle": "npm:glslify-bundle@4.0.1",
      "glslify-deps": "npm:glslify-deps@1.2.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@0.6.5",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:glslify@5.1.0": {
      "bl": "npm:bl@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glslify-bundle": "npm:glslify-bundle@5.0.0",
      "glslify-deps": "npm:glslify-deps@1.2.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@0.6.5",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:graceful-fs@4.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.3",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-color@0.1.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.3.0",
      "sshpk": "npm:sshpk@1.8.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.2.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:immediate@3.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:incremental-convex-hull@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "simplicial-complex": "npm:simplicial-complex@1.0.0"
    },
    "npm:inflight@1.0.5": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-source-map@0.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:insert-module-globals@7.0.1": {
      "JSONStream": "npm:JSONStream@1.1.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combine-source-map": "npm:combine-source-map@0.7.2",
      "concat-stream": "npm:concat-stream@1.5.1",
      "is-buffer": "npm:is-buffer@1.1.3",
      "lexical-scope": "npm:lexical-scope@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "npm:process@0.11.9",
      "through2": "npm:through2@2.0.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:interval-tree-1d@1.0.3": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-buffer@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-my-json-valid@2.13.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:json-editor-positive-number-array-textarea@0.3.2": {
      "positive-number-array": "npm:positive-number-array@1.1.0"
    },
    "npm:json-stable-stringify@0.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:jsonlint-lines-primitives@1.6.0": {
      "JSV": "npm:JSV@4.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nomnom": "npm:nomnom@1.8.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jsonparse@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsprim@1.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:jstransform@11.0.3": {
      "base62": "npm:base62@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
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
    "npm:kdbush@1.0.0": {
      "tape": "npm:tape@4.6.0"
    },
    "npm:kind-of@3.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.3"
    },
    "npm:labeled-stream-splicer@2.0.0": {
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "stream-splicer": "npm:stream-splicer@2.0.0"
    },
    "npm:lazy-cache@1.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:levn@0.3.0": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:lexical-scope@1.2.0": {
      "astw": "npm:astw@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lie@3.1.0": {
      "immediate": "npm:immediate@3.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseisequal@3.0.7": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.6",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._baseiteratee@4.7.0": {
      "lodash._stringtopath": "npm:lodash._stringtopath@4.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basetostring@4.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._createwrapper@4.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._stringtopath@4.8.0": {
      "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.assign@4.0.9": {
      "lodash.keys": "npm:lodash.keys@4.0.7",
      "lodash.rest": "npm:lodash.rest@4.0.3"
    },
    "npm:lodash.assigninwith@4.0.7": {
      "lodash.keysin": "npm:lodash.keysin@4.1.4",
      "lodash.rest": "npm:lodash.rest@4.0.3"
    },
    "npm:lodash.bind@4.1.4": {
      "lodash._createwrapper": "npm:lodash._createwrapper@4.0.5",
      "lodash.rest": "npm:lodash.rest@4.0.3"
    },
    "npm:lodash.defaults@4.0.1": {
      "lodash.assigninwith": "npm:lodash.assigninwith@4.0.7",
      "lodash.rest": "npm:lodash.rest@4.0.3"
    },
    "npm:lodash.foreach@4.3.0": {
      "lodash._baseeach": "npm:lodash._baseeach@4.1.3",
      "lodash._baseiteratee": "npm:lodash._baseiteratee@4.7.0"
    },
    "npm:lodash.isequal@3.0.4": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.rest@4.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:map-limit@0.0.1": {
      "once": "npm:once@1.3.3"
    },
    "npm:mapbox-gl-style-spec@8.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "csscolorparser": "npm:csscolorparser@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsonlint-lines-primitives": "npm:jsonlint-lines-primitives@1.6.0",
      "lodash.isequal": "npm:lodash.isequal@3.0.4",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rw": "npm:rw@0.1.4",
      "sort-object": "npm:sort-object@0.3.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:mapbox-gl@0.18.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "brfs": "npm:brfs@1.4.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "csscolorparser": "npm:csscolorparser@1.0.2",
      "envify": "npm:envify@3.4.1",
      "feature-filter": "npm:feature-filter@2.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "geojson-rewind": "npm:geojson-rewind@0.1.0",
      "geojson-vt": "npm:geojson-vt@2.2.0",
      "gl-matrix": "npm:gl-matrix@2.3.2",
      "grid-index": "npm:grid-index@0.1.0",
      "mapbox-gl-function": "npm:mapbox-gl-function@1.2.1",
      "mapbox-gl-js-supported": "npm:mapbox-gl-js-supported@1.1.0",
      "mapbox-gl-style-spec": "npm:mapbox-gl-style-spec@8.8.0",
      "minifyify": "npm:minifyify@7.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pbf": "npm:pbf@1.3.7",
      "pngjs": "npm:pngjs@2.3.1",
      "point-geometry": "npm:point-geometry@0.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.72.0",
      "resolve-url": "npm:resolve-url@0.2.1",
      "shelf-pack": "npm:shelf-pack@1.0.0",
      "supercluster": "npm:supercluster@2.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "unassertify": "npm:unassertify@2.0.3",
      "unitbezier": "npm:unitbezier@0.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vector-tile": "npm:vector-tile@1.2.1",
      "vt-pbf": "npm:vt-pbf@2.0.2",
      "webworkify": "npm:webworkify@1.3.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:marching-simplex-table@1.0.0": {
      "convex-hull": "npm:convex-hull@1.0.3"
    },
    "npm:market-agents@0.30.1": {
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
    "npm:mat4-decompose@1.0.4": {
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3"
    },
    "npm:mat4-interpolate@1.0.4": {
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3",
      "mat4-decompose": "npm:mat4-decompose@1.0.4",
      "mat4-recompose": "npm:mat4-recompose@1.0.4",
      "quat-slerp": "npm:quat-slerp@1.0.1"
    },
    "npm:mat4-recompose@1.0.4": {
      "gl-mat4": "npm:gl-mat4@1.1.4"
    },
    "npm:matrix-camera-controller@2.1.1": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3",
      "mat4-interpolate": "npm:mat4-interpolate@1.0.4"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.23.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.11": {
      "mime-db": "npm:mime-db@1.23.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minifyify@7.3.3": {
      "browserify": "npm:browserify@13.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "concat-stream": "npm:concat-stream@1.4.10",
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.assign": "npm:lodash.assign@4.0.9",
      "lodash.bind": "npm:lodash.bind@4.1.4",
      "lodash.defaults": "npm:lodash.defaults@4.0.1",
      "lodash.foreach": "npm:lodash.foreach@4.3.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through": "npm:through@2.3.8",
      "tmp": "npm:tmp@0.0.28",
      "transform-filter": "npm:transform-filter@0.1.1",
      "uglify-js": "npm:uglify-js@2.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:minimatch@3.0.2": {
      "brace-expansion": "npm:brace-expansion@1.1.5",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:module-deps@4.0.7": {
      "JSONStream": "npm:JSONStream@1.1.3",
      "browser-resolve": "npm:browser-resolve@1.11.2",
      "concat-stream": "npm:concat-stream@1.5.1",
      "defined": "npm:defined@1.0.0",
      "detective": "npm:detective@4.3.1",
      "duplexer2": "npm:duplexer2@0.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "parents": "npm:parents@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "resolve": "npm:resolve@1.1.7",
      "stream-combiner2": "npm:stream-combiner2@1.1.1",
      "subarg": "npm:subarg@1.0.0",
      "through2": "npm:through2@2.0.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:monotone-convex-hull-2d@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:mouse-change@1.3.0": {
      "mouse-event": "npm:mouse-event@1.0.5"
    },
    "npm:mouse-wheel@1.2.0": {
      "right-now": "npm:right-now@1.0.0",
      "signum": "npm:signum@1.0.0",
      "to-px": "npm:to-px@1.0.1"
    },
    "npm:multi-stage-sourcemap@0.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:multimatch@2.1.0": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-union": "npm:array-union@1.0.2",
      "arrify": "npm:arrify@1.0.1",
      "minimatch": "npm:minimatch@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ndarray-extract-contour@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:ndarray-fill@1.0.1": {
      "cwise": "npm:cwise@1.0.9"
    },
    "npm:ndarray-gradient@1.0.0": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2",
      "dup": "npm:dup@1.0.0"
    },
    "npm:ndarray-homography@1.0.0": {
      "gl-matrix-invert": "npm:gl-matrix-invert@1.0.0",
      "ndarray-warp": "npm:ndarray-warp@1.0.1"
    },
    "npm:ndarray-ops@1.2.2": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2"
    },
    "npm:ndarray-pack@1.2.0": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2",
      "ndarray": "npm:ndarray@1.0.18"
    },
    "npm:ndarray-scratch@1.2.0": {
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:ndarray-sort@1.0.1": {
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:ndarray-warp@1.0.1": {
      "cwise": "npm:cwise@1.0.9",
      "ndarray-linear-interpolate": "npm:ndarray-linear-interpolate@1.0.0"
    },
    "npm:ndarray@1.0.18": {
      "iota-array": "npm:iota-array@1.0.0",
      "is-buffer": "npm:is-buffer@1.1.3"
    },
    "npm:nextafter@1.0.0": {
      "double-bits": "npm:double-bits@1.1.1"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nomnom@1.8.1": {
      "chalk": "npm:chalk@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.6.0"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:optionator@0.8.1": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.1.3",
      "levn": "npm:levn@0.3.0",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@1.0.0"
    },
    "npm:orbit-camera-controller@4.0.0": {
      "filtered-vector": "npm:filtered-vector@1.2.4",
      "gl-mat4": "npm:gl-mat4@1.1.4"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pad-left@1.0.2": {
      "repeat-string": "npm:repeat-string@1.5.4"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parents@1.0.1": {
      "path-platform": "npm:path-platform@0.11.15",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.6.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-platform@0.11.15": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:pbf@1.3.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "resolve-protobuf-schema": "npm:resolve-protobuf-schema@2.0.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:permutation-parity@1.0.0": {
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:permutation-rank@1.0.0": {
      "invert-permutation": "npm:invert-permutation@1.0.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:planar-dual@1.0.2": {
      "compare-angle": "npm:compare-angle@1.0.1",
      "dup": "npm:dup@1.0.0"
    },
    "npm:planar-graph-to-polyline@1.0.5": {
      "edges-to-adjacency-list": "npm:edges-to-adjacency-list@1.0.0",
      "planar-dual": "npm:planar-dual@1.0.2",
      "point-in-big-polygon": "npm:point-in-big-polygon@2.0.0",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "robust-sum": "npm:robust-sum@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "two-product": "npm:two-product@1.0.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:plotly.js@1.14.1": {
      "3d-view": "npm:3d-view@2.0.0",
      "alpha-shape": "npm:alpha-shape@1.0.0",
      "arraytools": "npm:arraytools@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "convex-hull": "npm:convex-hull@1.0.3",
      "country-regex": "npm:country-regex@1.0.0",
      "d3": "npm:d3@3.5.17",
      "delaunay-triangulate": "npm:delaunay-triangulate@1.1.6",
      "es6-promise": "npm:es6-promise@3.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fast-isnumeric": "npm:fast-isnumeric@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gl-contour2d": "npm:gl-contour2d@1.1.2",
      "gl-error2d": "npm:gl-error2d@1.1.2",
      "gl-error3d": "npm:gl-error3d@1.0.4",
      "gl-heatmap2d": "npm:gl-heatmap2d@1.0.2",
      "gl-line2d": "npm:gl-line2d@1.3.0",
      "gl-line3d": "npm:gl-line3d@1.1.0",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-mesh3d": "npm:gl-mesh3d@1.2.0",
      "gl-plot2d": "npm:gl-plot2d@1.1.7",
      "gl-plot3d": "npm:gl-plot3d@1.5.0",
      "gl-scatter2d": "npm:gl-scatter2d@1.0.6",
      "gl-scatter2d-fancy": "npm:gl-scatter2d-fancy@1.1.2",
      "gl-scatter3d": "npm:gl-scatter3d@1.0.10",
      "gl-select-box": "npm:gl-select-box@1.0.1",
      "gl-spikes2d": "npm:gl-spikes2d@1.0.1",
      "gl-surface3d": "npm:gl-surface3d@1.2.3",
      "mapbox-gl": "npm:mapbox-gl@0.18.0",
      "mouse-change": "npm:mouse-change@1.3.0",
      "mouse-wheel": "npm:mouse-wheel@1.2.0",
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-fill": "npm:ndarray-fill@1.0.1",
      "ndarray-homography": "npm:ndarray-homography@1.0.0",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "right-now": "npm:right-now@1.0.0",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "sane-topojson": "npm:sane-topojson@1.2.3",
      "superscript-text": "npm:superscript-text@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tinycolor2": "npm:tinycolor2@1.3.0",
      "topojson": "npm:topojson@1.6.26"
    },
    "npm:pngjs@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:point-in-big-polygon@2.0.0": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "interval-tree-1d": "npm:interval-tree-1d@1.0.3",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "slab-decomposition": "npm:slab-decomposition@1.0.2"
    },
    "npm:polytope-closest-point@1.0.0": {
      "numeric": "npm:numeric@1.2.6"
    },
    "npm:prob.js@1.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "random-js": "npm:random-js@1.0.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:protocol-buffers-schema@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:quat-slerp@1.0.1": {
      "gl-quat": "npm:gl-quat@1.0.0"
    },
    "npm:quote-stream@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.4.2"
    },
    "npm:quote-stream@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-equal": "npm:buffer-equal@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.1"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rat-vec@1.1.0": {
      "big-rat": "npm:big-rat@1.0.2"
    },
    "npm:read-only-stream@2.0.0": {
      "readable-stream": "npm:readable-stream@2.1.4"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
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
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recast@0.10.43": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.15",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:reduce-simplicial-complex@1.0.0": {
      "cell-orientation": "npm:cell-orientation@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0",
      "compare-oriented-cell": "npm:compare-oriented-cell@1.0.1"
    },
    "npm:regenerator-runtime@0.9.5": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:request@2.72.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.4.1",
      "bl": "npm:bl@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.11",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.2",
      "tunnel-agent": "npm:tunnel-agent@0.4.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:resolve-protobuf-schema@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "protocol-buffers-schema": "npm:protocol-buffers-schema@2.2.0"
    },
    "npm:resolve@0.6.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:resolve@1.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:resumer@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:right-now@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:robust-determinant@1.1.0": {
      "robust-compress": "npm:robust-compress@1.0.0",
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-dot-product@1.0.0": {
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-in-sphere@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-linear-solve@1.0.0": {
      "robust-determinant": "npm:robust-determinant@1.1.0"
    },
    "npm:robust-orientation@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-product@1.0.0": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-sum": "npm:robust-sum@1.0.0"
    },
    "npm:robust-scale@1.0.2": {
      "two-product": "npm:two-product@1.0.2",
      "two-sum": "npm:two-sum@1.0.0"
    },
    "npm:robust-segment-intersect@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:rw@0.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rw@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sane-topojson@1.2.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shapefile@0.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "d3-queue": "npm:d3-queue@1.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "iconv-lite": "npm:iconv-lite@0.2.11",
      "optimist": "npm:optimist@0.3.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:shasum@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "json-stable-stringify": "npm:json-stable-stringify@0.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:shell-quote@1.6.1": {
      "array-filter": "npm:array-filter@0.0.1",
      "array-map": "npm:array-map@0.0.0",
      "array-reduce": "npm:array-reduce@0.0.0",
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:simplicial-complex-boundary@1.0.1": {
      "boundary-cells": "npm:boundary-cells@2.0.1",
      "reduce-simplicial-complex": "npm:reduce-simplicial-complex@1.0.0"
    },
    "npm:simplicial-complex-contour@1.0.2": {
      "marching-simplex-table": "npm:marching-simplex-table@1.0.0",
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-sort": "npm:ndarray-sort@1.0.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:simplicial-complex@0.3.3": {
      "bit-twiddle": "npm:bit-twiddle@0.0.2",
      "union-find": "npm:union-find@0.0.4"
    },
    "npm:simplicial-complex@1.0.0": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "union-find": "npm:union-find@1.0.2"
    },
    "npm:simplify-planar-graph@2.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "simplicial-complex": "npm:simplicial-complex@0.3.3"
    },
    "npm:single-market-robot-simulator-savezip@0.6.0": {
      "filesaver.js-npm": "npm:filesaver.js-npm@1.0.1",
      "jszip": "npm:jszip@3.1.3"
    },
    "npm:single-market-robot-simulator-viz-plotly@0.5.0": {
      "d3-array": "npm:d3-array@0.8.1",
      "stepify-plotly": "npm:stepify-plotly@1.0.6",
      "transpluck": "npm:transpluck@1.0.2"
    },
    "npm:single-market-robot-simulator@0.52.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "market-agents": "npm:market-agents@0.30.1",
      "market-example-contingent": "npm:market-example-contingent@0.17.0"
    },
    "npm:slab-decomposition@1.0.2": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "functional-red-black-tree": "npm:functional-red-black-tree@1.0.1",
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:snap-points-2d@1.0.1": {
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:snap-points-2d@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sort-asc@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:sort-desc@0.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:sort-object@0.3.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "sort-asc": "npm:sort-asc@0.1.0",
      "sort-desc": "npm:sort-desc@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:split-polygon@1.0.0": {
      "robust-dot-product": "npm:robust-dot-product@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0"
    },
    "npm:sshpk@1.8.3": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.0",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.6",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.13.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:static-eval@0.2.4": {
      "escodegen": "npm:escodegen@0.0.28"
    },
    "npm:static-module@1.3.1": {
      "concat-stream": "npm:concat-stream@1.4.10",
      "duplexer2": "npm:duplexer2@0.0.2",
      "escodegen": "npm:escodegen@1.3.3",
      "falafel": "npm:falafel@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has": "npm:has@1.0.1",
      "object-inspect": "npm:object-inspect@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "quote-stream": "npm:quote-stream@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.34",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "static-eval": "npm:static-eval@0.2.4",
      "through2": "npm:through2@0.4.2"
    },
    "npm:stepify-plotly@1.0.6": {
      "clone": "npm:clone@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-browserify@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.6"
    },
    "npm:stream-combiner2@1.1.1": {
      "duplexer2": "npm:duplexer2@0.1.4",
      "readable-stream": "npm:readable-stream@2.1.4"
    },
    "npm:stream-http@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:stream-splicer@2.0.0": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4"
    },
    "npm:string.prototype.trim@1.1.2": {
      "define-properties": "npm:define-properties@1.1.2",
      "es-abstract": "npm:es-abstract@1.5.1",
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:subarg@1.0.0": {
      "minimist": "npm:minimist@1.2.0"
    },
    "npm:supercluster@2.1.0": {
      "kdbush": "npm:kdbush@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:surface-nets@1.0.2": {
      "ndarray-extract-contour": "npm:ndarray-extract-contour@1.0.1",
      "triangulate-hypercube": "npm:triangulate-hypercube@1.0.1",
      "zero-crossings": "npm:zero-crossings@1.0.1"
    },
    "npm:syntax-error@1.1.6": {
      "acorn": "npm:acorn@2.7.0"
    },
    "npm:tape@4.6.0": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "defined": "npm:defined@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "function-bind": "npm:function-bind@1.1.0",
      "glob": "npm:glob@7.0.5",
      "has": "npm:has@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimist": "npm:minimist@1.2.0",
      "object-inspect": "npm:object-inspect@1.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "resumer": "npm:resumer@0.0.0",
      "string.prototype.trim": "npm:string.prototype.trim@1.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:text-cache@4.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:tinycolor2@1.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tmp@0.0.28": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:to-arraybuffer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:to-px@1.0.1": {
      "parse-unit": "npm:parse-unit@1.0.1"
    },
    "npm:to-utf8@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:topojson@1.6.26": {
      "d3": "npm:d3@3.5.17",
      "d3-geo-projection": "npm:d3-geo-projection@0.2.16",
      "d3-queue": "npm:d3-queue@2.0.3",
      "optimist": "npm:optimist@0.3.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rw": "npm:rw@1.3.2",
      "shapefile": "npm:shapefile@0.3.1"
    },
    "npm:tough-cookie@2.2.2": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:transform-filter@0.1.1": {
      "multimatch": "npm:multimatch@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through": "npm:through@2.3.8"
    },
    "npm:triangulate-hypercube@1.0.1": {
      "gamma": "npm:gamma@0.1.0",
      "permutation-parity": "npm:permutation-parity@1.0.0",
      "permutation-rank": "npm:permutation-rank@1.0.0"
    },
    "npm:triangulate-polyline@1.0.3": {
      "cdt2d": "npm:cdt2d@1.0.0"
    },
    "npm:tunnel-agent@0.4.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:turntable-camera-controller@3.0.1": {
      "filtered-vector": "npm:filtered-vector@1.2.4",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:typedarray-pool@1.1.0": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dup": "npm:dup@1.0.0"
    },
    "npm:uglify-js@2.7.0": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:umd@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:unassert@1.4.0": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "escallmatch": "npm:escallmatch@1.4.2",
      "esprima": "npm:esprima@2.7.2",
      "espurify": "npm:espurify@1.6.0",
      "estraverse": "npm:estraverse@4.2.0"
    },
    "npm:unassertify@2.0.3": {
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "escodegen": "npm:escodegen@1.8.0",
      "esprima": "npm:esprima@2.7.2",
      "multi-stage-sourcemap": "npm:multi-stage-sourcemap@0.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through": "npm:through@2.3.8",
      "unassert": "npm:unassert@1.4.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vector-tile@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "point-geometry": "npm:point-geometry@0.0.0"
    },
    "npm:vectorize-text@3.0.2": {
      "cdt2d": "npm:cdt2d@1.0.0",
      "clean-pslg": "npm:clean-pslg@1.1.0",
      "ndarray": "npm:ndarray@1.0.18",
      "planar-graph-to-polyline": "npm:planar-graph-to-polyline@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "simplify-planar-graph": "npm:simplify-planar-graph@2.0.1",
      "surface-nets": "npm:surface-nets@1.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "triangulate-polyline": "npm:triangulate-polyline@1.0.3"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:vt-pbf@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pbf": "npm:pbf@1.3.7",
      "point-geometry": "npm:point-geometry@0.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vector-tile": "npm:vector-tile@1.2.1"
    },
    "npm:webdismay@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    },
    "npm:zero-crossings@1.0.1": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2"
    }
  }
});
