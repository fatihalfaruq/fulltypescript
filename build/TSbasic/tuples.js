"use strict";
let myTuple;
myTuple = ["Hello", 10, true, 43];
console.log(myTuple[0]);
console.log(myTuple[1]);
console.log(myTuple[2]);
myTuple[0] = "string";
console.log(myTuple);
let [a, b, c, d] = myTuple;
console.log(a, b, c, d);