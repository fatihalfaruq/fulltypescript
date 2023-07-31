//  GENERIC INTERFACE

// Interface generic dalam TypeScript memungkinkan Anda untuk mendefinisikan sebuah antarmuka (interface) yang dapat bekerja
// dengan berbagai tipe data secara fleksibel. Dengan menggunakan generic pada antarmuka, Anda dapat membuat kode yang lebih
// abstrak dan dapat digunakan kembali dengan berbagai jenis tipe data.

// Untuk mendefinisikan interface generic, Anda perlu menggunakan parameter tipe yang ditandai dengan tanda kurung sudut (<>).
// Parameter tipe ini berfungsi sebagai variabel tipe yang nantinya dapat digunakan dalam definisi properti dan metode di dalam
// antarmuka.

interface Generics<T> {
  propA: T;
}

function genericFunction<T>(value: T): Generics<T> {
  let data: Generics<T> = {
    propA: value,
  };
  return data;
}
console.log(genericFunction("string"));
console.log(genericFunction(12345));
console.log(genericFunction(true));
