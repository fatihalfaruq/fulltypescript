"use strict";
class GenericsClass {
    constructor(prop) {
        this.propA = prop;
    }
    methodA() {
        return this.propA;
    }
}
const genericClassA = new GenericsClass("string");
console.log(genericClassA.methodA());
