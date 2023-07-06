"use strict";
function toString(inputData) {
    try {
        return JSON.stringify(inputData);
    }
    catch (_a) {
        return undefined;
    }
}
console.log(JSON.stringify(null));
