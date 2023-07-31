// pengulangan dengan for

// Dalam TypeScript, Anda dapat menggunakan struktur pengulangan for untuk melakukan iterasi atau perulangan
// pada suatu rangkaian nilai atau elemen. Pengulangan for memiliki sintaks yang mirip dengan bahasa pemrograman
// JavaScript, namun dengan tambahan fitur tipe yang ditawarkan oleh TypeScript.

// Contoh 1: Perulangan bilangan dari 1 hingga 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5

// Contoh 2: Perulangan array
const fruits: string[] = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: Apple Banana Orange

// contoh lain

let makanan2 = ["magelangan", "soto", "nasipadang", "bakso"];
for (let i = 0; i < makanan2.length; i++) {
  document.write(i + ". " + makanan2[i] + "<br>");
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// membuat bintang dengan for

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (
      y == 0 ||
      y == 10 ||
      x == 0 ||
      x == 10 ||
      y == x ||
      x + y == 10 ||
      x == 5 ||
      y == 5
    )
      document.write(" * ");
    else document.write(" _ ");
  }
  document.write("<br>");
}
document.write("<br>");

// out put

// * * * * * * * * * * *
// * * _ _ _ * _ _ _ * *
// * _ * _ _ * _ _ * _ *
// * _ _ * _ * _ * _ _ *
// * _ _ _ * * * _ _ _ *
// * * * * * * * * * * *
// * _ _ _ * * * _ _ _ *
// * _ _ * _ * _ * _ _ *
// * _ * _ _ * _ _ * _ *
// * * _ _ _ * _ _ _ * *
// * * * * * * * * * * *

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y + x == 5 || x + y == 15 || x - y == 5 || -x - -y == 5)
      document.write(" * ");
    else document.write(" _ ");
  }
  document.write("<br>");
}
document.write("<br>");

// output
// _ _ _ _ _ * _ _ _ _ _
// _ _ _ _ * _ * _ _ _ _
// _ _ _ * _ _ _ * _ _ _
// _ _ * _ _ _ _ _ * _ _
// _ * _ _ _ _ _ _ _ * _
// * _ _ _ _ _ _ _ _ _ *
// _ * _ _ _ _ _ _ _ * _
// _ _ * _ _ _ _ _ * _ _
// _ _ _ * _ _ _ * _ _ _
// _ _ _ _ * _ * _ _ _ _
// _ _ _ _ _ * _ _ _ _ _

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y <= x) document.write(" * ");
    else document.write(" _ ");
  }
  document.write("<br>");
}
document.write("<br>");

// output

// * * * * * * * * * * *
// _ * * * * * * * * * *
// _ _ * * * * * * * * *
// _ _ _ * * * * * * * *
// _ _ _ _ * * * * * * *
// _ _ _ _ _ * * * * * *
// _ _ _ _ _ _ * * * * *
// _ _ _ _ _ _ _ * * * *
// _ _ _ _ _ _ _ _ * * *
// _ _ _ _ _ _ _ _ _ * *
// _ _ _ _ _ _ _ _ _ _ *

document.write("<br>");
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    if (j + i <= 10 || i <= j) {
      document.write(" * ");
    } else {
      document.write(" _ ");
    }
  }
  document.write("<br>");
}

// output

// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * _ * * * * *
// * * * * _ _ _ * * * *
// * * * _ _ _ _ _ * * *
// * * _ _ _ _ _ _ _ * *
// * _ _ _ _ _ _ _ _ _ *

//////////////////////////////////////////////////////////////////////////////////////

// pengulangan do dan while

// Pengulangan do-while adalah bentuk pengulangan yang memastikan bahwa blok kode akan dijalankan setidaknya
// satu kali, bahkan jika kondisi yang diberikan tidak memenuhi untuk melakukan pengulangan lebih lanjut.

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 1 2 3 4 5

// method confirm

// Fungsi confirm() adalah fungsi bawaan dari JavaScript yang dapat digunakan untuk menampilkan dialog
// konfirmasi pada browser. Dialog ini berisi pesan dan dua tombol, yaitu "OK" dan "Batal".

const tekan: boolean = confirm("Apakah Anda yakin ingin melanjutkan?");
if (tekan) {
  console.log("Anda telah menekan tombol OK.");
} else {
  console.log("Anda telah menekan tombol Batal.");
}

// penggunaan

let p = 5;
let ulang = confirm("Apakah anda ingin mengulangi-nya?");
while (ulang) {
  ulang = confirm("Apakah anda ingin mengulangi-nya?");
  p++;
}
document.write("Jumlah mengulang " + x + " kali");
let counter = 1;
do {
  document.write("Perulangan ke-" + counter + "<br>");
  counter++;
} while (confirm("Apakah Anda ingin melanjutkan perulangan?"));
document.write("ulang <br>".repeat(100));
