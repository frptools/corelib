"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const core_1 = require("./core");
const is_1 = require("./is");
function arraysEqual(arg0, arg1, arg2) {
    let eq, a, b;
    if (is_1.isFunction(arg0)) {
        switch (arguments.length) {
            case 1: return (a, b) => arraysEqual(arg0, a, b);
            case 2: return (b) => arraysEqual(arg0, arg1, b);
        }
        a = arg1;
        b = arg2;
        eq = arg0;
    }
    else {
        a = arg0;
        b = arg1;
        eq = core_1.equals;
    }
    if (a === b)
        return true;
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (!eq(a[i], b[i]))
            return false;
    }
    return true;
}
exports.arraysEqual = arraysEqual;
function arraysEqualStartCount(arg0, arg1, arg2) {
    let eq, a, b;
    if (is_1.isFunction(arg0)) {
        switch (arguments.length) {
            case 1: return (a, b) => arraysEqualStartCount(arg0, a, b);
            case 2: return (b) => arraysEqualStartCount(arg0, arg1, b);
        }
        a = arg1;
        b = arg2;
        eq = arg0;
    }
    else {
        a = arg0;
        b = arg1;
        eq = core_1.equals;
    }
    if (a === b)
        return true;
    const max = math_1.min(a.length, b.length);
    for (let i = 0; i < max; i++) {
        if (!eq(a[i], b[i]))
            return i;
    }
    return max;
}
exports.arraysEqualStartCount = arraysEqualStartCount;
function copyArrayShallow(values) {
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
exports.copyArrayShallow = copyArrayShallow;
function concatArray(left, right) {
    var arr = new Array(left.length + right.length);
    for (var i = 0; i < left.length; i++) {
        arr[i] = left[i];
    }
    for (var j = 0; j < right.length; i++, j++) {
        arr[i] = right[j];
    }
    return arr;
}
exports.concatArray = concatArray;
function withArrayIndexUpdated(index, value, array) {
    var length = array.length;
    var newArray = Array(length);
    for (var i = 0; i < length; ++i) {
        newArray[i] = array[i];
    }
    newArray[index] = value;
    return newArray;
}
exports.withArrayIndexUpdated = withArrayIndexUpdated;
function withArrayIndexRemoved(index, array) {
    var length = array.length;
    if (length === 0 || index >= length)
        return array;
    if (length === 1)
        return [];
    var newArray = Array(length - 1);
    for (var i = 0; i < index; ++i) {
        newArray[i] = array[i];
    }
    for (i = i + 1; i < length; ++i) {
        newArray[i - 1] = array[i];
    }
    return newArray;
}
exports.withArrayIndexRemoved = withArrayIndexRemoved;
function withArrayIndexInserted(index, value, array) {
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
exports.withArrayIndexInserted = withArrayIndexInserted;
function withArrayElementAppended(value, array) {
    const newArray = Array(array.length + 1);
    for (var i = 0; i < array.length; ++i) {
        newArray[i] = array[i];
    }
    newArray[array.length] = value;
    return newArray;
}
exports.withArrayElementAppended = withArrayElementAppended;
function withArrayElementPrepended(value, array) {
    const newArray = Array(array.length + 1);
    newArray[0] = value;
    for (var i = 0; i < array.length; ++i) {
        newArray[i + 1] = array[i];
    }
    return newArray;
}
exports.withArrayElementPrepended = withArrayElementPrepended;
function writeArrayElementsUsing(mapFn, sourceValues, targetValues, sourceIndex, targetIndex, count) {
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
exports.writeArrayElementsUsing = writeArrayElementsUsing;
function writeArrayElements(source, destination, sourceIndex, destinationIndex, count) {
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
exports.writeArrayElements = writeArrayElements;
function skipArrayStart(count, values) {
    var array = new Array(math_1.max(0, values.length - count));
    for (var i = 0, j = count; j < values.length; i++, j++) {
        array[i] = values[j];
    }
    return array;
}
exports.skipArrayStart = skipArrayStart;
function takeArrayStart(count, values) {
    const array = new Array(math_1.min(count, values.length));
    const length = array.length;
    for (let i = 0; i < length; i++) {
        array[i] = values[i];
    }
    return array;
}
exports.takeArrayStart = takeArrayStart;
function firstArrayElement(values) {
    return values[0];
}
exports.firstArrayElement = firstArrayElement;
function lastArrayElement(values) {
    return values[values.length - 1];
}
exports.lastArrayElement = lastArrayElement;
function lastArrayIndex(values) {
    return values.length - 1;
}
exports.lastArrayIndex = lastArrayIndex;
function asArray(value) {
    return Array.isArray(value) ? value : [value];
}
exports.asArray = asArray;
function toArray(value) {
    return [value];
}
exports.toArray = toArray;
function partitionArray(f, arr) {
    return arr.reduce((a, x) => ((a[f(x) ? 0 : 1]).push(x), a), [[], []]);
}
exports.partitionArray = partitionArray;
function partitionArrayAtIndex(index, array) {
    const a = new Array(index);
    const b = new Array(array.length - index);
    writeArrayElements(array, a, 0, 0, index);
    writeArrayElements(array, b, index, 0, array.length - index);
    return [a, b];
}
exports.partitionArrayAtIndex = partitionArrayAtIndex;
function removeFromUnsortedArray(predicate, array) {
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
exports.removeFromUnsortedArray = removeFromUnsortedArray;
//# sourceMappingURL=array.js.map