// INTERFACE EXTENDS CLASS

// Interface extends class adalah fitur di TypeScript yang memungkinkan Anda untuk membuat interface baru yang
// mengambil properti dan metode dari suatu kelas (class). Dengan kata lain, Anda dapat mewarisi struktur kelas
// ke dalam sebuah interface.

class Animal {
  constructor(public nama: string) {}
}
interface IShark extends Animal {
  swimming(): void;
}
class shark implements IShark {
  nama: string = "hiu";
  swimming(): void {
    console.log("aku bisa berenang");
  }
}
let hiu = new shark();
console.log(hiu.swimming());
