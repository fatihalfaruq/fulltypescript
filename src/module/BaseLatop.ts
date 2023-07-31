import ILaptop from "./ILaptop";
import * as keyboard from "./keyboard";
import { b } from "./keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  widthNumeric: boolean;
  widthTouchButton: boolean;
  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
    this.name = name;
    this.type = type;
    this.widthNumeric = numeric;
    this.widthTouchButton = touchButton;
  }
  a(): void {
    console.log(keyboard.a());
  }
  b(): void {
    console.log(b());
  }
}

export default BaseLaptop;
