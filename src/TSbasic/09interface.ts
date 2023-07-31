//INTERFACE

// Interface pada TypeScript adalah sebuah kontrak atau blueprint yang mendefinisikan struktur
// dan tipe data dari sebuah objek. Interface digunakan untuk menentukan persyaratan atau karakteristik
// yang harus dipenuhi oleh objek yang ingin mengimplementasikan interface tersebut.

// Dengan menggunakan interface, kita dapat mendefinisikan properti, metode, dan tipe data yang harus ada
// pada objek. Interface berfungsi sebagai aturan yang harus diikuti oleh class atau objek tertentu untuk
// memastikan keseragaman dan konsistensi dalam kode program.

interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("nyala");
  }

  off(): void {
    console.log("mati");
  }
}

class Macbook implements Laptop {
  name: string;
  keyboadLight: boolean;
  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboadLight = keyboardLight;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let asus = new Asus("fatih", true);
let macbook = new Macbook("fatih", true);
console.log(macbook);
console.log(macbook.on());

console.log(asus);
console.log(asus.off());
