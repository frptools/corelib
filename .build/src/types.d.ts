export declare type Concrete = string | number | boolean | symbol | object;
export declare type Defined = Concrete | null;
export declare type Primitive = Defined | undefined;
export declare type ValueRef<A> = {
    value: A;
};
export interface Associative<V> {
    [key: string]: V;
    [key: number]: V;
}
export declare type FilterFn<A> = (value: A, index: number) => any;
export declare type KeyedFilterFn<A, K> = (value: A, key: K, index: number) => any;
export declare type MapFn<A, B> = (value: A, index: number) => B;
export declare type KeyedMapFn<A, K, B> = (value: A, key: K, index: number) => B;
export declare type ReduceFn<A, B> = (accum: B, value: A, index: number) => B;
export declare type KeyedReduceFn<B, A, K> = (accum: B, value: A, key: K, index: number) => B;
export declare type ForEachFn<A> = (value: A, index: number) => any;
export declare type KeyedForEachFn<A, K> = (value: A, key: K, index: number) => any;
export declare type SelectorFn<A, B> = (value: A) => B;
export declare type KeyedSelectorFn<A, K, B> = (value: A, key: K) => B;
export declare type EqualityFn<A> = (a: A, b: A) => boolean;
export declare type ComparatorFn<A> = (a: A, b: A) => number;
