"use strict";
function genericFunction(value) {
    let data = {
        propA: value,
    };
    return data;
}
console.log(genericFunction("string"));
console.log(genericFunction(12345));
console.log(genericFunction(true));
