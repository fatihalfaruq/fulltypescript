import Laptop from "./BaseLatop";

class Macbook<T> extends Laptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super("Macbook", type, numeric, touchButton);
  }
}
export default Macbook;
