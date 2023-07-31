import Laptop from "./BaseLatop";

class Asus<T> extends Laptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super("zenbook", type, numeric, touchButton);
  }
}
export default Asus;
