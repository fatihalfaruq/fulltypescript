//GENERIC TYPES

// Generic types dalam TypeScript memungkinkan Anda membuat fungsi, kelas, dan tipe data yang dapat beradaptasi
// dengan berbagai jenis data tanpa harus menulis ulang kode yang sama. Untuk menggunakan generic types, Anda
// perlu menentukan parameter tipe dalam tanda kurung siku < > dan menyematkannya ke fungsi atau kelas. Parameter
// tipe ini akan menjadi tipe generik yang dapat digunakan untuk menerima berbagai tipe data saat fungsi atau
// kelas dipanggil.

type Generics2<T> = T;
function genericFunction2<T>(value: T): Generics2<T> {
  return value;
}
console.log(genericFunction2("apa"));
