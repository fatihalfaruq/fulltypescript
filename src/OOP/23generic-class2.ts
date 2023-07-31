class ClassA {
  name: string = "classAnjing";
}

class ClassBaru<T> {
  clasprop: T;
  constructor(clasprop: T) {
    this.clasprop = clasprop;
  }
}

const clasA = new ClassA();
const classBaru = new ClassBaru(ClassA);
console.log(classBaru);
