"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fast, minimal implementation of Math.abs()
 *
 * @export
 * @param {number} value
 * @returns {number} The absolute value of the input argument
 */
function abs(value) {
    return value < 0 ? -value : value;
}
exports.abs = abs;
/**
* Fast, minimal implementation of Math.min()
*
* @export
* @param {number} a
* @param {number} b
* @returns {number} The smaller of the two arguments, or the first argument if both are equal
*/
function min(a, b) {
    return a <= b ? a : b;
}
exports.min = min;
/**
* Fast, minimal implementation of Math.max()
*
* @export
* @param {number} a
* @param {number} b
* @returns {number} The marger of the two arguments, or the first argument if both are equal
*/
function max(a, b) {
    return a >= b ? a : b;
}
exports.max = max;
function increment(a = 0) {
    return a + 1;
}
exports.increment = increment;
function decrement(a = 0) {
    return a - 1;
}
exports.decrement = decrement;
//# sourceMappingURL=math.js.map