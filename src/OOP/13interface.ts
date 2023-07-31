// Di TypeScript, sebuah interface adalah sebuah kontrak atau perjanjian (contract) yang mendefinisikan
// sebuah tipe data, berupa struktur objek atau kontrak untuk implementasi suatu kelas. Dengan menggunakan
// interface, Anda dapat mendeklarasikan tipe data untuk properti, metode, atau kombinasi keduanya yang harus
// ada pada suatu objek atau kelas.

// Pikirkan interface seperti perjanjian atau kontrak yang harus diikuti oleh objek atau kelas tertentu.
// Interface memberi tahu TypeScript tentang tipe data yang diharapkan dari suatu objek atau kelas.

interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log("menu tapped");
  }
  home(): void {
    console.log("home tapped");
  }
  back(): void {
    console.log("back tapped");
  }
}
class Assus implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log("menu tapped");
  }
  home(): void {
    console.log("home tapped");
  }
  back(): void {
    console.log("back tapped");
  }
}

class GameA {
  private phone: AndroidPhone;
  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }
  back() {
    console.log("kembali ke menu utama di game");
  }
  menu() {
    this.phone.menu();
  }
  home() {
    this.phone.home();
  }
}
const samsung = new Samsung("Tipe A");

const game = new GameA(samsung);
game.home();
game.back();
game.menu();

interface ApplePhone {
  home(): void;
}

class IPhone implements ApplePhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  home(): void {
    console.log("muncul global");
  }
}

const iphone = new IPhone("ipong");
// const game2 = new GameA(iphone) // <=== ini bakal error karna game ini buat android bukan iphone
