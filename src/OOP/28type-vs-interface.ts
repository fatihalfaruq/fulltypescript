// TYPE-VS-INTERFACE

// Deklarasi sintaksis:
// "type" digunakan untuk mendefinisikan alias untuk tipe data yang ada atau tipe data khusus yang kompleks.
// "interface" digunakan untuk mendefinisikan kontrak atau struktur yang harus dipenuhi oleh objek.

// Extensibility:
// "type" bersifat komposisi dan memungkinkan Anda untuk menggabungkan beberapa tipe menjadi satu tipe baru
// menggunakan union (&) atau intersection (|)."interface" bersifat ekstensibel, yang berarti Anda dapat
// menerapkan atau menggabungkan lebih banyak properti ke sebuah interface yang ada.

// Perilaku saat deklarasi dengan nama yang sama:
// Jika Anda mendefinisikan "type" dengan nama yang sama lebih dari satu kali, deklarasi tersebut akan digabungkan
// menjadi satu definisi tunggal.Jika Anda mendefinisikan "interface" dengan nama yang sama lebih dari satu kali,
// mereka akan saling melengkapi dan menggabungkan properti mereka.Kelebihan:

// Type:
// Lebih fleksibel dalam mendefinisikan jenis tipe data, termasuk union dan intersection.Mendukung union dan
// intersection membuatnya lebih mampu mengatasi skenario kompleks dengan tipe data yang bervariasi.

// Interface:
// Memiliki fitur ekstensibilitas yang memungkinkan Anda dengan mudah menambahkan properti baru ke dalam sebuah
// interface yang sudah ada.Lebih bersifat "idiomatik" dalam TypeScript karena fitur-fiturnya didesain khusus
// untuk mendefinisikan kontrak antara komponen.Pilihan antara "type" dan "interface" seringkali lebih merupakan
// masalah preferensi dan kasus penggunaan tertentu. Beberapa pengembang lebih suka menggunakan "type" karena
// fleksibilitasnya, sementara yang lain lebih suka menggunakan "interface" karena fitur-fiturnya yang lebih
// bersifat kontraktual dan dapat membantu menjaga konsistensi antara objek yang berbeda.

// Anda juga dapat menggunakan keduanya secara bersamaan untuk memaksimalkan manfaat dari masing-masing, karena
// keduanya dapat saling melengkapi dan digunakan untuk tujuan yang berbeda dalam kode TypeScript Anda.

////////////////////////////////////////////////////////////////////////////

// type bisa langsung dan bisa berbentik object,
// sedangkan interface hanya bisa berbentuk object.

type Phone = number;
type Pc = string;

type Child = {
  name: string;
};

interface Parent {
  now: number;
}

////////////////////////////////////////////////////////////////////////////

// interface bisa di merge sedangkan type tidak

interface Dinosaurus {
  nama: string;
}
interface Dinosaurus {
  umur: number;
}
class Brontosaurus implements Dinosaurus {
  nama: string = "";
  umur: number = 0;
}

////////////////////////////////////////////////////////////////////////////

// dengan interface kita bisa mengextend dan implements class dengan mudah,
// dengan interface kita bisa mengextend class sedangkan type tidak.

////////////////////////////////////////////////////////////////////////////

// type juga bisa digabung

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Employee1 = Name & Age;
type Employee2 = Name | Age;

const employee1: Employee1 = {
  name: "fatih",
  age: 17,
};

const employee2: Employee2 = {
  name: "fatih",
};
const employee2_02: Employee2 = {
  age: 17,
};

// kapan memakai interface?
// interface cocok di pakai pada class,utuk membuat object baru atau method dari sebuah object

// kapan kita memakai type?
// type cocok di pakai jika kita ingin membuat function atau variable
