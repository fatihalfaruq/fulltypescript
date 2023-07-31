// READOLNY-MODIFIER

// Di TypeScript, readonly adalah sebuah modifier yang digunakan untuk menentukan bahwa suatu properti pada sebuah
// objek atau anggota dari suatu kelas hanya dapat dibaca (read-only), dan tidak dapat diubah (immutable). Saat
// properti atau anggota diberi modifier readonly, hal ini berarti nilainya hanya bisa diinisialisasi sekali, entah
// itu saat deklarasi atau di dalam konstruktor, dan setelahnya nilainya tidak dapat diu

interface Person {
  readonly name: string;
  readonly age: number;
}

const person: Person = { name: "John Doe", age: 30 };

console.log(person.name); // Output: "John Doe"

// Kode berikut akan menghasilkan error karena kita mencoba mengubah properti yang bersifat readonly
// person.name = "Jane Smith"; // Error: Cannot assign to 'name' because it is a read-only property

class Circle {
  readonly pi: number = 3.14;
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return this.pi * this.radius * this.radius;
  }

  // Kode berikut akan menghasilkan error karena kita mencoba mengubah properti yang bersifat readonly
  setPi(pi: number) {
    // this.pi = pi; // Error: Cannot assign to 'pi' because it is a read-only property
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // Output: 78.5

// variable const juga tidak dapat di ubah
// perbedaan nya dengan const adalah kalo const hanya bisa di gunakan pada variabel biasa
// sedangkan readonly khusus digunakan pada variable dalam class(property).
