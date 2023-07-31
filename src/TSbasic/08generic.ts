//GENERIC

// Generics adalah fitur dalam TypeScript (dan juga banyak bahasa pemrograman lainnya) yang memungkinkan kita
// untuk menciptakan komponen yang fleksibel dan dapat digunakan dengan berbagai jenis tipe data. Dengan
// menggunakan generics, kita dapat menulis kode yang dapat bekerja dengan berbagai tipe data tanpa harus
// menentukan tipe data secara eksplisit.

// Generics memungkinkan kita untuk menciptakan fungsi, class, dan bahkan interface yang dapat menerima tipe data
// sebagai parameter, sehingga memungkinkan kita untuk membuat kode yang dapat digunakan ulang dan lebih abstrak.

// pada function

// <T> = nilai generic,sebenernya T itu bisa kita ganti dengan apa saja,tapi kebanyakan orang sudah
// menjadikan T sebagai sibol dari generic

function myData<T>(value: T) {
  return value;
}

console.log(myData("naifah").length);
console.log(myData(123));

const arrowFunct = <T>(value: T) => {
  return value;
};

console.log(arrowFunct("fatih").length);
console.log(arrowFunct(true));

// pada class

class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }
  add(elements: T): void {
    this.data.push(elements);
  }
  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }
  getAll(): T[] {
    return this.data;
  }
}
let number22 = new List<number>(1, 2, 3);
number22.add(4);
number22.addMultiple(6, 7);
console.log(number22.getAll());

let random = new List<number | string>(1, "dua");
random.add(3);
random.addMultiple("empat", 5);
console.log(random.getAll());
