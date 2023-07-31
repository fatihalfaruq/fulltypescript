// GENERIC CONSTRAINS

// Generic constraints (pembatasan generic) adalah fitur dalam TypeScript yang memungkinkan Anda untuk membatasi
// jenis tipe data yang dapat digunakan sebagai parameter tipe dalam fungsi atau kelas generik. Dengan menggunakan
// generic constraints, Anda dapat menetapkan persyaratan pada parameter tipe sehingga hanya tipe yang sesuai dengan
// persyaratan tersebut yang dapat digunakan.

// Sintaks untuk menerapkan generic constraints dalam TypeScript adalah dengan menggunakan kata kunci extends setelah
// deklarasi parameter tipe. Ini memberitahu TypeScript bahwa tipe generik harus memenuhi batasan yang ditentukan.

interface Length {
  length: number;
}
function Generics<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const generics = Generics("rapapapa");
console.log(generics);
const generic2 = Generics({ length: 10, value: 200 });
