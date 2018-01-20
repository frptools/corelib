import { isNothing, isNull, isUndefined } from './is';
import { curry2, curry2n, curry3, curry4n } from './curry';

// @ts-ignore
import { CurriedFunction2, CurriedFunction2n, CurriedFunction3, CurriedFunction4n } from './curry';

// Composition
export const compose = (...fns: Function[]) => (...args: any[]) => fns.reduceRight((x, f, i) => i === fns.length - 1 ? f(...args) : f(x), null);
export const pipe = (...fns: Function[]) => (...args: any[]) => ((Array.isArray(fns[0]) ? fns[0] : fns) as Function[]).reduce((x, f, i) => i === 0 ? f(...x) : f(x), args);
export const converge = (f: Function, ...fns: Function[]) => (x: any) => f(...fns.map(g => g(x)));
export const spread = (f: Function, ...fns: Function[]) => (...x: any[]) => f(...fns.map((g, i) => g(x[i])));
export const spreadLeft = (f: Function, ...fns: Function[]) => (...x: any[]) => f(...fns.map((g, i) => g(x[fns.length - i - 1])));
export const applyUsing = curry2((f: Function, x: any) => f(x)(x));
export const flip = curry3((f: Function, a: any, b: any) => f(b, a));

// Logic
export const ifElse = curry4n((f: Function, g: Function, h: Function, ...x: any[]) => f(...x) ? g(...x) : h(...x));
export const negate = curry2((f: Function, x: any) => !f(x));
export const equals = curry2((a: any, b: any) => a === b);
export const or = curry3((f: Function, g: Function, x: any) => f(x) || g(x));
export const and = curry3((f: Function, g: Function, x: any) => f(x) && g(x));
// tslint:disable-next-line:variable-name
export const any = (...fns: Function[]) => (x: any) => fns.some(f => f(x));
export const mapIf = curry3((p: Function, f: Function, x: any) => p(x) ? f(x) : x);
export const mapUnless = curry3((p: Function, f: Function, x: any) => p(x) ? x : f(x));

// Transformation
export const map = curry2((f: Function, x: any) => f(x));

export const defaultUsing = curry2((f: Function, x: any) => isUndefined(x) ? f() : x);
export const defaultIfUndefined = curry2((a: any, x: any) => isUndefined(x) ? a : x);
export const defaultIfNothing = curry2((a: any, x: any) => isNothing(x) ? a : x);
export const defaultIfNull = curry2((a: any, x: any) => isNull(x) ? a : x);
export const defaultIf = curry3((f: (x: any) => any, a: any, x: any) => f(x) ? a : x);
export const defaultUnless = curry3((f: Function, a: any, x: any) => f(x) ? x : a);
export const valueOrDefault = curry2((x: any, a: any) => isUndefined(x) ? a : x);
export const undefinedIfNull = defaultIfNull(void 0);

export const identity = (x: any) => x;
export const noop = (...args: any[]) => {};
export const constant = (x: any) => () => x;
export const nothing = constant(void 0);
export const tap = (f: Function) => (x: any) => (f(x), x);

// Errors
export const throwError = (s: string = '') => { throw new Error(s); };
export const throwNotImplemented = (s: string) => throwError(`Not implemented${s ? `: ${s}` : ''}`);
export const throwNotSupported = (s: string) => throwError(`Operation not supported${s ? `: ${s}` : ''}`);
export const throwInvalidOperation = (s: string) => throwError(`Invalid operation${s ? `: ${s}` : ''}`);
export const throwMissing = (name: string, message?: string) => throwError(`No value is defined${name ? ` for "${name}"${message ? ` (${message})` : ''}` : ''}`);
export const throwArgumentError = (name: string, message?: string) => throwError(`Invalid ${name ? `value for parameter "${name}"` : 'argument value'}${message ? `: ${message}` : ''}`);
export const error = (s: string) => () => throwError(s);
export const notImplemented = (s: string) => () => throwNotImplemented(s);
export const notSupported = (s: string) => () => throwNotSupported(s);
export const invalidOperation = (s: string) => () => throwInvalidOperation(s);
export const missing = (name: string, message?: string) => () => throwMissing(name, message);
export const argumentError = (name: string, message?: string) => () => throwArgumentError(name, message);

// Function Arguments
export const getArg = (i: number) => function () { return arguments[i]; };
export const argsToArray = (...args: any[]) => args;
export const mapApply = (f: Function, g: Function) => (...args: any[]) => f(...args.map(<any>g));

// Function Binding
export const invoker = (f: Function, ...a: any[]) => (...b: any[]) => f(...a, ...b);
export const invokeWithArgs = (...args: any[]) => (f: Function) => f(...args);
export const invokeMethod = (key: any) => (target: any) => target[key]();
export const invokeMethodWithArgs = curry2n((key: any, ...args: any[]) => (target: any) => target[key](...args));

// Object
export const assoc = curry3((key: any, value: any, target: any) => (Object.assign({}, target, { [key]: value })));
export const objectOf = curry2((key: any, value: any) => ({ [key]: value }));
export const construct = curry2n((type: { new(): any }, ...args: any[]) => new type(...args));
export const mapProps = curry2((f: Function, o: any) => Object.keys(o).map(key => f(key, o[key])));
export const mapObject = curry2((f: Function, o: any) => Object.keys(o).reduce((o: any, key: any) => (o[key] = f(o[key], key), o), Object.assign({}, o)));
export const toPairs = (o: any) => Object.keys(o).map(key => [key, o[key]]);
export const get = curry2((key: any, o: any) => o[key]);
export const has = curry2((key: any, o: any) => key in o);
export const maybeGet = curry2((key: any, o: any) => isNothing(o) ? void 0 : o[key]);
export const getFrom = curry2((o: any, k: any) => o[k]);
export const valueOf = <A>(value: A|null|undefined) => isNothing(value) ? value : value.valueOf();

// String

export const substr = (from: number, length?: number) => (s: string) => s.substr(from, length);