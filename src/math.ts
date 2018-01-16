/**
 * Fast, minimal implementation of Math.abs()
 *
 * @export
 * @param {number} value
 * @returns {number} The absolute value of the input argument
 */
export function abs (value: number): number {
  return value < 0 ? -value : value;
}

/**
* Fast, minimal implementation of Math.min()
*
* @export
* @param {number} a
* @param {number} b
* @returns {number} The smaller of the two arguments, or the first argument if both are equal
*/
export function min (a: number, b: number): number {
  return a <= b ? a : b;
}

/**
* Fast, minimal implementation of Math.max()
*
* @export
* @param {number} a
* @param {number} b
* @returns {number} The marger of the two arguments, or the first argument if both are equal
*/
export function max (a: number, b: number): number {
  return a >= b ? a : b;
}

export function increment (a: number = 0): number {
  return a + 1;
}

export function decrement (a: number = 0): number {
  return a - 1;
}