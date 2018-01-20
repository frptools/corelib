"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function curry2(f) {
    function curried(a, b) {
        switch (arguments.length) {
            case 0: return curried;
            case 1: return b => f(a, b);
            default: return f(a, b);
        }
    }
    return curried;
}
exports.curry2 = curry2;
function curry3(f) {
    function curried(a, b, c) {
        switch (arguments.length) {
            case 0: return curried;
            case 1: return curry2((b, c) => f(a, b, c));
            case 2: return c => f(a, b, c);
            default: return f(a, b, c);
        }
    }
    return curried;
}
exports.curry3 = curry3;
function curry4(f) {
    function curried(a, b, c, d) {
        switch (arguments.length) {
            case 0: return curried;
            case 1: return curry3((b, c, d) => f(a, b, c, d));
            case 2: return curry2((c, d) => f(a, b, c, d));
            case 3: return d => f(a, b, c, d);
            default: return f(a, b, c, d);
        }
    }
    return curried;
}
exports.curry4 = curry4;
function curry2n(f) {
    function curried(a, ...b) {
        switch (arguments.length) {
            case 0: return curried;
            case 1: return (...b) => f(a, ...b);
            default: return f(a, ...b);
        }
    }
    return curried;
}
exports.curry2n = curry2n;
function curry3n(f) {
    function curried(a, b, ...c) {
        switch (arguments.length) {
            case 0: return curried;
            case 1: return curry2n((b, ...c) => f(a, b, ...c));
            case 2: return (...c) => f(a, b, ...c);
            default: return f(a, b, ...c);
        }
    }
    return curried;
}
exports.curry3n = curry3n;
function curry4n(f) {
    function curried(a, b, c, ...d) {
        switch (arguments.length) {
            case 0: return curried;
            case 1: return curry3n((b, c, ...d) => f(a, b, c, ...d));
            case 2: return curry2n((c, ...d) => f(a, b, c, ...d));
            case 3: return (...d) => f(a, b, c, ...d);
            default: return f(a, b, c, ...d);
        }
    }
    return curried;
}
exports.curry4n = curry4n;
//# sourceMappingURL=curry.js.map