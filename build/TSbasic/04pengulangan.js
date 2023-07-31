"use strict";
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
const fruits = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let makanan2 = ["magelangan", "soto", "nasipadang", "bakso"];
for (let i = 0; i < makanan2.length; i++) {
    document.write(i + ". " + makanan2[i] + "<br>");
}
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (y == 0 ||
            y == 10 ||
            x == 0 ||
            x == 10 ||
            y == x ||
            x + y == 10 ||
            x == 5 ||
            y == 5)
            document.write(" * ");
        else
            document.write(" _ ");
    }
    document.write("<br>");
}
document.write("<br>");
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (y + x == 5 || x + y == 15 || x - y == 5 || -x - -y == 5)
            document.write(" * ");
        else
            document.write(" _ ");
    }
    document.write("<br>");
}
document.write("<br>");
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (y <= x)
            document.write(" * ");
        else
            document.write(" _ ");
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if (j + i <= 10 || i <= j) {
            document.write(" * ");
        }
        else {
            document.write(" _ ");
        }
    }
    document.write("<br>");
}
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
const tekan = confirm("Apakah Anda yakin ingin melanjutkan?");
if (tekan) {
    console.log("Anda telah menekan tombol OK.");
}
else {
    console.log("Anda telah menekan tombol Batal.");
}
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
