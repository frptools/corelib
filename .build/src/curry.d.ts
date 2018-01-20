export interface CurriedFunction2<A, B, C> {
    (): CurriedFunction2<A, B, C>;
    (a: A): (b: B) => C;
    (a: A, b: B): C;
}
export interface CurriedFunction3<A, B, C, D> {
    (): CurriedFunction3<A, B, C, D>;
    (a: A): CurriedFunction2<B, C, D>;
    (a: A, b: B): (c: C) => D;
    (a: A, b: B, c: C): D;
}
export interface CurriedFunction4<A, B, C, D, E> {
    (): CurriedFunction4<A, B, C, D, E>;
    (a: A): CurriedFunction3<B, C, D, E>;
    (a: A, b: B): CurriedFunction2<C, D, E>;
    (a: A, b: B, c: C): (d: D) => E;
    (a: A, b: B, c: C, d: D): E;
}
export interface CurriedFunction2n<A, B, C> {
    (): CurriedFunction2n<A, B, C>;
    (a: A): (...b: B[]) => C;
    (a: A, ...b: B[]): C;
}
export interface CurriedFunction3n<A, B, C, D> {
    (): CurriedFunction3n<A, B, C, D>;
    (a: A): CurriedFunction2n<B, C, D>;
    (a: A, b: B): (...c: C[]) => D;
    (a: A, b: B, ...c: C[]): D;
}
export interface CurriedFunction4n<A, B, C, D, E> {
    (): CurriedFunction4n<A, B, C, D, E>;
    (a: A): CurriedFunction3n<B, C, D, E>;
    (a: A, b: B): CurriedFunction2n<C, D, E>;
    (a: A, b: B, c: C): (...d: D[]) => E;
    (a: A, b: B, c: C, ...d: D[]): E;
}
export declare function curry2<A, B, C>(f: (a: A, b: B) => C): CurriedFunction2<A, B, C>;
export declare function curry3<A, B, C, D>(f: (a: A, b: B, c: C) => D): CurriedFunction3<A, B, C, D>;
export declare function curry4<A, B, C, D, E>(f: (a: A, b: B, c: C, d: D) => E): CurriedFunction4<A, B, C, D, E>;
export declare function curry2n<A, B, C>(f: (a: A, ...b: B[]) => C): CurriedFunction2n<A, B, C>;
export declare function curry3n<A, B, C, D>(f: (a: A, b: B, ...c: C[]) => D): CurriedFunction3n<A, B, C, D>;
export declare function curry4n<A, B, C, D, E>(f: (a: A, b: B, c: C, ...d: D[]) => E): CurriedFunction4n<A, B, C, D, E>;
