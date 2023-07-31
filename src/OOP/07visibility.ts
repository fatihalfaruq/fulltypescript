// Visibility pada TypeScript mengacu pada aksesibilitas atau hak akses dari properti (properties) dan
// method dalam sebuah class. Dalam TypeScript, Anda dapat mengatur visibility dari properti dan method
// menggunakan tiga katakunci yang berbeda: public, private, dan protected. Setiap kata kunci ini memiliki
// arti dan dampak yang berbedaterhadap cara properti dan method dapat diakses oleh kelas lain.

// Public: Ini adalah visibility default untuk properti dan method dalam TypeScript jika Anda tidak menentukan
// visibility secara eksplisit. Properti atau method dengan visibility public dapat diakses dari dalam kelas itu
// sendiri, dari subclass (jika ada), dan juga dari luar kelas, termasuk dari luar objek kelas tersebut.

// Private: Properti atau method dengan visibility private hanya dapat diakses dari dalam kelas itu sendiri.
// Maksudnyaadalah tidak bisa diakses dari luar kelas atau subclass-nya. Private digunakan untuk menyembunyikan
// implementasiinternal kelas dan mencegah akses langsung dari luar.

// Protected: Properti atau method dengan visibility protected dapat diakses dari dalam kelas itu sendiri dan juga
// dari subclass-nya. Namun, properti atau method protected tidak dapat diakses dari luar kelas atau instance-nya.

class Hewan8 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;
  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
}
class Katak8 extends Hewan8 {
  private umurTelur: number = 1;
  private umurKecebong: number = 2;
  private umurKatak: number = 3;
  getUmur() {
    console.log(this.umurKatak + this.umurKecebong + this.umurTelur);
  }
}

let kodok8 = new Katak8("jincuriki", 3, false);
console.log(kodok8);
kodok8.getUmur();
