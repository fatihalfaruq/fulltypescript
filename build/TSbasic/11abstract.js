"use strict";
class vehicle {
    start() {
        console.log("bruuummmm");
    }
}
class Car extends vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car1 = new Car();
car1.start();
console.log(car1.wheels);
class Motorcycle extends vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let motorcycle = new Motorcycle();
motorcycle.start();
console.log(motorcycle.wheels);
