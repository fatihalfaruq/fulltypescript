"use strict";
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
function exampleLet() {
    if (true) {
        let y = 20;
    }
}
const PI = 3.14;
let globalVar = 100;
function exampleGlobal() {
    console.log(globalVar);
}
const [a1, b2] = [1, 2];
console.log(a1);
console.log(b2);
const { firstName, lastName } = { firstName: "John", lastName: "Doe" };
console.log(firstName);
console.log(lastName);
let tupleExample = ["hello", 42];
console.log(tupleExample[0]);
console.log(tupleExample[1]);
