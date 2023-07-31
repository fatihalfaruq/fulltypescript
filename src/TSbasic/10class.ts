/////////////////////////////////////////////////////////////////////////

// CLASS DASAR PADA TYPESCRIPT

// Class (kelas) dalam TypeScript adalah konsep yang digunakan untuk membuat objek
// dengan properti dan metode terkait. Class menyediakan sebuah blueprint atau cetak
// biru (blueprint/template) untuk membuat objek yang memiliki karakteristik yang sama.
// Class dapat menggambarkan entitas atau konsep nyata dalam program, seperti manusia, mobil,
// atau bahkan konsep yang lebih abstrak seperti pengguna atau pesanan.

export class User {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let user = new User("fatih");
console.log(user);

// cara penulisan lebih simple

export class User1 {
  constructor(public name: string) {}
}
let user1 = new User1("fatih");
console.log(user1);

// kegunaan export agar function bisa di import ke file lain

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut dan turunan nya
// hanya bisa di akses dari class itu sendiri

/////////////////////////////////////////////////////////////////////////

// INHERITANCE TYPESCRIPT

// Inheritance atau pewarisan dalam TypeScript adalah konsep yang memungkinkan sebuah
// class mewarisi properti dan metode dari class lain.Dalam pewarisan,class yang mewarisi
// disebut sebagai subclass atau child class,sedangkan class yang memberikan warisan disebut
// sebagai superclass atau parent class.

export class User2 {
  constructor(public name: string, public age: number) {}
  setName(value: string): void {
    this.name = value;
  }
  getName = (): string => {
    return this.name;
  };
}

class Admin extends User2 {
  read: boolean = true;
  write: boolean = true;
  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}
let admin1 = new Admin("FDSFD", 43);
admin1.getName();
admin1.getRole();
admin1.setName("dsds");
console.log(admin1);

/////////////////////////////////////////////////////////////////////////

// SUPER CONSTRUCTOR

// Superconstructor dalam TypeScript adalah konsep yang digunakan untuk memanggil
// constructor dari superclass saat membuat objek dari subclass. Superconstructor
// digunakan dalam konteks pewarisan, di mana subclass ingin menginisialisasi
// properti yang dimiliki oleh superclass.

// Dalam TypeScript, kita menggunakan kata kunci super untuk memanggil
// superconstructor. Hal ini dilakukan di dalam constructor subclass dan digunakan
// untuk meneruskan argumen yang diperlukan ke constructor superclass.

export class User3 {
  constructor(public name: string, public age: number) {}
  setName(value: string): void {
    this.name = value;
  }
  getName = (): string => {
    return this.name;
  };
}

class Admin1 extends User3 {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }
  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}
let admin = new Admin1("fatih", 17, "082124855384");
admin.getName();
admin.getRole();
admin.setName("dsds");
admin.phone;
console.log(admin);

/////////////////////////////////////////////////////////////////////////

//SETTER DAN GETTER

// Setter dan getter pada TypeScript adalah metode khusus yang digunakan untuk
// mengakses dan mengatur nilai properti dalam sebuah class. Mereka memberikan
// kontrol tambahan dalam proses pembacaan (get) dan penulisan (set) nilai properti,
// serta memungkinkan kita untuk melakukan validasi atau logika lain saat mengakses
// atau mengubah nilai.

// Penggunaan setter dan getter memungkinkan kita untuk mengabstraksi akses ke
// properti dan memberikan tindakan khusus saat nilai properti diakses atau diubah.

class bio {
  private _email: string = "";
  constructor(public hobi: string) {}
  set email(value: string) {
    if (value.length < 5) {
      this._email = "email salah";
    } else {
      this._email = value;
    }
  }
  get email(): string {
    return this._email;
  }
}
let Bio = new bio("nyanyi");
Bio.email = "fatih";
console.log(Bio.email);

/////////////////////////////////////////////////////////////////////////

// STATIC PROPERTIES DAN STATIC METHODS

// Static properties dan static methods dalam TypeScript adalah properti dan metode
// yang terkait dengan class itu sendiri, bukan dengan instance (objek) dari class
// tersebut. Properti static dapat diakses langsung dari class tanpa perlu membuat
// objek, sedangkan static methods dapat dipanggil langsung dari class tanpa perlu
// membuat instance.

// Penggunaan static properties dan static methods berguna ketika kita memiliki data
// atau logika yang terkait dengan class secara keseluruhan, bukan dengan setiap
// objek individu dari class tersebut.

class warna {
  public warna1: string;
  static getRolename: string = "ini output static property";
  static getNamerole() {
    return "ini output static method";
  }
  constructor(warna1: string) {
    this.warna1 = warna1;
  }
}

let color = warna.getRolename;
let color1 = warna.getNamerole();
console.log(color, color1);

/////////////////////////////////////////////////////////////////////////
