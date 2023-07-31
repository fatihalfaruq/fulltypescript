// method array

// Method Array adalah sekelompok fungsi atau metode bawaan (built-in) yang telah disediakan oleh objek Array
// di JavaScript dan TypeScript. Metode-metode ini memungkinkan Anda untuk melakukan berbagai operasi dan
// manipulasi data pada array dengan cara yang lebih mudah dan efisien.

// Objek Array pada JavaScript adalah tipe data yang digunakan untuk menyimpan kumpulan elemen atau nilai.
// Misalnya, [1, 2, 3] adalah sebuah array yang berisi tiga elemen angka. Metode-metode array memungkinkan
// Anda untuk melakukan pengulangan, penambahan, penghapusan, pencarian, transformasi, dan banyak lagi operasi
// lainnya pada elemen-elemen dalam array.

// macam macam method:

// Berikut adalah beberapa contoh metode array yang sering digunakan:

// concat()

let buah: any[] = ["mangga", "apel", "jambu"];
let tahun: any[] = [2022, 2023, 2024];
let gabung1 = buah.concat(tahun);
console.log(gabung1);

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode push() dan pop():

const fruits2: string[] = ["Apple", "Banana", "Orange"];

// Menggunakan push() untuk menambahkan elemen baru ke akhir array
fruits.push("Mango");
console.log(fruits2); // Output: ["Apple", "Banana", "Orange", "Mango"]

// Menggunakan pop() untuk menghapus dan mengembalikan elemen terakhir dari array
const removedFruit = fruits.pop();
console.log(removedFruit); // Output: "Mango"
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode shift() dan unshift():

const numbers: number[] = [2, 3, 4, 5];

// Menggunakan unshift() untuk menambahkan elemen baru ke awal array
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Menggunakan shift() untuk menghapus dan mengembalikan elemen pertama dari array
const removedNumber = numbers.shift();
console.log(removedNumber); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode splice():

const colors: string[] = ["Red", "Green", "Blue", "Yellow"];

// Menggunakan splice() untuk mengganti elemen pada indeks tertentu
colors.splice(1, 1, "Purple");
console.log(colors); // Output: ["Red", "Purple", "Blue", "Yellow"]

// Menggunakan splice() untuk menambahkan elemen baru pada indeks tertentu
colors.splice(2, 0, "Orange", "Pink");
console.log(colors); // Output: ["Red", "Purple", "Orange", "Pink", "Blue", "Yellow"]

// Menggunakan splice() untuk menghapus elemen pada indeks tertentu
colors.splice(3, 2);
console.log(colors); // Output: ["Red", "Purple", "Orange", "Yellow"]

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode forEach():

const numbers2: number[] = [1, 2, 3, 4, 5];

// Menggunakan forEach() untuk melakukan pengulangan dan mencetak setiap elemen
numbers2.forEach((value) => {
  console.log(value);
});
// Output: 1 2 3 4 5

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode map():

const numbers3: number[] = [1, 2, 3, 4, 5];

// Menggunakan map() untuk menggandakan setiap elemen
const doubledNumbers = numbers3.map((value) => value * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode filter():

const numbers4: number[] = [1, 2, 3, 4, 5];

// Menggunakan filter() untuk mendapatkan angka genap
const evenNumbers = numbers4.filter((value) => value % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode find():

const fruits3: string[] = ["Apple", "Banana", "Orange"];

// Menggunakan find() untuk mencari "Banana" dalam array
const foundFruit = fruits3.find((fruit) => fruit === "Banana");
console.log(foundFruit); // Output: "Banana"

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode indexOf() dan includes():
const colors5: string[] = ["Merah", "Hijau", "Biru"];

// Menggunakan indexOf() untuk mencari indeks "Hijau" dalam array
const indexOfHijau = colors.indexOf("Hijau");
console.log(indexOfHijau); // Output: 1

// Menggunakan includes() untuk memeriksa apakah array berisi "Kuning"
const hasKuning = colors5.includes("Kuning");
console.log(hasKuning); // Output: false

///////////////////////////////////////////////////////////////////////////////////////////////////

// Metode reduce():

const numbers5: number[] = [1, 2, 3, 4, 5];

// Menggunakan reduce() untuk menjumlahkan semua elemen dalam array
const sum = numbers5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
