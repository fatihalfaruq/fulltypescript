// Dependency Injection (DI) dalam TypeScript adalah sebuah teknik di mana dependensi (dependencies) suatu
// kelas disediakan dan diinjeksikan ke dalam kelas tersebut dari luar, daripada kelas tersebut membuat
// dependensinya sendiri secara langsung. Ini memungkinkan kelas untuk menjadi lebih independen dan fleksibel,
// karena kelas tidak perlu tahu bagaimana cara membuat atau mendapatkan dependensinya.

// DI dalam TypeScript biasanya diimplementasikan melalui Constructor Injection, di mana dependensi disediakan
// melalui parameter konstruktor saat objek dibuat.

interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = "toko lama";
  profit: number = 100;
  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = "toko baru";
  profit: number = 2500;
  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  private store: IStore;
  private name: string;
  private price: number;
  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }
  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

class FoodProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }
  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const tokolama = new TokoLama();
const tokobaru = new TokoBaru();

const hijabmahal1 = new HijabProduct(tokolama, "hijab1", 100000);
const hijabmahal2 = new HijabProduct(tokobaru, "hijab1", 200000);

console.log(hijabmahal1);
console.log(hijabmahal2);

hijabmahal1.sell();
hijabmahal2.sell();
