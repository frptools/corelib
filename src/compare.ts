import { ComparatorFn } from './types';

export const numericCompare: ComparatorFn<number> = function (a: number, b: number): number {
  return a < b ? -1 : a > b ? 1 : 0;
};

export const stringCompare: ComparatorFn<string> = function (a: string, b: string): number {
  return a.localeCompare(b);
};
