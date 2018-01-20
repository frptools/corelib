import { Primitive } from './types';

export function isDefined<T> (value: T | undefined): value is T;
export function isDefined<T> (value: T | undefined): boolean;
export function isDefined<T> (value: T | undefined) {
  return value !== void 0;
}

export function isUndefined<T> (value: T | undefined): value is undefined;
export function isUndefined<T> (value: T | undefined): boolean;
export function isUndefined<T> (value: T | undefined) {
  return value === void 0;
}

export function isNull<T> (value: T | null): value is null;
export function isNull<T> (value: T | null): boolean;
export function isNull<T> (value: T | null) {
  return value === null;
}

export function isNotNull<T> (value: T | null): value is T;
export function isNotNull<T> (value: T | null): boolean;
export function isNotNull<T>  (value: T | null) {
  return value !== null;
}

/**
 * Checks if the value is null or undefined
 *
 * @export
 * @template T The expected type of the value
 * @param {(T|null|undefined)} value A value to test
 * @returns {(value is null|undefined)} true if the value is null or undefined, otherwise false
 */
export function isNothing<T>  (value: T | null | undefined): value is null | undefined;
export function isNothing<T>  (value: T | null | undefined): boolean;
export function isNothing<T>  (value: T | null | undefined) {
  return value === void 0 || value === null;
}

/**
 * Checks that the value is neither null nor undefined
 *
 * @export
 * @template T The expected type of the value
 * @param {(T|null|undefined)} value A value to test
 * @returns {value is T} false if the value is null or undefined, otherwise true
 */
export function isNotNothing<T>  (value: T | null | undefined): value is T;
export function isNotNothing<T>  (value: T | null | undefined): boolean;
export function isNotNothing<T>  (value: T | null | undefined) {
  return value !== void 0 && value !== null;
}

/**
 * Checks whether the object can be iterated over
 *
 * @export
 * @template T The type of values to be iterated over
 * @param {*} value A value to check
 * @returns {value is Iterable<T>} true if the argument is iterable
 */
export function isIterable<T>  (value: object): value is Iterable<T>;
export function isIterable<T>  (value: object): boolean;
export function isIterable (value: object) {
  return Symbol.iterator in <any>value;
}

/**
 * Checks that the value is an instance of a non-null object
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a non-null object instance
 */
export function isObject<T extends Function>  (value: T): false;
export function isObject<T extends object>  (value: T | Primitive): value is T;
export function isObject<T extends object>  (value: T | Primitive): boolean;
export function isObject (value: any) {
  return typeof value === 'object' && value !== null;
}

/**
 * Checks that the value is a function
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a function
 */
export function isFunction (value: any): value is Function;
export function isFunction (value: any): boolean;
export function isFunction (value: any) {
  return typeof value === 'function';
}

/**
 * Checks that the value is a boolean
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a boolean
 */
export function isBoolean (value: any): value is boolean;
export function isBoolean (value: any): boolean;
export function isBoolean (value: any) {
  return typeof value === 'boolean';
}

/**
 * Checks that the value is a string
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a string
 */
export function isString (value: any): value is string;
export function isString (value: any): boolean;
export function isString (value: any) {
  return typeof value === 'string';
}

/**
 * Checks that the value is a number
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a number
 */
export function isNumber (value: any): value is number;
export function isNumber (value: any): boolean;
export function isNumber (value: any) {
  return typeof value === 'number';
}

/**
 * Checks that the value is a symbol
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is symbol} true if the value is a symbol
 */
export function isSymbol (value: any): value is symbol;
export function isSymbol (value: any): boolean;
export function isSymbol (value: any) {
  return typeof value === 'symbol';
}

/**
 * Checks that an object has a plain Object constructor
 *
 * @export
 * @param {object} value
 * @returns {value is Object} true if the object's constructor is `Object`
 */
export function isPlain (value: object): value is object;
export function isPlain (value: object): boolean;
export function isPlain (value: object) {
  return value.constructor === Object;
}

export function isInstanceOf<C extends { new(...args: any[]): A }, A extends object> (type: C) {
  function instanceOf (value: object): value is A;
  function instanceOf (value: object): boolean;
  function instanceOf (value: object) {
    return value instanceof type;
  }
  return instanceOf;
}