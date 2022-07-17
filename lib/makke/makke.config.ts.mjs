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

// pnp:/Users/david/workspace/personal/kin-cli/lib/makke/makke.config.ts
var import_esbuild_plugin_pnp = __toESM(require_lib());
import { readFileSync } from "fs";
import { defineConfig } from "makke";
var { dependencies = {} } = JSON.parse(readFileSync("./package.json").toString());
var makke_config_default = defineConfig({
  esbuild: {
    entryPoints: ["./example.ts"],
    external: Object.keys(dependencies),
    outfile: "./example.js",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicG5wOi9Vc2Vycy9kYXZpZC93b3Jrc3BhY2UvcGVyc29uYWwva2luLWNsaS8ueWFybi9jYWNoZS90c2xpYi1ucG0tMS4xNC4xLTEwMjQ5OTExNWUtZGJlNjI4ZWY4Ny56aXAvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmpzIiwgInBucDovVXNlcnMvZGF2aWQvd29ya3NwYWNlL3BlcnNvbmFsL2tpbi1jbGkvLnlhcm4vX192aXJ0dWFsX18vQHlhcm5wa2ctZXNidWlsZC1wbHVnaW4tcG5wLXZpcnR1YWwtZWFmMzIyNjQ4Ni8wL2NhY2hlL0B5YXJucGtnLWVzYnVpbGQtcGx1Z2luLXBucC1ucG0tMy4wLjAtcmMuMTItMWM1ZTI0NWM5Yi1jYzNhNTM0OWQ2LnppcC9ub2RlX21vZHVsZXMvQHlhcm5wa2cvZXNidWlsZC1wbHVnaW4tcG5wL2xpYi9pbmRleC5qcyIsICJwbnA6L1VzZXJzL2RhdmlkL3dvcmtzcGFjZS9wZXJzb25hbC9raW4tY2xpL2xpYi9tYWtrZS9tYWtrZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4vKiBnbG9iYWwgZ2xvYmFsLCBkZWZpbmUsIFN5c3RlbSwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG52YXIgX19leHRlbmRzO1xyXG52YXIgX19hc3NpZ247XHJcbnZhciBfX3Jlc3Q7XHJcbnZhciBfX2RlY29yYXRlO1xyXG52YXIgX19wYXJhbTtcclxudmFyIF9fbWV0YWRhdGE7XHJcbnZhciBfX2F3YWl0ZXI7XHJcbnZhciBfX2dlbmVyYXRvcjtcclxudmFyIF9fZXhwb3J0U3RhcjtcclxudmFyIF9fdmFsdWVzO1xyXG52YXIgX19yZWFkO1xyXG52YXIgX19zcHJlYWQ7XHJcbnZhciBfX3NwcmVhZEFycmF5cztcclxudmFyIF9fYXdhaXQ7XHJcbnZhciBfX2FzeW5jR2VuZXJhdG9yO1xyXG52YXIgX19hc3luY0RlbGVnYXRvcjtcclxudmFyIF9fYXN5bmNWYWx1ZXM7XHJcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdDtcclxudmFyIF9faW1wb3J0U3RhcjtcclxudmFyIF9faW1wb3J0RGVmYXVsdDtcclxudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ7XHJcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xyXG52YXIgX19jcmVhdGVCaW5kaW5nO1xyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFwidHNsaWJcIiwgW1wiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHsgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihleHBvcnRzKSkpOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihtb2R1bGUuZXhwb3J0cykpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoY3JlYXRlRXhwb3J0ZXIocm9vdCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0ZXIoZXhwb3J0cywgcHJldmlvdXMpIHtcclxuICAgICAgICBpZiAoZXhwb3J0cyAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCB2KSB7IHJldHVybiBleHBvcnRzW2lkXSA9IHByZXZpb3VzID8gcHJldmlvdXMoaWQsIHYpIDogdjsgfTtcclxuICAgIH1cclxufSlcclxuKGZ1bmN0aW9uIChleHBvcnRlcikge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3Jlc3QgPSBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgIHZhciB0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZGVjb3JhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgICAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICAgICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgICAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3BhcmFtID0gZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX21ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hd2FpdGVyID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZ2VuZXJhdG9yID0gZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgICAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX19jcmVhdGVCaW5kaW5nID0gZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgICAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgICAgIG9bazJdID0gbVtrXTtcclxuICAgIH07XHJcblxyXG4gICAgX19leHBvcnRTdGFyID0gZnVuY3Rpb24gKG0sIGV4cG9ydHMpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbiAgICB9O1xyXG5cclxuICAgIF9fdmFsdWVzID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3JlYWQgPSBmdW5jdGlvbiAobywgbikge1xyXG4gICAgICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fc3ByZWFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3NwcmVhZEFycmF5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXdhaXQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgICAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY0RlbGVnYXRvciA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgdmFyIGksIHA7XHJcbiAgICAgICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNWYWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgICAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgICAgIHJldHVybiBjb29rZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9faW1wb3J0U3RhciA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnREZWZhdWx0ID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gZnVuY3Rpb24gKHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICAgICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSBmdW5jdGlvbiAocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnRlcihcIl9fZXh0ZW5kc1wiLCBfX2V4dGVuZHMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2Fzc2lnblwiLCBfX2Fzc2lnbik7XHJcbiAgICBleHBvcnRlcihcIl9fcmVzdFwiLCBfX3Jlc3QpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2RlY29yYXRlXCIsIF9fZGVjb3JhdGUpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3BhcmFtXCIsIF9fcGFyYW0pO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ldGFkYXRhXCIsIF9fbWV0YWRhdGEpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0ZXJcIiwgX19hd2FpdGVyKTtcclxuICAgIGV4cG9ydGVyKFwiX19nZW5lcmF0b3JcIiwgX19nZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2V4cG9ydFN0YXJcIiwgX19leHBvcnRTdGFyKTtcclxuICAgIGV4cG9ydGVyKFwiX19jcmVhdGVCaW5kaW5nXCIsIF9fY3JlYXRlQmluZGluZyk7XHJcbiAgICBleHBvcnRlcihcIl9fdmFsdWVzXCIsIF9fdmFsdWVzKTtcclxuICAgIGV4cG9ydGVyKFwiX19yZWFkXCIsIF9fcmVhZCk7XHJcbiAgICBleHBvcnRlcihcIl9fc3ByZWFkXCIsIF9fc3ByZWFkKTtcclxuICAgIGV4cG9ydGVyKFwiX19zcHJlYWRBcnJheXNcIiwgX19zcHJlYWRBcnJheXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0XCIsIF9fYXdhaXQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jR2VuZXJhdG9yXCIsIF9fYXN5bmNHZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jRGVsZWdhdG9yXCIsIF9fYXN5bmNEZWxlZ2F0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jVmFsdWVzXCIsIF9fYXN5bmNWYWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ha2VUZW1wbGF0ZU9iamVjdFwiLCBfX21ha2VUZW1wbGF0ZU9iamVjdCk7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0U3RhclwiLCBfX2ltcG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2ltcG9ydERlZmF1bHRcIiwgX19pbXBvcnREZWZhdWx0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZEdldFwiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZFNldFwiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KTtcclxufSk7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucG5wUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IGZzID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImZzXCIpKTtcbmNvbnN0IHBhdGhfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcbmNvbnN0IG1hdGNoQWxsID0gLygpLztcbmNvbnN0IGRlZmF1bHRFeHRlbnNpb25zID0gW2AudHN4YCwgYC50c2AsIGAuanN4YCwgYC5tanNgLCBgLmNqc2AsIGAuanNgLCBgLmNzc2AsIGAuanNvbmBdO1xuLy8gUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9ibG9iLzUzNzE5NWFlODRiZWUxNTEwZmFjMTQyMzU5MDZkNTg4MDg0YzM5Y2QvcGtnL2FwaS9hcGlfaW1wbC5nbyNMMzY2LUwzODhcbmZ1bmN0aW9uIHBhcnNlRXh0ZXJuYWxzKGV4dGVybmFscykge1xuICAgIHJldHVybiBleHRlcm5hbHMubWFwKGV4dGVybmFsID0+IHtcbiAgICAgICAgLy8gRVNCdWlsZCdzIHZhbGlkYXRpb24gcGFzcyBydW5zIGJlZm9yZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gYXNzZXJ0IHRoYXQgdGhlcmUncyBhIHNpbmdsZSB3aWxkY2FyZFxuICAgICAgICBjb25zdCB3aWxkY2FyZElkeCA9IGV4dGVybmFsLmluZGV4T2YoYCpgKTtcbiAgICAgICAgaWYgKHdpbGRjYXJkSWR4ICE9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB7IHByZWZpeDogZXh0ZXJuYWwuc2xpY2UoMCwgd2lsZGNhcmRJZHgpLCBzdWZmaXg6IGV4dGVybmFsLnNsaWNlKHdpbGRjYXJkSWR4ICsgMSkgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNFeHRlcm5hbChwYXRoLCBleHRlcm5hbHMpIHtcbiAgICBmb3IgKGNvbnN0IGV4dGVybmFsIG9mIGV4dGVybmFscykge1xuICAgICAgICBpZiAodHlwZW9mIGV4dGVybmFsID09PSBgb2JqZWN0YCkge1xuICAgICAgICAgICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9ibG9iLzUzNzE5NWFlODRiZWUxNTEwZmFjMTQyMzU5MDZkNTg4MDg0YzM5Y2QvaW50ZXJuYWwvcmVzb2x2ZXIvcmVzb2x2ZXIuZ28jTDM3Mi1MMzgxXG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPj0gZXh0ZXJuYWwucHJlZml4Lmxlbmd0aCArIGV4dGVybmFsLnN1ZmZpeC5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiBwYXRoLnN0YXJ0c1dpdGgoZXh0ZXJuYWwucHJlZml4KVxuICAgICAgICAgICAgICAgICYmIHBhdGguZW5kc1dpdGgoZXh0ZXJuYWwuc3VmZml4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IGV4dGVybmFsKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy8gSWYgdGhlIG1vZHVsZSBcImZvb1wiIGhhcyBiZWVuIG1hcmtlZCBhcyBleHRlcm5hbCwgd2UgYWxzbyB3YW50IHRvIHRyZWF0XG4gICAgICAgICAgICAvLyBwYXRocyBpbnRvIHRoYXQgbW9kdWxlIHN1Y2ggYXMgXCJmb28vYmFyXCIgYXMgZXh0ZXJuYWwgdG9vLlxuICAgICAgICAgICAgLy8gUmVmZXJlbmNlczpcbiAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L2VzYnVpbGQvYmxvYi81MzcxOTVhZTg0YmVlMTUxMGZhYzE0MjM1OTA2ZDU4ODA4NGMzOWNkL2ludGVybmFsL3Jlc29sdmVyL3Jlc29sdmVyLmdvI0w2NTEtTDY1MlxuICAgICAgICAgICAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9ibG9iLzUzNzE5NWFlODRiZWUxNTEwZmFjMTQyMzU5MDZkNTg4MDg0YzM5Y2QvaW50ZXJuYWwvcmVzb2x2ZXIvcmVzb2x2ZXIuZ28jTDE2ODgtTDE2OTFcbiAgICAgICAgICAgIGlmICghZXh0ZXJuYWwuc3RhcnRzV2l0aChgL2ApICYmICFleHRlcm5hbC5zdGFydHNXaXRoKGAuL2ApICYmICFleHRlcm5hbC5zdGFydHNXaXRoKGAuLi9gKSAmJiBleHRlcm5hbCAhPT0gYC5gICYmIGV4dGVybmFsICE9PSBgLi5gKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGguc3RhcnRzV2l0aChgJHtleHRlcm5hbH0vYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRPbkxvYWQoYXJncykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnRzOiBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZShhcmdzLnBhdGgpLFxuICAgICAgICBsb2FkZXI6IGBkZWZhdWx0YCxcbiAgICAgICAgLy8gRm9yIHJlZ3VsYXIgaW1wb3J0cyBpbiB0aGUgYGZpbGVgIG5hbWVzcGFjZSwgcmVzb2x2ZURpciBpcyB0aGUgZGlyZWN0b3J5IHRoZVxuICAgICAgICAvLyBmaWxlIGJlaW5nIHJlc29sdmVkIGxpdmVzIGluLiBGb3IgYWxsIG90aGVyIHZpcnR1YWwgbW9kdWxlcywgdGhpcyBkZWZhdWx0cyB0b1xuICAgICAgICAvLyBlbXB0eSBzdHJpbmc6IFwiXCJcbiAgICAgICAgLy8gQSBzZW5zaWJsZSB2YWx1ZSBmb3IgcG5wIGltcG9ydHMgaXMgdGhlIHNhbWUgYXMgdGhlIGBmaWxlYCBuYW1lc3BhY2UsIGFzIHBucFxuICAgICAgICAvLyBzdGlsbCByZXNvbHZlcyB0byBmaWxlcyBvbiBkaXNrIChpbiB0aGUgY2FjaGUpLlxuICAgICAgICByZXNvbHZlRGlyOiBwYXRoXzEuZGVmYXVsdC5kaXJuYW1lKGFyZ3MucGF0aCksXG4gICAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRPblJlc29sdmUoYXJncywgeyByZXNvbHZlZFBhdGgsIGVycm9yLCB3YXRjaEZpbGVzIH0pIHtcbiAgICBjb25zdCBwcm9ibGVtcyA9IGVycm9yID8gW3sgdGV4dDogZXJyb3IubWVzc2FnZSB9XSA6IFtdO1xuICAgIC8vIFNvbWV0aW1lcyBkeW5hbWljIHJlc29sdmUgY2FsbHMgbWlnaHQgYmUgd3JhcHBlZCBpbiBhIHRyeSAvIGNhdGNoLFxuICAgIC8vIGJ1dCBFU0J1aWxkIG5laXRoZXIgc2tpcHMgdGhlbSBub3IgZG9lcyBpdCBwcm92aWRlIGEgd2F5IGZvciB1cyB0byB0ZWxsLlxuICAgIC8vIEJlY2F1c2Ugb2YgdGhhdCwgd2UgZG93bmdyYWRlIGFsbCBlcnJvcnMgdG8gd2FybmluZ3MgaW4gdGhlc2Ugc2l0dWF0aW9ucy5cbiAgICAvLyBJc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L2VzYnVpbGQvaXNzdWVzLzExMjdcbiAgICBsZXQgbWVyZ2VXaXRoO1xuICAgIHN3aXRjaCAoYXJncy5raW5kKSB7XG4gICAgICAgIGNhc2UgYHJlcXVpcmUtY2FsbGA6XG4gICAgICAgIGNhc2UgYHJlcXVpcmUtcmVzb2x2ZWA6XG4gICAgICAgIGNhc2UgYGR5bmFtaWMtaW1wb3J0YDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXJnZVdpdGggPSB7IHdhcm5pbmdzOiBwcm9ibGVtcyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVyZ2VXaXRoID0geyBlcnJvcnM6IHByb2JsZW1zIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlc29sdmVkUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4geyBuYW1lc3BhY2U6IGBwbnBgLCBwYXRoOiByZXNvbHZlZFBhdGgsIHdhdGNoRmlsZXMgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IGV4dGVybmFsOiB0cnVlLCAuLi5tZXJnZVdpdGgsIHdhdGNoRmlsZXMgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBwbnBQbHVnaW4oeyBiYXNlRGlyID0gcHJvY2Vzcy5jd2QoKSwgZXh0ZW5zaW9ucyA9IGRlZmF1bHRFeHRlbnNpb25zLCBmaWx0ZXIgPSBtYXRjaEFsbCwgb25SZXNvbHZlID0gZGVmYXVsdE9uUmVzb2x2ZSwgb25Mb2FkID0gZGVmYXVsdE9uTG9hZCwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYEB5YXJucGtnL2VzYnVpbGQtcGx1Z2luLXBucGAsXG4gICAgICAgIHNldHVwKGJ1aWxkKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgeyBmaW5kUG5wQXBpIH0gPSByZXF1aXJlKGBtb2R1bGVgKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmluZFBucEFwaSA9PT0gYHVuZGVmaW5lZGApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxzID0gcGFyc2VFeHRlcm5hbHMoKF9hID0gYnVpbGQuaW5pdGlhbE9wdGlvbnMuZXh0ZXJuYWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXRmb3JtID0gKF9iID0gYnVpbGQuaW5pdGlhbE9wdGlvbnMucGxhdGZvcm0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGBicm93c2VyYDtcbiAgICAgICAgICAgIGNvbnN0IGlzUGxhdGZvcm1Ob2RlID0gcGxhdGZvcm0gPT09IGBub2RlYDtcbiAgICAgICAgICAgIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2V2YW53L2VzYnVpbGQvYmxvYi81MzcxOTVhZTg0YmVlMTUxMGZhYzE0MjM1OTA2ZDU4ODA4NGMzOWNkL2ludGVybmFsL3Jlc29sdmVyL3Jlc29sdmVyLmdvI0wyMzgtTDI1M1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uc0RlZmF1bHQgPSBuZXcgU2V0KGJ1aWxkLmluaXRpYWxPcHRpb25zLmNvbmRpdGlvbnMpO1xuICAgICAgICAgICAgY29uZGl0aW9uc0RlZmF1bHQuYWRkKGBkZWZhdWx0YCk7XG4gICAgICAgICAgICBpZiAocGxhdGZvcm0gPT09IGBicm93c2VyYCB8fCBwbGF0Zm9ybSA9PT0gYG5vZGVgKVxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNEZWZhdWx0LmFkZChwbGF0Zm9ybSk7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25zSW1wb3J0ID0gbmV3IFNldChjb25kaXRpb25zRGVmYXVsdCk7XG4gICAgICAgICAgICBjb25kaXRpb25zSW1wb3J0LmFkZChgaW1wb3J0YCk7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb25zUmVxdWlyZSA9IG5ldyBTZXQoY29uZGl0aW9uc0RlZmF1bHQpO1xuICAgICAgICAgICAgY29uZGl0aW9uc1JlcXVpcmUuYWRkKGByZXF1aXJlYCk7XG4gICAgICAgICAgICBidWlsZC5vblJlc29sdmUoeyBmaWx0ZXIgfSwgYXJncyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBpZiAoaXNFeHRlcm5hbChhcmdzLnBhdGgsIGV4dGVybmFscykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGV4dGVybmFsOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvZXNidWlsZC9ibG9iLzUzNzE5NWFlODRiZWUxNTEwZmFjMTQyMzU5MDZkNTg4MDg0YzM5Y2QvaW50ZXJuYWwvcmVzb2x2ZXIvcmVzb2x2ZXIuZ28jTDE0OTUtTDE1MDJcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9ucyA9IGNvbmRpdGlvbnNEZWZhdWx0O1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmtpbmQgPT09IGBkeW5hbWljLWltcG9ydGAgfHwgYXJncy5raW5kID09PSBgaW1wb3J0LXN0YXRlbWVudGApXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnMgPSBjb25kaXRpb25zSW1wb3J0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3Mua2luZCA9PT0gYHJlcXVpcmUtY2FsbGAgfHwgYXJncy5raW5kID09PSBgcmVxdWlyZS1yZXNvbHZlYClcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucyA9IGNvbmRpdGlvbnNSZXF1aXJlO1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbnRyeSBwb2ludCByZXNvbHV0aW9uIHVzZXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgZWZmZWN0aXZlSW1wb3J0ZXIgPSBhcmdzLnJlc29sdmVEaXJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHthcmdzLnJlc29sdmVEaXJ9L2BcbiAgICAgICAgICAgICAgICAgICAgOiBhcmdzLmltcG9ydGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFyZ3MuaW1wb3J0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7YmFzZURpcn0vYDtcbiAgICAgICAgICAgICAgICBjb25zdCBwbnBBcGkgPSBmaW5kUG5wQXBpKGVmZmVjdGl2ZUltcG9ydGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBucEFwaSlcbiAgICAgICAgICAgICAgICAgICAgLy8gUGF0aCBpc24ndCBjb250cm9sbGVkIGJ5IFBuUCBzbyBkZWxlZ2F0ZSB0byB0aGUgbmV4dCByZXNvbHZlciBpbiB0aGUgY2hhaW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBwbnBBcGkucmVzb2x2ZVJlcXVlc3QoYXJncy5wYXRoLCBlZmZlY3RpdmVJbXBvcnRlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyQnVpbHRpbnM6IGlzUGxhdGZvcm1Ob2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgd2F0Y2hGaWxlcyA9IFtwbnBBcGkucmVzb2x2ZVJlcXVlc3QoYHBucGFwaWAsIG51bGwpXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdG9yID0gcG5wQXBpLmZpbmRQYWNrYWdlTG9jYXRvcihwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBwbnBBcGkuZ2V0UGFja2FnZUluZm9ybWF0aW9uKGxvY2F0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpbmZvID09PSBudWxsIHx8IGluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluZm8ubGlua1R5cGUpID09PSBgU09GVGApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXRjaEZpbGVzLnB1c2goKF9iID0gKF9hID0gcG5wQXBpLnJlc29sdmVWaXJ0dWFsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChwbnBBcGksIHBhdGgpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb25SZXNvbHZlKGFyZ3MsIHsgcmVzb2x2ZWRQYXRoOiBwYXRoLCBlcnJvciwgd2F0Y2hGaWxlcyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2UgcmVnaXN0ZXIgb24gdGhlIGJ1aWxkIHRvIHByZXZlbnQgRVNCdWlsZCBmcm9tIHJlYWRpbmcgdGhlIGZpbGVzXG4gICAgICAgICAgICAvLyBpdHNlbGYsIHNpbmNlIGl0IHdvdWxkbid0IGtub3cgaG93IHRvIGFjY2VzcyB0aGUgZmlsZXMgZnJvbSB3aXRoaW5cbiAgICAgICAgICAgIC8vIHRoZSB6aXAgYXJjaGl2ZXMuXG4gICAgICAgICAgICBpZiAoYnVpbGQub25Mb2FkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYnVpbGQub25Mb2FkKHsgZmlsdGVyIH0sIG9uTG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMucG5wUGx1Z2luID0gcG5wUGx1Z2luO1xuIiwgImltcG9ydCB7IHBucFBsdWdpbiB9IGZyb20gJ0B5YXJucGtnL2VzYnVpbGQtcGx1Z2luLXBucCdcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAnbWFra2UnXG5cbi8vIEltcG9ydGluZyBqc29uIGZpbGVzIGRvZXMgbm90IHdvcmsgd2l0aCBwbnAgbG9hZGVyIHJpZ2h0IG5vdy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS95YXJucGtnL2JlcnJ5L2lzc3Vlcy80MjQ1XG4vLyBpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3BhY2thZ2UuanNvbicgYXNzZXJ0IHsgdHlwZTogJ2pzb24nIH1cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IHsgZGVwZW5kZW5jaWVzID0ge30gfSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKCcuL3BhY2thZ2UuanNvbicpLnRvU3RyaW5nKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGVzYnVpbGQ6IHtcbiAgICBlbnRyeVBvaW50czogWycuL2V4YW1wbGUudHMnXSxcbiAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKSxcbiAgICBvdXRmaWxlOiAnLi9leGFtcGxlLmpzJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBwbnBQbHVnaW4oKSxcbiAgICBdLFxuICAgIHRzY29uZmlnOiAnLi90c2NvbmZpZy5qc29uJyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFnQkEsUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixJQUFDLFVBQVUsU0FBUztBQUNoQixVQUFJLE9BQU8sT0FBTyxXQUFXLFdBQVcsU0FBUyxPQUFPLFNBQVMsV0FBVyxPQUFPLE9BQU8sU0FBUyxXQUFXLE9BQU8sQ0FB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
