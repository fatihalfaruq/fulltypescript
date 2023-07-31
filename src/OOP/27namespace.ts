// NAME SPACE

//  Dalam TypeScript, namespace adalah sebuah fitur yang memungkinkan Anda untuk mengorganisir kode Anda
//  menjadi kelompok logis yang terpisah dan mencegah konflik nama antar bagian kode. Secara sederhana,
//  namespace adalah wadah yang mengandung kumpulan definisi variabel, fungsi, dan kelas yang dapat dikelompokkan
//  bersama.

namespace contoh {
  export class Hewan {}
  export const kodok = new Hewan();
}
const belalang = new contoh.Hewan();
let kodok2 = contoh.kodok;
