"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numericCompare = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
};
exports.stringCompare = function (a, b) {
    return a.localeCompare(b);
};
//# sourceMappingURL=compare.js.map