// array tuple/tuples

// Dalam TypeScript, tuple adalah tipe data yang memungkinkan kita untuk menyimpan
// kumpulan nilai dengan tipe data yang berbeda dalam urutan yang tetap. Sama seperti
// array, kita dapat menggunakan indeks untuk mengakses elemen-elemen tuple. Namun,
// perbedaan utama antara tuple dan array adalah bahwa tuple memiliki tipe data yang
// tetap untuk setiap elemen dalam urutan tertentu.

// Deklarasi tuple
let myTuple: [string, number, boolean, number];
myTuple = ["Hello", 10, true, 43]; // Assigning values to the tuple

// Mengakses elemen dalam tuple
console.log(myTuple[0]); // Output: Hello
console.log(myTuple[1]); // Output: 10
console.log(myTuple[2]); // Output: true

// Mengubah elemen dalam tuple
myTuple[0] = "string";
console.log(myTuple); // Output: ["Hi", 10, true]

// Destructuring tuple
let [a, b, c, d] = myTuple;
console.log(a, b, c, d); // Output: Hi 10 true

///////////////////////////////////////////////////////////////////////////
