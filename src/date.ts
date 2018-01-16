import DateFns from 'date-fns';
import { curry2 } from './curry';

// @ts-ignore
import { CurriedFunction2 } from '@most/prelude';

export const formatDate = curry2(function formatDate (format: string, date: Date | number) {
  return DateFns.format(date, format);
});
