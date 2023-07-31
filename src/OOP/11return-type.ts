// RETURN TYPE

// Di TypeScript, return type adalah tipe data yang digunakan untuk menentukan tipe nilai yang akan
// dikembalikan oleh sebuah fungsi. Dengan menggunakan return type, Anda dapat menyatakan secara eksplisit
// tipe data yang diharapkan sebagai hasil dari eksekusi fungsi tersebut.

class Burung {
  private kaki: number = 0;
  getKaki(): number {
    return this.kaki;
  }
  terbang(): void {
    console.log("string");
  }
  async makan(): Promise<string> {
    return "string";
  }
}
