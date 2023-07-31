"use strict";
var string = "nama";
string = "43";
string = "apapapa";
console.log(string);
let number = 21;
number = 3;
var boolean = false;
boolean = false;
let bebas = "bebas";
bebas = 0;
bebas = [];
bebas = {};
bebas = false || "string" || 232 || [1, 2, "dsds"];
let array = ["string1", "string2", "string3"];
let array1 = [1, 2, 3, 4, 5];
let array2 = [true, false, true];
let array3 = [1, "string", true];
let array4 = [1, "string", true];
let angka2 = [10, 20, 30, 40, 50];
let user = {
    name: "John",
    age: 30,
    isActive: true,
};
console.log(user);
let user3 = {
    name: "tanpa tipe data object",
    age: 30,
    isActive: true,
};
console.log(user3.name);
var month;
(function (month) {
    month[month["jan"] = 1] = "jan";
    month[month["feb"] = 2] = "feb";
    month[month["mar"] = 3] = "mar";
})(month || (month = {}));
console.log(month.mar);
var month2;
(function (month2) {
    month2["jan"] = "aa";
    month2["feb"] = "fds";
    month2["mar"] = "fdsf";
})(month2 || (month2 = {}));
console.log(month2);
let phone;
phone = 424232424;
phone = "apapa";
