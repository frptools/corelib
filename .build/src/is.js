"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDefined(value) {
    return value !== void 0;
}
exports.isDefined = isDefined;
function isUndefined(value) {
    return value === void 0;
}
exports.isUndefined = isUndefined;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isNotNull(value) {
    return value !== null;
}
exports.isNotNull = isNotNull;
function isNothing(value) {
    return value === void 0 || value === null;
}
exports.isNothing = isNothing;
function isNotNothing(value) {
    return value !== void 0 && value !== null;
}
exports.isNotNothing = isNotNothing;
function isIterable(value) {
    return Symbol.iterator in value;
}
exports.isIterable = isIterable;
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
exports.isObject = isObject;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
function isPlain(value) {
    return value.constructor === Object;
}
exports.isPlain = isPlain;
function isInstanceOf(type) {
    function instanceOf(value) {
        return value instanceof type;
    }
    return instanceOf;
}
exports.isInstanceOf = isInstanceOf;
//# sourceMappingURL=is.js.map