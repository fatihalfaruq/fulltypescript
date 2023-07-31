// GENERIC

// generic memungkinkan Anda untuk menulis kode yang bekerja dengan berbagai tipe data secara aman dan
// fleksibel. Fitur ini memungkinkan Anda untuk membuat fungsi, kelas, dan antarmuka yang dapat digeneralisasi
// dan dapat digunakan dengan berbagai jenis tipe data tanpa kehilangan dukungan tipe statis.

// Untuk menggunakan generic pada TypeScript, Anda perlu menggunakan tanda kurung sudut (<>) dengan nama
// parameter tipe yang diinginkan di dalam tanda kurung sudut. Parameter tipe ini nantinya dapat digunakan
// dalam definisi fungsi, kelas, atau antarmuka sebagai tipe yang umum dan fleksibel.

// apa bedanya dengan any?kalau kita menggunakan any
// kita tidak dapat membaca tipe data yang sedang kita
// pakai,sehingga kita tidak bisa menggunakan fitur
// yang ada di tipe data tersebut,sedangkan ketika kita
// menggunakan generic kita bisa membaca tipe data yang
// sedang kita gunakan

function getData<T>(value: T) {
  return value;
}
const data = getData("aoaoao");
console.log(data.length);
