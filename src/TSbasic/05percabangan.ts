// if-else

// Pernyataan if-else dalam TypeScript, seperti dalam bahasa pemrograman lainnya, digunakan untuk mengambil
// keputusan berdasarkan kondisi tertentu. Ini memungkinkan Anda untuk menjalankan blok kode tertentu jika
// kondisi terpenuhi dan menjalankan blok kode lain jika kondisi tersebut tidak terpenuhi.

let question: any = prompt("kamu umur berapa?");
if (question <= 10) {
  document.write("<h2>anak-anak</h2>");
} else if (question <= 18) {
  document.write("<h2>remaja</h2>");
} else if (question <= 35) {
  document.write("<h2>dewasa</h2>");
} else if (question <= 65) {
  document.write("<h2>parubaya</h2>");
} else if (question <= 80) {
  document.write("<h2>tua</h2>");
} else document.write("gak terdaftar");
if (question >= 80) {
  document.write("<h2>meninggal</h2>");
}

///////////////////////////////////////////////////////////////////////////////////////////////////

let username1: any = prompt("masukan user name!");
let pasword1: any = prompt("masukan pasword");

if (username1 === "pondokit") {
  if (pasword1 === "santri") {
    document.write("selamat datang");
  } else {
    document.write("pasword salah");
  }
} else {
  document.write("anda tidak terdaftar");
}

// cara lebih simple dengan &&

let username: any = prompt("masukan user name!");
let pasword: any = prompt("masukan pasword");
if (username === null && pasword === null) {
  alert("harap isi");
} else if (username === "pondokit" && pasword === "santri1") {
  document.write("selamat datang");
} else {
  document.write("anda tidak terdaftar");
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// switch-case

// switch-case adalah konstruksi lain untuk mengambil keputusan berdasarkan beberapa kemungkinan nilai atau
// ekspresi. switch-case sering digunakan sebagai alternatif dari if-else ketika kita perlu melakukan berbagai
// pengecekan dengan nilai yang sama pada sebuah variabel.

let jawab: any = prompt(
  "selatmat anda mendapatkan hadiah silahkan pillih angka 1-5"
);
let hadiah: string = "";
switch (jawab) {
  case "1":
    hadiah = "umroh";
    alert("selamat anda  mendaatkan umroh");
    break;

  case "2":
    hadiah = "zonk";
    alert("maaf anda coba  lagi");
    break;

  case "3":
    hadiah = "coklat";
    alert("selamat anda menndapatkan coklat");
    break;

  case "4":
    hadiah = "kosong";
    alert("selamat anda gagal");
    break;

  case "5":
    hadiah = "supra";
    alert("selamat anda mendapatkan supra");
    break;
}
if (hadiah == "") {
  alert("anda gagal");
} else;

///////////////////////////////////////////////////////////////////////////////////////////////////

let nilai: any = prompt("Berapa nilai ujian anda?");
let grade: string = "";
let nilaiNumber: number = parseFloat(nilai); // Mengonversi nilai menjadi bilangan desimal

switch (true) {
  case nilaiNumber >= 90:
    grade = "Grade A";
    break;
  case nilaiNumber >= 80:
    grade = "Grade B";
    break;
  case nilaiNumber >= 70:
    grade = "Grade C";
    break;
  case nilaiNumber >= 60:
    grade = "Grade E";
    break;
  default:
    document.write(
      "Nilai tidak valid atau tidak termasuk dalam rentang grade."
    );
}

if (grade !== "") {
  document.write(grade);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

let menu: any = prompt("silahkan pilih menu,mie ayam,nasi padang,soto,sate");
let harga: string = "";
switch (menu) {
  case "mie ayam":
    harga = "12.000";
    break;

  case "nasi padang":
    harga = "13.000";
    break;

  case "soto":
    harga = "14.000";
    break;

  case "sate":
    harga = "15.000";
    break;
}
if (harga == "") {
  document.write("menu tidak tersedia");
} else {
  document.write("harga:" + harga);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
