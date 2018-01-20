"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const curry_1 = require("./curry");
exports.formatDate = curry_1.curry2(function formatDate(format, date) {
    return date_fns_1.default.format(date, format);
});
//# sourceMappingURL=date.js.map