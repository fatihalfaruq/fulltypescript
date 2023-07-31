"use strict";
const person = { name: "John Doe", age: 30 };
console.log(person.name);
class Circle {
    constructor(radius) {
        this.pi = 3.14;
        this.radius = radius;
    }
    getArea() {
        return this.pi * this.radius * this.radius;
    }
    setPi(pi) {
    }
}
const circle = new Circle(5);
console.log(circle.getArea());
