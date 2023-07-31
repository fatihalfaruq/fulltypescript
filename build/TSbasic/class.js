"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User3 = exports.User2 = exports.User1 = exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User("fatih");
console.log(user);
class User1 {
    constructor(name) {
        this.name = name;
    }
}
exports.User1 = User1;
let user1 = new User1("fatih");
console.log(user1);
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User2 = User2;
class Admin extends User2 {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin1 = new Admin("FDSFD", 43);
admin1.getName();
admin1.getRole();
admin1.setName("dsds");
console.log(admin1);
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User3 = User3;
class Admin1 extends User3 {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin1("fatih", 17, "082124855384");
admin.getName();
admin.getRole();
admin.setName("dsds");
admin.phone;
console.log(admin);
class bio {
    constructor(hobi) {
        this.hobi = hobi;
        this._email = "";
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
let Bio = new bio("nyanyi");
Bio.email = "fatih";
console.log(Bio.email);
class warna {
    static getNamerole() {
        return "ini output static method";
    }
    constructor(warna1) {
        this.warna1 = warna1;
    }
}
warna.getRolename = "ini output static property";
let color = warna.getRolename;
let color1 = warna.getNamerole();
console.log(color, color1);
