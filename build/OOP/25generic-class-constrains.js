"use strict";
class carProduct {
    sell() {
        console.log("jual mobil");
    }
}
class motorProduct {
    sell() {
        console.log("jual motor");
    }
}
function sellProduct(product) {
    product.forEach((product) => product.sell());
}
const car = new carProduct();
const motor = new motorProduct();
sellProduct([car, motor]);
