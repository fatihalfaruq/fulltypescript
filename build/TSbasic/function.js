"use strict";
function getName() {
    return " ada return di sini ";
}
console.log(getName());
function getAge() {
    return 2023;
}
console.log(getAge());
function salken(name) {
    return `Hello, ${name}!`;
}
const name2 = "John";
console.log(salken(name2));
const greetingMessage = salken(name2);
alert(greetingMessage);
function myFunction() {
    alert("Hello, world!");
}
myFunction();
let fungsi = () => console.log("ini arrow function");
fungsi();
let pungsi = function (a, b) {
    return a + b;
};
console.log(pungsi(10, 5));
function printName() {
    console.log("print di sini");
}
printName();
function multiplay(val1, val2) {
    return val1 * val2;
}
const result = multiplay(5, 5);
console.log(result);
const Add = (val1, val2) => {
    return val1 * val2;
};
const hasil = Add(2, 5);
console.log(hasil);
const fullName = (first, last = "fdfdfd") => {
    return last + "" + first;
};
console.log(fullName("hamdan"));
const getUmur = (val1, val2) => {
    return val1 + "" + val2;
};
console.log(getUmur(2, 32));
