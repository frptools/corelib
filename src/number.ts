export function formatDecimalPlaces (places: number, n: number) {
  let s = String(n);
  const i = s.indexOf('.');
  const dec = i === -1 ? 0 : s.length - i - 1;
  if (dec === 0) s += '.';
  if (dec < places) s += ''.padEnd(places - dec, '0');
  else if (dec > places) s = s.substr(0, s.length + places - dec);
  return s;
}