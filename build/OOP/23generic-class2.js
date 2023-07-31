"use strict";
class ClassA {
    constructor() {
        this.name = "classAnjing";
    }
}
class ClassBaru {
    constructor(clasprop) {
        this.clasprop = clasprop;
    }
}
const clasA = new ClassA();
const classBaru = new ClassBaru(ClassA);
console.log(classBaru);
