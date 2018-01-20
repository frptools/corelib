import { Primitive } from './types';
export declare function isDefined<T>(value: T | undefined): value is T;
export declare function isDefined<T>(value: T | undefined): boolean;
export declare function isUndefined<T>(value: T | undefined): value is undefined;
export declare function isUndefined<T>(value: T | undefined): boolean;
export declare function isNull<T>(value: T | null): value is null;
export declare function isNull<T>(value: T | null): boolean;
export declare function isNotNull<T>(value: T | null): value is T;
export declare function isNotNull<T>(value: T | null): boolean;
/**
 * Checks if the value is null or undefined
 *
 * @export
 * @template T The expected type of the value
 * @param {(T|null|undefined)} value A value to test
 * @returns {(value is null|undefined)} true if the value is null or undefined, otherwise false
 */
export declare function isNothing<T>(value: T | null | undefined): value is null | undefined;
export declare function isNothing<T>(value: T | null | undefined): boolean;
/**
 * Checks that the value is neither null nor undefined
 *
 * @export
 * @template T The expected type of the value
 * @param {(T|null|undefined)} value A value to test
 * @returns {value is T} false if the value is null or undefined, otherwise true
 */
export declare function isNotNothing<T>(value: T | null | undefined): value is T;
export declare function isNotNothing<T>(value: T | null | undefined): boolean;
/**
 * Checks whether the object can be iterated over
 *
 * @export
 * @template T The type of values to be iterated over
 * @param {*} value A value to check
 * @returns {value is Iterable<T>} true if the argument is iterable
 */
export declare function isIterable<T>(value: object): value is Iterable<T>;
export declare function isIterable<T>(value: object): boolean;
/**
 * Checks that the value is an instance of a non-null object
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a non-null object instance
 */
export declare function isObject<T extends Function>(value: T): false;
export declare function isObject<T extends object>(value: T | Primitive): value is T;
export declare function isObject<T extends object>(value: T | Primitive): boolean;
/**
 * Checks that the value is a function
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a function
 */
export declare function isFunction(value: any): value is Function;
export declare function isFunction(value: any): boolean;
/**
 * Checks that the value is a boolean
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a boolean
 */
export declare function isBoolean(value: any): value is boolean;
export declare function isBoolean(value: any): boolean;
/**
 * Checks that the value is a string
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a string
 */
export declare function isString(value: any): value is string;
export declare function isString(value: any): boolean;
/**
 * Checks that the value is a number
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is Object} true if the value is a number
 */
export declare function isNumber(value: any): value is number;
export declare function isNumber(value: any): boolean;
/**
 * Checks that the value is a symbol
 *
 * @export
 * @param {*} value A value to test
 * @returns {value is symbol} true if the value is a symbol
 */
export declare function isSymbol(value: any): value is symbol;
export declare function isSymbol(value: any): boolean;
/**
 * Checks that an object has a plain Object constructor
 *
 * @export
 * @param {object} value
 * @returns {value is Object} true if the object's constructor is `Object`
 */
export declare function isPlain(value: object): value is object;
export declare function isPlain(value: object): boolean;
export declare function isInstanceOf<C extends {
    new (...args: any[]): A;
}, A extends object>(type: C): {
    (value: object): value is A;
    (value: object): boolean;
};
