// Getter dan setter adalah metode khusus yang digunakan dalam bahasa pemrograman untuk mengakses dan mengubah
// nilai dari suatu properti atau atribut dalam sebuah objek. Dalam konteks TypeScript atau JavaScript, getter
// dan setter memungkinkan Anda untuk mengontrol akses dan manipulasi nilai dari suatu properti, sehingga Anda
// dapat memastikan bahwa nilai yang diperoleh atau disimpan melalui properti tersebut memenuhi kriteria tertentu.

// Getter:
// Getter adalah metode yang digunakan untuk mengakses nilai suatu properti. Untuk mendefinisikan getter pada
// sebuah objek di TypeScript, Anda menggunakan kata kunci get, diikuti dengan nama metode (tanpa menggunakan
//     tanda kurung).

// Setter:
// Setter adalah metode yang digunakan untuk mengubah nilai suatu properti. Untuk mendefinisikan setter pada
// sebuah objek di TypeScript, Anda menggunakan kata kunci set, diikuti dengan nama metode (tanpa menggunakan
//     tanda kurung) dan parameter yang akan digunakan untuk mengatur nilai baru.

class ProductA {
  private price: number = 0;
  private discount: number = 0.05;

  set Price(value: number) {
    this.price = value - value * this.discount;
  }

  get Price() {
    return this.price;
  }
}

const productA = new ProductA();
productA.Price = 2000;
console.log(productA.Price);
