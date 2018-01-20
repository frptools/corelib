import { max, min } from './math';
import { equals } from './core';
import { EqualityFn, MapFn } from './types';
import { isFunction } from './is';

export function arraysEqual<A> (a: A[]): (b: A[]) => boolean;
export function arraysEqual<A> (a: A[], b: A[]): boolean;
export function arraysEqual<A> (equals: EqualityFn<A>): (a: A[], b: A[]) => boolean;
export function arraysEqual<A> (equals: EqualityFn<A>, a: A[]): (b: A[]) => boolean;
export function arraysEqual<A> (equals: EqualityFn<A>, a: A[], b: A[]): boolean;
export function arraysEqual<A> (arg0: A[]|EqualityFn<A>, arg1?: A[], arg2?: A[]) {
  let eq: EqualityFn<A>, a: A[], b: A[];
  if (isFunction(arg0)) {
    switch (arguments.length) {
      case 1: return (a: A[], b: A[]) => arraysEqual(arg0, a, b);
      case 2: return (b: A[]) => arraysEqual(arg0, arg1!, b);
    }
    a = arg1!;
    b = arg2!;
    eq = arg0;
  }
  else {
    a = arg0;
    b = arg1!;
    eq = equals;
  }
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!eq(a[i], b[i])) return false;
  }
  return true;
}

export function arraysEqualStartCount<A> (a: A[]): (b: A[]) => number;
export function arraysEqualStartCount<A> (a: A[], b: A[]): number;
export function arraysEqualStartCount<A> (equals: EqualityFn<A>): (a: A[], b: A[]) => number;
export function arraysEqualStartCount<A> (equals: EqualityFn<A>, a: A[]): (b: A[]) => number;
export function arraysEqualStartCount<A> (equals: EqualityFn<A>, a: A[], b: A[]): number;
export function arraysEqualStartCount<A> (arg0: A[]|EqualityFn<A>, arg1?: A[], arg2?: A[]) {
  let eq: EqualityFn<A>, a: A[], b: A[];
  if (isFunction(arg0)) {
    switch (arguments.length) {
      case 1: return (a: A[], b: A[]) => arraysEqualStartCount(arg0, a, b);
      case 2: return (b: A[]) => arraysEqualStartCount(arg0, arg1!, b);
    }
    a = arg1!;
    b = arg2!;
    eq = arg0;
  }
  else {
    a = arg0;
    b = arg1!;
    eq = equals;
  }
  if (a === b) return true;
  const max = min(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (!eq(a[i], b[i])) return i;
  }
  return max;
}

export function copyArrayShallow<A = any> (values: A[]) {
  if (values.length > 7) {
    var arr = new Array(values.length);
    for (var i = 0; i < values.length; i++) {
      arr[i] = values[i];
    }
    return arr;
  }
  switch (values.length) {
    case 0: return [];
    case 1: return [values[0]];
    case 2: return [values[0], values[1]];
    case 3: return [values[0], values[1], values[2]];
    case 4: return [values[0], values[1], values[2], values[3]];
    case 5: return [values[0], values[1], values[2], values[3], values[4]];
    case 6: return [values[0], values[1], values[2], values[3], values[4], values[5]];
    case 7: return [values[0], values[1], values[2], values[3], values[4], values[5], values[6]];
    default: return values.slice(); // never reached, but seems to trigger optimization in V8 for some reason
  }
}

export function concatArray<A = any> (left: A[], right: A[]) {
  var arr = new Array(left.length + right.length);
  for (var i = 0; i < left.length; i++) {
    arr[i] = left[i];
  }
  for (var j = 0; j < right.length; i++, j++) {
    arr[i] = right[j];
  }
  return arr;
}

export function withArrayIndexUpdated<A = any> (index: number, value: A, array: A[]) {
  var length = array.length;
  var newArray = Array(length);
  for (var i = 0; i < length; ++i) {
    newArray[i] = array[i];
  }
  newArray[index] = value;
  return newArray;
}

export function withArrayIndexRemoved<A = any> (index: number, array: A[]) {
  var length = array.length;
  if (length === 0 || index >= length) return array;
  if (length === 1) return [];
  var newArray = Array(length - 1);
  for (var i = 0; i < index; ++i) {
    newArray[i] = array[i];
  }
  for (i = i + 1; i < length; ++i) {
    newArray[i - 1] = array[i];
  }
  return newArray;
}

export function withArrayIndexInserted<A = any> (index: number, value: A, array: A[]) {
  var length = array.length;
  var newArray = Array(length + 1);
  for (var i = 0; i < index; ++i) {
    newArray[i] = array[i];
  }
  newArray[i++] = value;
  for (; i < length + 1; ++i) {
    newArray[i] = array[i - 1];
  }
  return newArray;
}

export function withArrayElementAppended<A = any> (value: A, array: A[]) {
  const newArray = Array(array.length + 1);
  for (var i = 0; i < array.length; ++i) {
    newArray[i] = array[i];
  }
  newArray[array.length] = value;
  return newArray;
}

export function withArrayElementPrepended<A = any> (value: A, array: A[]) {
  const newArray = Array(array.length + 1);
  newArray[0] = value;
  for (var i = 0; i < array.length; ++i) {
    newArray[i + 1] = array[i];
  }
  return newArray;
}

export function writeArrayElementsUsing<A = any, B = any> (mapFn: MapFn<A, B>, sourceValues: A[], targetValues: B[], sourceIndex: number, targetIndex: number, count: number): void;
export function writeArrayElementsUsing<A = any> (mapFn: MapFn<A, A>, sourceValues: A[], targetValues: A[], sourceIndex: number, targetIndex: number, count: number): void;
export function writeArrayElementsUsing (mapFn: MapFn<any, any>, sourceValues: any[], targetValues: any[], sourceIndex: number, targetIndex: number, count: number) {
  var i, j, c;
  if (sourceValues === targetValues && sourceIndex < targetIndex) {
    for (i = sourceIndex + count - 1, j = targetIndex + count - 1, c = 0; c < count; i--, j--, c++) {
      targetValues[j] = mapFn(sourceValues[i], j);
    }
  }
  else {
    for (i = sourceIndex, j = targetIndex, c = 0; c < count; i++, j++, c++) {
      targetValues[j] = mapFn(sourceValues[i], j);
    }
  }
}

export function writeArrayElements<A = any> (source: A[], destination: A[], sourceIndex: number, destinationIndex: number, count: number): void {
  var i, j, c;
  if (source === destination && sourceIndex < destinationIndex) {
    for (i = sourceIndex + count - 1, j = destinationIndex + count - 1, c = 0; c < count; i--, j--, c++) {
      destination[j] = source[i];
    }
  }
  else {
    for (i = sourceIndex, j = destinationIndex, c = 0; c < count; i++, j++, c++) {
      destination[j] = source[i];
    }
  }
}

export function skipArrayStart<A = any> (count: number, values: A[]): A[] {
  var array = new Array(max(0, values.length - count));
  for (var i = 0, j = count; j < values.length; i++, j++) {
    array[i] = values[j];
  }
  return array;
}

export function takeArrayStart<A = any> (count: number, values: A[]): A[] {
  const array = new Array(min(count, values.length));
  const length = array.length;
  for (let i = 0; i < length; i++) {
    array[i] = values[i];
  }
  return array;
}

export function firstArrayElement<A = any> (values: A[]): A {
  return values[0];
}

export function lastArrayElement<A = any> (values: A[]): A {
  return values[values.length - 1];
}

export function lastArrayIndex<A = any> (values: A[]): number {
  return values.length - 1;
}

export function asArray<A = any> (value: A|A[]): A[] {
  return Array.isArray(value) ? value : [value];
}

export function toArray<A = any> (value: A): A[] {
  return [value];
}

export function partitionArray (f: Function, arr: any[]) {
  return arr.reduce((a: any, x: any) => ((a[f(x) ? 0 : 1]).push(x), a), [[], []]);
}

export function partitionArrayAtIndex<A> (index: number, array: A[]): [A[], A[]] {
  const a: A[] = new Array<A>(index);
  const b: A[] = new Array<A>(array.length - index);
  writeArrayElements(array, a, 0, 0, index);
  writeArrayElements(array, b, index, 0, array.length - index);
  return [a, b];
}

export function removeFromUnsortedArray<A> (predicate: (a: A) => boolean, array: A[]): boolean {
  const lastIndex = array.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    if (predicate(array[i])) {
      if (i < lastIndex) {
        array[i] = array[lastIndex];
      }
      array.length = lastIndex;
      return true;
    }
  }
  return false;
}
