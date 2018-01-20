"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("./is");
const curry_1 = require("./curry");
// Composition
exports.compose = (...fns) => (...args) => fns.reduceRight((x, f, i) => i === fns.length - 1 ? f(...args) : f(x), null);
exports.pipe = (...fns) => (...args) => (Array.isArray(fns[0]) ? fns[0] : fns).reduce((x, f, i) => i === 0 ? f(...x) : f(x), args);
exports.converge = (f, ...fns) => (x) => f(...fns.map(g => g(x)));
exports.spread = (f, ...fns) => (...x) => f(...fns.map((g, i) => g(x[i])));
exports.spreadLeft = (f, ...fns) => (...x) => f(...fns.map((g, i) => g(x[fns.length - i - 1])));
exports.applyUsing = curry_1.curry2((f, x) => f(x)(x));
exports.flip = curry_1.curry3((f, a, b) => f(b, a));
// Logic
exports.ifElse = curry_1.curry4n((f, g, h, ...x) => f(...x) ? g(...x) : h(...x));
exports.negate = curry_1.curry2((f, x) => !f(x));
exports.equals = curry_1.curry2((a, b) => a === b);
exports.or = curry_1.curry3((f, g, x) => f(x) || g(x));
exports.and = curry_1.curry3((f, g, x) => f(x) && g(x));
// tslint:disable-next-line:variable-name
exports.any = (...fns) => (x) => fns.some(f => f(x));
exports.mapIf = curry_1.curry3((p, f, x) => p(x) ? f(x) : x);
exports.mapUnless = curry_1.curry3((p, f, x) => p(x) ? x : f(x));
// Transformation
exports.map = curry_1.curry2((f, x) => f(x));
exports.defaultUsing = curry_1.curry2((f, x) => is_1.isUndefined(x) ? f() : x);
exports.defaultIfUndefined = curry_1.curry2((a, x) => is_1.isUndefined(x) ? a : x);
exports.defaultIfNothing = curry_1.curry2((a, x) => is_1.isNothing(x) ? a : x);
exports.defaultIfNull = curry_1.curry2((a, x) => is_1.isNull(x) ? a : x);
exports.defaultIf = curry_1.curry3((f, a, x) => f(x) ? a : x);
exports.defaultUnless = curry_1.curry3((f, a, x) => f(x) ? x : a);
exports.valueOrDefault = curry_1.curry2((x, a) => is_1.isUndefined(x) ? a : x);
exports.undefinedIfNull = exports.defaultIfNull(void 0);
exports.identity = (x) => x;
exports.noop = (...args) => { };
exports.constant = (x) => () => x;
exports.nothing = exports.constant(void 0);
exports.tap = (f) => (x) => (f(x), x);
// Errors
exports.throwError = (s = '') => { throw new Error(s); };
exports.throwNotImplemented = (s) => exports.throwError(`Not implemented${s ? `: ${s}` : ''}`);
exports.throwNotSupported = (s) => exports.throwError(`Operation not supported${s ? `: ${s}` : ''}`);
exports.throwInvalidOperation = (s) => exports.throwError(`Invalid operation${s ? `: ${s}` : ''}`);
exports.throwMissing = (name, message) => exports.throwError(`No value is defined${name ? ` for "${name}"${message ? ` (${message})` : ''}` : ''}`);
exports.throwArgumentError = (name, message) => exports.throwError(`Invalid ${name ? `value for parameter "${name}"` : 'argument value'}${message ? `: ${message}` : ''}`);
exports.error = (s) => () => exports.throwError(s);
exports.notImplemented = (s) => () => exports.throwNotImplemented(s);
exports.notSupported = (s) => () => exports.throwNotSupported(s);
exports.invalidOperation = (s) => () => exports.throwInvalidOperation(s);
exports.missing = (name, message) => () => exports.throwMissing(name, message);
exports.argumentError = (name, message) => () => exports.throwArgumentError(name, message);
// Function Arguments
exports.getArg = (i) => function () { return arguments[i]; };
exports.argsToArray = (...args) => args;
exports.mapApply = (f, g) => (...args) => f(...args.map(g));
// Function Binding
exports.invoker = (f, ...a) => (...b) => f(...a, ...b);
exports.invokeWithArgs = (...args) => (f) => f(...args);
exports.invokeMethod = (key) => (target) => target[key]();
exports.invokeMethodWithArgs = curry_1.curry2n((key, ...args) => (target) => target[key](...args));
// Object
exports.assoc = curry_1.curry3((key, value, target) => (Object.assign({}, target, { [key]: value })));
exports.objectOf = curry_1.curry2((key, value) => ({ [key]: value }));
exports.construct = curry_1.curry2n((type, ...args) => new type(...args));
exports.mapProps = curry_1.curry2((f, o) => Object.keys(o).map(key => f(key, o[key])));
exports.mapObject = curry_1.curry2((f, o) => Object.keys(o).reduce((o, key) => (o[key] = f(o[key], key), o), Object.assign({}, o)));
exports.toPairs = (o) => Object.keys(o).map(key => [key, o[key]]);
exports.get = curry_1.curry2((key, o) => o[key]);
exports.has = curry_1.curry2((key, o) => key in o);
exports.maybeGet = curry_1.curry2((key, o) => is_1.isNothing(o) ? void 0 : o[key]);
exports.getFrom = curry_1.curry2((o, k) => o[k]);
exports.valueOf = (value) => is_1.isNothing(value) ? value : value.valueOf();
// String
exports.substr = (from, length) => (s) => s.substr(from, length);
//# sourceMappingURL=core.js.map