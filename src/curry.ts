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

export function curry2<A, B, C> (f: (a: A, b: B) => C): CurriedFunction2<A, B, C>;
export function curry2 (f: Function) {
  function curried (a: any, b: any) {
    switch (arguments.length) {
      case 0: return curried;
      case 1: return b => f(a, b);
      default: return f(a, b);
    }
  }
  return curried;
}

export function curry3<A, B, C, D> (f: (a: A, b: B, c: C) => D): CurriedFunction3<A, B, C, D>;
export function curry3 (f: Function) {
  function curried (a: any, b: any, c: any) { // eslint-disable-line complexity
    switch (arguments.length) {
      case 0: return curried;
      case 1: return curry2((b, c) => f(a, b, c));
      case 2: return c => f(a, b, c);
      default: return f(a, b, c);
    }
  }
  return curried;
}

export function curry4<A, B, C, D, E> (f: (a: A, b: B, c: C, d: D) => E): CurriedFunction4<A, B, C, D, E>;
export function curry4 (f: Function) {
  function curried (a: any, b: any, c: any, d: any) { // eslint-disable-line complexity
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


// curry2 :: ((a, ...b) -> c) -> (a -> ...b -> c)
export function curry2n<A, B, C>  (f: (a: A, ...b: B[]) => C): CurriedFunction2n<A, B, C>;
export function curry2n (f: Function) {
  function curried (a: any, ...b: any[]) {
    switch (arguments.length) {
      case 0: return curried;
      case 1: return (...b: any[]) => f(a, ...b);
      default: return f(a, ...b);
    }
  }
  return curried;
}

// curry3 :: ((a, b, ...c) -> d) -> (a -> b -> ...c -> d)
export function curry3n<A, B, C, D>  (f: (a: A, b: B, ...c: C[]) => D): CurriedFunction3n<A, B, C, D>;
export function curry3n (f: Function) {
  function curried (a: any, b: any, ...c: any[]) {
    switch (arguments.length) {
      case 0: return curried;
      case 1: return curry2n((b, ...c) => f(a, b, ...c));
      case 2: return (...c: any[]) => f(a, b, ...c);
      default: return f(a, b, ...c);
    }
  }
  return curried;
}

// curry4 :: ((a, b, c, ...d) -> e) -> (a -> b -> c -> ...d -> e)
export function curry4n<A, B, C, D, E>  (f: (a: A, b: B, c: C, ...d: D[]) => E): CurriedFunction4n<A, B, C, D, E>;
export function curry4n (f: Function) {
  function curried (a: any, b: any, c: any, ...d: any[]) {
    switch (arguments.length) {
      case 0: return curried;
      case 1: return curry3n((b, c, ...d) => f(a, b, c, ...d));
      case 2: return curry2n((c, ...d) => f(a, b, c, ...d));
      case 3: return (...d: any[]) => f(a, b, c, ...d);
      default: return f(a, b, c, ...d);
    }
  }
  return curried;
}