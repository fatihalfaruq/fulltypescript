"use strict";
function myData(value) {
    return value;
}
console.log(myData("naifah").length);
console.log(myData(123));
const arrowFunct = (value) => {
    return value;
};
console.log(arrowFunct("fatih").length);
console.log(arrowFunct(true));
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(elements) {
        this.data.push(elements);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let number22 = new List(1, 2, 3);
number22.add(4);
number22.addMultiple(6, 7);
console.log(number22.getAll());
let random = new List(1, "dua");
random.add(3);
random.addMultiple("empat", 5);
console.log(random.getAll());
