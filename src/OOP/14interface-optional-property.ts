// optional interface property

// Dalam TypeScript, optional property pada interface adalah properti yang tidak harus ada pada objek yang
// mengimplementasikan interface tersebut. Artinya, optional property dapat ada atau tidak ada pada objek tanpa
// menyebabkan kesalahan pada saat kompilasi.

interface Teacher {
  name: string;
  age: number;
  phone?: string;
}

let guru: Teacher = { name: "ruly", age: 34 };
