//GENERIC CLASS

// Generic class adalah kelas dalam TypeScript yang menggunakan parameter tipe untuk menciptakan kelas yang
// dapat bekerja dengan berbagai jenis data. Dengan menggunakan generic class, Anda dapat menulis kode yang
// dapat digunakan kembali untuk berbagai tipe data tanpa harus menulis ulang kelas yang sama dengan tipe yang
// berbeda.

// Pada generic class, parameter tipe didefinisikan dengan menambahkan tipe parameter dalam tanda kurung
// siku (< >) setelah nama kelas. Tipe parameter ini berperan sebagai tipe generik yang akan digantikan dengan
// tipe yang sebenarnya ketika Anda membuat instance dari kelas tersebut.

interface generic3<T> {
  propA: T;
  methodA(): T;
}

class GenericsClass<T> implements generic3<T> {
  propA: T;
  constructor(prop: T) {
    this.propA = prop;
  }
  methodA(): T {
    return this.propA;
  }
}

const genericClassA = new GenericsClass("string");
console.log(genericClassA.methodA());
