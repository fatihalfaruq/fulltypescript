//GENERIC CLASS CONSTRAINS

// Generic class constraints adalah fitur dalam TypeScript yang memungkinkan Anda untuk memberlakukan pembatasan
// pada jenis tipe data yang dapat digunakan sebagai parameter tipe dalam generic class. Dengan menggunakan generic
// class constraints, Anda dapat menentukan persyaratan khusus yang harus dipenuhi oleh tipe generik untuk dapat
// digunakan dalam kelas tersebut.

// Sintaks untuk menerapkan generic class constraints dalam TypeScript adalah dengan menggunakan kata kunci extends
// setelah deklarasi parameter tipe. Ini memberitahu TypeScript bahwa tipe generik harus memenuhi batasan yang
// ditentukan.

interface Product {
  sell(): void;
}

class carProduct implements Product {
  sell(): void {
    console.log("jual mobil");
  }
}

class motorProduct implements Product {
  sell(): void {
    console.log("jual motor");
  }
}
function sellProduct<T extends Product>(product: T[]): void {
  product.forEach((product) => product.sell());
}
const car = new carProduct();
const motor = new motorProduct();
sellProduct([car, motor]);
