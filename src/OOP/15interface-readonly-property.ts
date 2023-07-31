// READONLY INTERFACE PROPERTY

// Dalam TypeScript, interface readonly adalah cara untuk mendeklarasikan bahwa properti pada suatu interface
// hanya dapat dibaca (read-only), artinya nilai dari properti tersebut tidak dapat diubah setelah diinisialisasi.

// Anda mendefinisikan interface readonly dengan menambahkan kata kunci readonly sebelum nama properti pada
// interface. Ini memberi tahu TypeScript bahwa properti tersebut hanya dapat dibaca dan tidak dapat diubah nilainya
// setelah objek dibuat.

interface Sekolah {
  namaSekolah: string;
  readonly jumlahGuru: number;
  readonly totalMurid: number;
}
let sekolah: Sekolah = { namaSekolah: "iwan", jumlahGuru: 8, totalMurid: 200 };
sekolah.namaSekolah = "azzaytun";
// sekolah.jumlahGuru = 6; // <== == ini akan error karna readonly property tidak dapat dirubah
console.log(sekolah);
