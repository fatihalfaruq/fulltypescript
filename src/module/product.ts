import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus(2001, true, true);
console.log(asus);
asus.a();
asus.b();

let macbook = new Macbook(2012, false, false);
console.log(macbook);
macbook.a();
macbook.b();
