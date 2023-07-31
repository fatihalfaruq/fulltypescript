/////////////////////////////////////////////////////////////////////////

// Abstract class (class abstrak) dalam TypeScript adalah class yang tidak dapat diinstansiasi
// secara langsung, tetapi digunakan sebagai blueprints atau cetak biru untuk subclass yang akan
// mewarisi properti dan metode dari class abstrak tersebut. Class abstrak berfungsi sebagai kerangka
// kerja untuk subclass yang lebih spesifik.

// Dalam abstract class, kita dapat mendefinisikan properti, metode, dan bahkan abstract method. Abstract
// method adalah metode yang tidak memiliki implementasi dalam class abstrak, tetapi harus diimplementasikan
// dalam subclass yang mewarisi dari class abstrak tersebut.

abstract class vehicle {
  abstract wheels: number;
  start(): void {
    console.log("bruuummmm");
  }
}

class Car extends vehicle {
  wheels: number = 4;
}

let car1 = new Car();
car1.start();
console.log(car1.wheels);

class Motorcycle extends vehicle {
  wheels: number = 2;
}
let motorcycle = new Motorcycle();
motorcycle.start();
console.log(motorcycle.wheels);

/////////////////////////////////////////////////////////////////////////
