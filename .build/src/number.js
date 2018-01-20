"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatDecimalPlaces(places, n) {
    let s = String(n);
    const i = s.indexOf('.');
    const dec = i === -1 ? 0 : s.length - i - 1;
    if (dec === 0)
        s += '.';
    if (dec < places)
        s += ''.padEnd(places - dec, '0');
    else if (dec > places)
        s = s.substr(0, s.length + places - dec);
    return s;
}
exports.formatDecimalPlaces = formatDecimalPlaces;
//# sourceMappingURL=number.js.map