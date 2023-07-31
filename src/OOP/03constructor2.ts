// memanfaat kan constructor untuk mengisi property

// ada beberapa cara penulisan

// cara penulisan 1

class Hewan4 {
  nama: string;
  kaki: number;
  mamalia: boolean;
  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
}
let hewan4 = new Hewan4("buaya", 4, true);
console.log(hewan4);

// cara penulisan hewan41

class Hewan41 {
  constructor(
    public nama: string,
    public kaki: number,
    public mamalia: boolean
  ) {}
}

let hewan41 = new Hewan41("buaya", 4, true);
console.log(hewan41);
