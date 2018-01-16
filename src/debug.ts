import * as M from '@most/core';
import { curry2 } from './curry';
import { compose } from './core';

// @ts-ignore
import { CurriedFunction2 } from '@most/prelude';

declare var console: any;

export type DumpLabel = string | boolean;
const _dump = (s: DumpLabel, ...x: any[]) => (s && console.log(s, ...x), x[0]);
export const dump = function (s: DumpLabel, ...x: any[]) { return arguments.length <= 1 ? (...x: any[]) => _dump(s, ...x) : _dump(s, ...x); };
export const xdump = curry2((s: DumpLabel, f: Function) => (...args: any[]) => (dump(s && `[%] ${s}`, ...args), f(...args)));
export const fdump = curry2((s: DumpLabel, f: Function) => compose(dump(s && `[=] ${s}`), f));
export const fxdump = curry2((s: DumpLabel, f: Function) => xdump(s, fdump(s, f)));
export const sdump = curry2((s: DumpLabel, f: Function) => compose(M.tap(dump(s && `[$] ${s}`)), f));
export const sfdump = curry2((s: DumpLabel, f: Function) => sdump(s, fdump(s, f)));
export const sxdump = curry2((s: DumpLabel, f: Function) => sdump(s, xdump(s, f)));
export const sfxdump = curry2((s: DumpLabel, f: Function) => sdump(s, fxdump(s, f)));
export const intercept = curry2((f: Function, g: Function) => (x: any) => fxdump(!'g(f(x))', g(fxdump(!'x', dump(!'f', f))(x))));
