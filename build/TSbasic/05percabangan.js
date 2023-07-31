"use strict";
let menu = prompt("silahkan pilih menu,mie ayam,nasi padang,soto,sate");
let harga = "";
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
}
else {
    document.write("harga:" + harga);
}
