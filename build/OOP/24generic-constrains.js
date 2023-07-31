"use strict";
function Generics(arg) {
    console.log(arg.length);
    return arg;
}
const generics = Generics("rapapapa");
console.log(generics);
const generic2 = Generics({ length: 10, value: 200 });
