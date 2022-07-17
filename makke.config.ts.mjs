import { createRequire as makkeCreateRequire } from "module"

if (typeof require === "undefined") {
  var require = makkeCreateRequire(import.meta.url)
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// pnp:/Users/david/workspace/personal/kin-cli/.yarn/cache/tslib-npm-1.14.1-102499115e-dbe628ef87.zip/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "pnp:/Users/david/workspace/personal/kin-cli/.yarn/cache/tslib-npm-1.14.1-102499115e-dbe628ef87.zip/node_modules/tslib/tslib.js"(exports, module) {
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      __extends = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// pnp:/Users/david/workspace/personal/kin-cli/.yarn/__virtual__/@yarnpkg-esbuild-plugin-pnp-virtual-eaf3226486/0/cache/@yarnpkg-esbuild-plugin-pnp-npm-3.0.0-rc.12-1c5e245c9b-cc3a5349d6.zip/node_modules/@yarnpkg/esbuild-plugin-pnp/lib/index.js
var require_lib = __commonJS({
  "pnp:/Users/david/workspace/personal/kin-cli/.yarn/__virtual__/@yarnpkg-esbuild-plugin-pnp-virtual-eaf3226486/0/cache/@yarnpkg-esbuild-plugin-pnp-npm-3.0.0-rc.12-1c5e245c9b-cc3a5349d6.zip/node_modules/@yarnpkg/esbuild-plugin-pnp/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pnpPlugin = void 0;
    var tslib_1 = require_tslib();
    var fs = tslib_1.__importStar(__require("fs"));
    var path_1 = tslib_1.__importDefault(__require("path"));
    var matchAll = /()/;
    var defaultExtensions = [`.tsx`, `.ts`, `.jsx`, `.mjs`, `.cjs`, `.js`, `.css`, `.json`];
    function parseExternals(externals) {
      return externals.map((external) => {
        const wildcardIdx = external.indexOf(`*`);
        if (wildcardIdx !== -1)
          return { prefix: external.slice(0, wildcardIdx), suffix: external.slice(wildcardIdx + 1) };
        return external;
      });
    }
    function isExternal(path, externals) {
      for (const external of externals) {
        if (typeof external === `object`) {
          if (path.length >= external.prefix.length + external.suffix.length && path.startsWith(external.prefix) && path.endsWith(external.suffix)) {
            return true;
          }
        } else {
          if (path === external)
            return true;
          if (!external.startsWith(`/`) && !external.startsWith(`./`) && !external.startsWith(`../`) && external !== `.` && external !== `..`) {
            if (path.startsWith(`${external}/`)) {
              return true;
            }
          }
        }
      }
      return false;
    }
    async function defaultOnLoad(args) {
      return {
        contents: await fs.promises.readFile(args.path),
        loader: `default`,
        resolveDir: path_1.default.dirname(args.path)
      };
    }
    async function defaultOnResolve(args, { resolvedPath, error, watchFiles }) {
      const problems = error ? [{ text: error.message }] : [];
      let mergeWith;
      switch (args.kind) {
        case `require-call`:
        case `require-resolve`:
        case `dynamic-import`:
          {
            mergeWith = { warnings: problems };
          }
          break;
        default:
          {
            mergeWith = { errors: problems };
          }
          break;
      }
      if (resolvedPath !== null) {
        return { namespace: `pnp`, path: resolvedPath, watchFiles };
      } else {
        return { external: true, ...mergeWith, watchFiles };
      }
    }
    function pnpPlugin2({ baseDir = process.cwd(), extensions = defaultExtensions, filter = matchAll, onResolve = defaultOnResolve, onLoad = defaultOnLoad } = {}) {
      return {
        name: `@yarnpkg/esbuild-plugin-pnp`,
        setup(build) {
          var _a, _b;
          const { findPnpApi } = __require("module");
          if (typeof findPnpApi === `undefined`)
            return;
          const externals = parseExternals((_a = build.initialOptions.external) !== null && _a !== void 0 ? _a : []);
          const platform = (_b = build.initialOptions.platform) !== null && _b !== void 0 ? _b : `browser`;
          const isPlatformNode = platform === `node`;
          const conditionsDefault = new Set(build.initialOptions.conditions);
          conditionsDefault.add(`default`);
          if (platform === `browser` || platform === `node`)
            conditionsDefault.add(platform);
          const conditionsImport = new Set(conditionsDefault);
          conditionsImport.add(`import`);
          const conditionsRequire = new Set(conditionsDefault);
          conditionsRequire.add(`require`);
          build.onResolve({ filter }, (args) => {
            var _a2, _b2;
            if (isExternal(args.path, externals))
              return { external: true };
            let conditions = conditionsDefault;
            if (args.kind === `dynamic-import` || args.kind === `import-statement`)
              conditions = conditionsImport;
            else if (args.kind === `require-call` || args.kind === `require-resolve`)
              conditions = conditionsRequire;
            const effectiveImporter = args.resolveDir ? `${args.resolveDir}/` : args.importer ? args.importer : `${baseDir}/`;
            const pnpApi = findPnpApi(effectiveImporter);
            if (!pnpApi)
              return void 0;
            let path = null;
            let error;
            try {
              path = pnpApi.resolveRequest(args.path, effectiveImporter, {
                conditions,
                considerBuiltins: isPlatformNode,
                extensions
              });
            } catch (e) {
              error = e;
            }
            const watchFiles = [pnpApi.resolveRequest(`pnpapi`, null)];
            if (path) {
              const locator = pnpApi.findPackageLocator(path);
              if (locator) {
                const info = pnpApi.getPackageInformation(locator);
                if ((info === null || info === void 0 ? void 0 : info.linkType) === `SOFT`) {
                  watchFiles.push((_b2 = (_a2 = pnpApi.resolveVirtual) === null || _a2 === void 0 ? void 0 : _a2.call(pnpApi, path)) !== null && _b2 !== void 0 ? _b2 : path);
                }
              }
            }
            return onResolve(args, { resolvedPath: path, error, watchFiles });
          });
          if (build.onLoad !== null) {
            build.onLoad({ filter }, onLoad);
          }
        }
      };
    }
    exports.pnpPlugin = pnpPlugin2;
  }
});

// pnp:/Users/david/workspace/personal/kin-cli/makke.config.ts
var import_esbuild_plugin_pnp = __toESM(require_lib());
import { defineConfig } from "makke";
var makke_config_default = defineConfig({
  esbuild: {
    entryPoints: ["./src/index.ts"],
    outfile: "./dist/kin.js",
    plugins: [
      (0, import_esbuild_plugin_pnp.pnpPlugin)()
    ],
    tsconfig: "./tsconfig.json"
  }
});
export {
  makke_config_default as default
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicG5wOi9Vc2Vycy9kYXZpZC93b3Jrc3BhY2UvcGVyc29uYWwva2luLWNsaS8ueWFybi9jYWNoZS90c2xpYi1ucG0tMS4xNC4xLTEwMjQ5OTExNWUtZGJlNjI4ZWY4Ny56aXAvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmpzIiwgInBucDovVXNlcnMvZGF2aWQvd29ya3NwYWNlL3BlcnNvbmFsL2tpbi1jbGkvLnlhcm4vX192aXJ0dWFsX18vQHlhcm5wa2ctZXNidWlsZC1wbHVnaW4tcG5wLXZpcnR1YWwtZWFmMzIyNjQ4Ni8wL2NhY2hlL0B5YXJucGtnLWVzYnVpbGQtcGx1Z2luLXBucC1ucG0tMy4wLjAtcmMuMTItMWM1ZTI0NWM5Yi1jYzNhNTM0OWQ2LnppcC9ub2RlX21vZHVsZXMvQHlhcm5wa2cvZXNidWlsZC1wbHVnaW4tcG5wL2xpYi9pbmRleC5qcyIsICJwbnA6L1VzZXJzL2RhdmlkL3dvcmtzcGFjZS9wZXJzb25hbC9raW4tY2xpL21ha2tlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qIGdsb2JhbCBnbG9iYWwsIGRlZmluZSwgU3lzdGVtLCBSZWZsZWN0LCBQcm9taXNlICovXHJcbnZhciBfX2V4dGVuZHM7XHJcbnZhciBfX2Fzc2lnbjtcclxudmFyIF9fcmVzdDtcclxudmFyIF9fZGVjb3JhdGU7XHJcbnZhciBfX3BhcmFtO1xyXG52YXIgX19tZXRhZGF0YTtcclxudmFyIF9fYXdhaXRlcjtcclxudmFyIF9fZ2VuZXJhdG9yO1xyXG52YXIgX19leHBvcnRTdGFyO1xyXG52YXIgX192YWx1ZXM7XHJcbnZhciBfX3JlYWQ7XHJcbnZhciBfX3NwcmVhZDtcclxudmFyIF9fc3ByZWFkQXJyYXlzO1xyXG52YXIgX19hd2FpdDtcclxudmFyIF9fYXN5bmNHZW5lcmF0b3I7XHJcbnZhciBfX2FzeW5jRGVsZWdhdG9yO1xyXG52YXIgX19hc3luY1ZhbHVlcztcclxudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0O1xyXG52YXIgX19pbXBvcnRTdGFyO1xyXG52YXIgX19pbXBvcnREZWZhdWx0O1xyXG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldDtcclxudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQ7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmc7XHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG4gICAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdHlwZW9mIHRoaXMgPT09IFwib2JqZWN0XCIgPyB0aGlzIDoge307XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoXCJ0c2xpYlwiLCBbXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAoZXhwb3J0cykgeyBmYWN0b3J5KGNyZWF0ZUV4cG9ydGVyKHJvb3QsIGNyZWF0ZUV4cG9ydGVyKGV4cG9ydHMpKSk7IH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBmYWN0b3J5KGNyZWF0ZUV4cG9ydGVyKHJvb3QsIGNyZWF0ZUV4cG9ydGVyKG1vZHVsZS5leHBvcnRzKSkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFeHBvcnRlcihleHBvcnRzLCBwcmV2aW91cykge1xyXG4gICAgICAgIGlmIChleHBvcnRzICE9PSByb290KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoaWQsIHYpIHsgcmV0dXJuIGV4cG9ydHNbaWRdID0gcHJldmlvdXMgPyBwcmV2aW91cyhpZCwgdikgOiB2OyB9O1xyXG4gICAgfVxyXG59KVxyXG4oZnVuY3Rpb24gKGV4cG9ydGVyKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVzdCA9IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICAgICAgdmFyIHQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcblxyXG4gICAgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgICAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcGFyYW0gPSBmdW5jdGlvbiAocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fbWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2F3YWl0ZXIgPSBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX19nZW5lcmF0b3IgPSBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICAgICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2NyZWF0ZUJpbmRpbmcgPSBmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICAgICAgb1trMl0gPSBtW2tdO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2V4cG9ydFN0YXIgPSBmdW5jdGlvbiAobSwgZXhwb3J0cykge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxuICAgIH07XHJcblxyXG4gICAgX192YWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVhZCA9IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgX19zcHJlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fc3ByZWFkQXJyYXlzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcblxyXG4gICAgX19hd2FpdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgICAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jRGVsZWdhdG9yID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICB2YXIgaSwgcDtcclxuICAgICAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY1ZhbHVlcyA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX21ha2VUZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xyXG4gICAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICAgICAgcmV0dXJuIGNvb2tlZDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnRTdGFyID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICAgICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2ltcG9ydERlZmF1bHQgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbiAgICB9O1xyXG5cclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSBmdW5jdGlvbiAocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgICAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxuICAgIH07XHJcblxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9IGZ1bmN0aW9uIChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydGVyKFwiX19leHRlbmRzXCIsIF9fZXh0ZW5kcyk7XHJcbiAgICBleHBvcnRlcihcIl9fYXNzaWduXCIsIF9fYXNzaWduKTtcclxuICAgIGV4cG9ydGVyKFwiX19yZXN0XCIsIF9fcmVzdCk7XHJcbiAgICBleHBvcnRlcihcIl9fZGVjb3JhdGVcIiwgX19kZWNvcmF0ZSk7XHJcbiAgICBleHBvcnRlcihcIl9fcGFyYW1cIiwgX19wYXJhbSk7XHJcbiAgICBleHBvcnRlcihcIl9fbWV0YWRhdGFcIiwgX19tZXRhZGF0YSk7XHJcbiAgICBleHBvcnRlcihcIl9fYXdhaXRlclwiLCBfX2F3YWl0ZXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2dlbmVyYXRvclwiLCBfX2dlbmVyYXRvcik7XHJcbiAgICBleHBvcnRlcihcIl9fZXhwb3J0U3RhclwiLCBfX2V4cG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2NyZWF0ZUJpbmRpbmdcIiwgX19jcmVhdGVCaW5kaW5nKTtcclxuICAgIGV4cG9ydGVyKFwiX192YWx1ZXNcIiwgX192YWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3JlYWRcIiwgX19yZWFkKTtcclxuICAgIGV4cG9ydGVyKFwiX19zcHJlYWRcIiwgX19zcHJlYWQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3NwcmVhZEFycmF5c1wiLCBfX3NwcmVhZEFycmF5cyk7XHJcbiAgICBleHBvcnRlcihcIl9fYXdhaXRcIiwgX19hd2FpdCk7XHJcbiAgICBleHBvcnRlcihcIl9fYXN5bmNHZW5lcmF0b3JcIiwgX19hc3luY0dlbmVyYXRvcik7XHJcbiAgICBleHBvcnRlcihcIl9fYXN5bmNEZWxlZ2F0b3JcIiwgX19hc3luY0RlbGVnYXRvcik7XHJcbiAgICBleHBvcnRlcihcIl9fYXN5bmNWYWx1ZXNcIiwgX19hc3luY1ZhbHVlcyk7XHJcbiAgICBleHBvcnRlcihcIl9fbWFrZVRlbXBsYXRlT2JqZWN0XCIsIF9fbWFrZVRlbXBsYXRlT2JqZWN0KTtcclxuICAgIGV4cG9ydGVyKFwiX19pbXBvcnRTdGFyXCIsIF9faW1wb3J0U3Rhcik7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0RGVmYXVsdFwiLCBfX2ltcG9ydERlZmF1bHQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0XCIsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0XCIsIF9fY2xhc3NQcml2YXRlRmllbGRTZXQpO1xyXG59KTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wbnBQbHVnaW4gPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgZnMgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwiZnNcIikpO1xuY29uc3QgcGF0aF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xuY29uc3QgbWF0Y2hBbGwgPSAvKCkvO1xuY29uc3QgZGVmYXVsdEV4dGVuc2lvbnMgPSBbYC50c3hgLCBgLnRzYCwgYC5qc3hgLCBgLm1qc2AsIGAuY2pzYCwgYC5qc2AsIGAuY3NzYCwgYC5qc29uYF07XG4vLyBSZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9lc2J1aWxkL2Jsb2IvNTM3MTk1YWU4NGJlZTE1MTBmYWMxNDIzNTkwNmQ1ODgwODRjMzljZC9wa2cvYXBpL2FwaV9pbXBsLmdvI0wzNjYtTDM4OFxuZnVuY3Rpb24gcGFyc2VFeHRlcm5hbHMoZXh0ZXJuYWxzKSB7XG4gICAgcmV0dXJuIGV4dGVybmFscy5tYXAoZXh0ZXJuYWwgPT4ge1xuICAgICAgICAvLyBFU0J1aWxkJ3MgdmFsaWRhdGlvbiBwYXNzIHJ1bnMgYmVmb3JlIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBhc3NlcnQgdGhhdCB0aGVyZSdzIGEgc2luZ2xlIHdpbGRjYXJkXG4gICAgICAgIGNvbnN0IHdpbGRjYXJkSWR4ID0gZXh0ZXJuYWwuaW5kZXhPZihgKmApO1xuICAgICAgICBpZiAod2lsZGNhcmRJZHggIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHsgcHJlZml4OiBleHRlcm5hbC5zbGljZSgwLCB3aWxkY2FyZElkeCksIHN1ZmZpeDogZXh0ZXJuYWwuc2xpY2Uod2lsZGNhcmRJZHggKyAxKSB9O1xuICAgICAgICByZXR1cm4gZXh0ZXJuYWw7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0V4dGVybmFsKHBhdGgsIGV4dGVybmFscykge1xuICAgIGZvciAoY29uc3QgZXh0ZXJuYWwgb2YgZXh0ZXJuYWxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZXJuYWwgPT09IGBvYmplY3RgKSB7XG4gICAgICAgICAgICAvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9lc2J1aWxkL2Jsb2IvNTM3MTk1YWU4NGJlZTE1MTBmYWMxNDIzNTkwNmQ1ODgwODRjMzljZC9pbnRlcm5hbC9yZXNvbHZlci9yZXNvbHZlci5nbyNMMzcyLUwzODFcbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+PSBleHRlcm5hbC5wcmVmaXgubGVuZ3RoICsgZXh0ZXJuYWwuc3VmZml4Lmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIHBhdGguc3RhcnRzV2l0aChleHRlcm5hbC5wcmVmaXgpXG4gICAgICAgICAgICAgICAgJiYgcGF0aC5lbmRzV2l0aChleHRlcm5hbC5zdWZmaXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gZXh0ZXJuYWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbW9kdWxlIFwiZm9vXCIgaGFzIGJlZW4gbWFya2VkIGFzIGV4dGVybmFsLCB3ZSBhbHNvIHdhbnQgdG8gdHJlYXRcbiAgICAgICAgICAgIC8vIHBhdGhzIGludG8gdGhhdCBtb2R1bGUgc3VjaCBhcyBcImZvby9iYXJcIiBhcyBleHRlcm5hbCB0b28uXG4gICAgICAgICAgICAvLyBSZWZlcmVuY2VzOlxuICAgICAgICAgICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9ibG9iLzUzNzE5NWFlODRiZWUxNTEwZmFjMTQyMzU5MDZkNTg4MDg0YzM5Y2QvaW50ZXJuYWwvcmVzb2x2ZXIvcmVzb2x2ZXIuZ28jTDY1MS1MNjUyXG4gICAgICAgICAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9lc2J1aWxkL2Jsb2IvNTM3MTk1YWU4NGJlZTE1MTBmYWMxNDIzNTkwNmQ1ODgwODRjMzljZC9pbnRlcm5hbC9yZXNvbHZlci9yZXNvbHZlci5nbyNMMTY4OC1MMTY5MVxuICAgICAgICAgICAgaWYgKCFleHRlcm5hbC5zdGFydHNXaXRoKGAvYCkgJiYgIWV4dGVybmFsLnN0YXJ0c1dpdGgoYC4vYCkgJiYgIWV4dGVybmFsLnN0YXJ0c1dpdGgoYC4uL2ApICYmIGV4dGVybmFsICE9PSBgLmAgJiYgZXh0ZXJuYWwgIT09IGAuLmApIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKGAke2V4dGVybmFsfS9gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdE9uTG9hZChhcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudHM6IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGFyZ3MucGF0aCksXG4gICAgICAgIGxvYWRlcjogYGRlZmF1bHRgLFxuICAgICAgICAvLyBGb3IgcmVndWxhciBpbXBvcnRzIGluIHRoZSBgZmlsZWAgbmFtZXNwYWNlLCByZXNvbHZlRGlyIGlzIHRoZSBkaXJlY3RvcnkgdGhlXG4gICAgICAgIC8vIGZpbGUgYmVpbmcgcmVzb2x2ZWQgbGl2ZXMgaW4uIEZvciBhbGwgb3RoZXIgdmlydHVhbCBtb2R1bGVzLCB0aGlzIGRlZmF1bHRzIHRvXG4gICAgICAgIC8vIGVtcHR5IHN0cmluZzogXCJcIlxuICAgICAgICAvLyBBIHNlbnNpYmxlIHZhbHVlIGZvciBwbnAgaW1wb3J0cyBpcyB0aGUgc2FtZSBhcyB0aGUgYGZpbGVgIG5hbWVzcGFjZSwgYXMgcG5wXG4gICAgICAgIC8vIHN0aWxsIHJlc29sdmVzIHRvIGZpbGVzIG9uIGRpc2sgKGluIHRoZSBjYWNoZSkuXG4gICAgICAgIHJlc29sdmVEaXI6IHBhdGhfMS5kZWZhdWx0LmRpcm5hbWUoYXJncy5wYXRoKSxcbiAgICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdE9uUmVzb2x2ZShhcmdzLCB7IHJlc29sdmVkUGF0aCwgZXJyb3IsIHdhdGNoRmlsZXMgfSkge1xuICAgIGNvbnN0IHByb2JsZW1zID0gZXJyb3IgPyBbeyB0ZXh0OiBlcnJvci5tZXNzYWdlIH1dIDogW107XG4gICAgLy8gU29tZXRpbWVzIGR5bmFtaWMgcmVzb2x2ZSBjYWxscyBtaWdodCBiZSB3cmFwcGVkIGluIGEgdHJ5IC8gY2F0Y2gsXG4gICAgLy8gYnV0IEVTQnVpbGQgbmVpdGhlciBza2lwcyB0aGVtIG5vciBkb2VzIGl0IHByb3ZpZGUgYSB3YXkgZm9yIHVzIHRvIHRlbGwuXG4gICAgLy8gQmVjYXVzZSBvZiB0aGF0LCB3ZSBkb3duZ3JhZGUgYWxsIGVycm9ycyB0byB3YXJuaW5ncyBpbiB0aGVzZSBzaXR1YXRpb25zLlxuICAgIC8vIElzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9pc3N1ZXMvMTEyN1xuICAgIGxldCBtZXJnZVdpdGg7XG4gICAgc3dpdGNoIChhcmdzLmtpbmQpIHtcbiAgICAgICAgY2FzZSBgcmVxdWlyZS1jYWxsYDpcbiAgICAgICAgY2FzZSBgcmVxdWlyZS1yZXNvbHZlYDpcbiAgICAgICAgY2FzZSBgZHluYW1pYy1pbXBvcnRgOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lcmdlV2l0aCA9IHsgd2FybmluZ3M6IHByb2JsZW1zIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXJnZVdpdGggPSB7IGVycm9yczogcHJvYmxlbXMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVzb2x2ZWRQYXRoICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWVzcGFjZTogYHBucGAsIHBhdGg6IHJlc29sdmVkUGF0aCwgd2F0Y2hGaWxlcyB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgZXh0ZXJuYWw6IHRydWUsIC4uLm1lcmdlV2l0aCwgd2F0Y2hGaWxlcyB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBucFBsdWdpbih7IGJhc2VEaXIgPSBwcm9jZXNzLmN3ZCgpLCBleHRlbnNpb25zID0gZGVmYXVsdEV4dGVuc2lvbnMsIGZpbHRlciA9IG1hdGNoQWxsLCBvblJlc29sdmUgPSBkZWZhdWx0T25SZXNvbHZlLCBvbkxvYWQgPSBkZWZhdWx0T25Mb2FkLCB9ID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBgQHlhcm5wa2cvZXNidWlsZC1wbHVnaW4tcG5wYCxcbiAgICAgICAgc2V0dXAoYnVpbGQpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjb25zdCB7IGZpbmRQbnBBcGkgfSA9IHJlcXVpcmUoYG1vZHVsZWApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaW5kUG5wQXBpID09PSBgdW5kZWZpbmVkYClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBleHRlcm5hbHMgPSBwYXJzZUV4dGVybmFscygoX2EgPSBidWlsZC5pbml0aWFsT3B0aW9ucy5leHRlcm5hbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pO1xuICAgICAgICAgICAgY29uc3QgcGxhdGZvcm0gPSAoX2IgPSBidWlsZC5pbml0aWFsT3B0aW9ucy5wbGF0Zm9ybSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogYGJyb3dzZXJgO1xuICAgICAgICAgICAgY29uc3QgaXNQbGF0Zm9ybU5vZGUgPSBwbGF0Zm9ybSA9PT0gYG5vZGVgO1xuICAgICAgICAgICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9ibG9iLzUzNzE5NWFlODRiZWUxNTEwZmFjMTQyMzU5MDZkNTg4MDg0YzM5Y2QvaW50ZXJuYWwvcmVzb2x2ZXIvcmVzb2x2ZXIuZ28jTDIzOC1MMjUzXG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25zRGVmYXVsdCA9IG5ldyBTZXQoYnVpbGQuaW5pdGlhbE9wdGlvbnMuY29uZGl0aW9ucyk7XG4gICAgICAgICAgICBjb25kaXRpb25zRGVmYXVsdC5hZGQoYGRlZmF1bHRgKTtcbiAgICAgICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gYGJyb3dzZXJgIHx8IHBsYXRmb3JtID09PSBgbm9kZWApXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0RlZmF1bHQuYWRkKHBsYXRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbnNJbXBvcnQgPSBuZXcgU2V0KGNvbmRpdGlvbnNEZWZhdWx0KTtcbiAgICAgICAgICAgIGNvbmRpdGlvbnNJbXBvcnQuYWRkKGBpbXBvcnRgKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbnNSZXF1aXJlID0gbmV3IFNldChjb25kaXRpb25zRGVmYXVsdCk7XG4gICAgICAgICAgICBjb25kaXRpb25zUmVxdWlyZS5hZGQoYHJlcXVpcmVgKTtcbiAgICAgICAgICAgIGJ1aWxkLm9uUmVzb2x2ZSh7IGZpbHRlciB9LCBhcmdzID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGlmIChpc0V4dGVybmFsKGFyZ3MucGF0aCwgZXh0ZXJuYWxzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZXh0ZXJuYWw6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9lc2J1aWxkL2Jsb2IvNTM3MTk1YWU4NGJlZTE1MTBmYWMxNDIzNTkwNmQ1ODgwODRjMzljZC9pbnRlcm5hbC9yZXNvbHZlci9yZXNvbHZlci5nbyNMMTQ5NS1MMTUwMlxuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25zID0gY29uZGl0aW9uc0RlZmF1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3Mua2luZCA9PT0gYGR5bmFtaWMtaW1wb3J0YCB8fCBhcmdzLmtpbmQgPT09IGBpbXBvcnQtc3RhdGVtZW50YClcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucyA9IGNvbmRpdGlvbnNJbXBvcnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJncy5raW5kID09PSBgcmVxdWlyZS1jYWxsYCB8fCBhcmdzLmtpbmQgPT09IGByZXF1aXJlLXJlc29sdmVgKVxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zID0gY29uZGl0aW9uc1JlcXVpcmU7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVudHJ5IHBvaW50IHJlc29sdXRpb24gdXNlcyBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBlZmZlY3RpdmVJbXBvcnRlciA9IGFyZ3MucmVzb2x2ZURpclxuICAgICAgICAgICAgICAgICAgICA/IGAke2FyZ3MucmVzb2x2ZURpcn0vYFxuICAgICAgICAgICAgICAgICAgICA6IGFyZ3MuaW1wb3J0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYXJncy5pbXBvcnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtiYXNlRGlyfS9gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBucEFwaSA9IGZpbmRQbnBBcGkoZWZmZWN0aXZlSW1wb3J0ZXIpO1xuICAgICAgICAgICAgICAgIGlmICghcG5wQXBpKVxuICAgICAgICAgICAgICAgICAgICAvLyBQYXRoIGlzbid0IGNvbnRyb2xsZWQgYnkgUG5QIHNvIGRlbGVnYXRlIHRvIHRoZSBuZXh0IHJlc29sdmVyIGluIHRoZSBjaGFpblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHBucEFwaS5yZXNvbHZlUmVxdWVzdChhcmdzLnBhdGgsIGVmZmVjdGl2ZUltcG9ydGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc2lkZXJCdWlsdGluczogaXNQbGF0Zm9ybU5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB3YXRjaEZpbGVzID0gW3BucEFwaS5yZXNvbHZlUmVxdWVzdChgcG5wYXBpYCwgbnVsbCldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0b3IgPSBwbnBBcGkuZmluZFBhY2thZ2VMb2NhdG9yKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IHBucEFwaS5nZXRQYWNrYWdlSW5mb3JtYXRpb24obG9jYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGluZm8gPT09IG51bGwgfHwgaW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5mby5saW5rVHlwZSkgPT09IGBTT0ZUYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRmlsZXMucHVzaCgoX2IgPSAoX2EgPSBwbnBBcGkucmVzb2x2ZVZpcnR1YWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHBucEFwaSwgcGF0aCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvblJlc29sdmUoYXJncywgeyByZXNvbHZlZFBhdGg6IHBhdGgsIGVycm9yLCB3YXRjaEZpbGVzIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSByZWdpc3RlciBvbiB0aGUgYnVpbGQgdG8gcHJldmVudCBFU0J1aWxkIGZyb20gcmVhZGluZyB0aGUgZmlsZXNcbiAgICAgICAgICAgIC8vIGl0c2VsZiwgc2luY2UgaXQgd291bGRuJ3Qga25vdyBob3cgdG8gYWNjZXNzIHRoZSBmaWxlcyBmcm9tIHdpdGhpblxuICAgICAgICAgICAgLy8gdGhlIHppcCBhcmNoaXZlcy5cbiAgICAgICAgICAgIGlmIChidWlsZC5vbkxvYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBidWlsZC5vbkxvYWQoeyBmaWx0ZXIgfSwgb25Mb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5wbnBQbHVnaW4gPSBwbnBQbHVnaW47XG4iLCAiaW1wb3J0IHsgcG5wUGx1Z2luIH0gZnJvbSAnQHlhcm5wa2cvZXNidWlsZC1wbHVnaW4tcG5wJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAnbWFra2UnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGVzYnVpbGQ6IHtcbiAgICBlbnRyeVBvaW50czogWycuL3NyYy9pbmRleC50cyddLFxuICAgIG91dGZpbGU6ICcuL2Rpc3Qva2luLmpzJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBwbnBQbHVnaW4oKSxcbiAgICBdLFxuICAgIHRzY29uZmlnOiAnLi90c2NvbmZpZy5qc29uJyxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQWdCQSxRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLElBQUMsVUFBVSxTQUFTO0FBQ2hCLFVBQUksT0FBTyxPQUFPLFdBQVcsV0FBVyxTQUFTLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxTQUFTLFdBQVcsT0FBTyxDQUFDO0FBQ3RILFVBQUksT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBQzVDLGVBQU8sU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFVLFVBQVM7QUFBRSxrQkFBUSxlQUFlLE1BQU0sZUFBZSxRQUFPLENBQUMsQ0FBQztBQUFBLFFBQUcsQ0FBQztBQUFBLE1BQy9HLFdBQ1MsT0FBTyxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksVUFBVTtBQUN2RSxnQkFBUSxlQUFlLE1BQU0sZUFBZSxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQUEsTUFDaEUsT0FDSztBQUNELGdCQUFRLGVBQWUsSUFBSSxDQUFDO0FBQUEsTUFDaEM7QUFDQSw4QkFBd0IsVUFBUyxVQUFVO0FBQ3ZDLFlBQUksYUFBWSxNQUFNO0FBQ2xCLGNBQUksT0FBTyxPQUFPLFdBQVcsWUFBWTtBQUNyQyxtQkFBTyxlQUFl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
