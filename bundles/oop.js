"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mobil {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    info() {
        console.log(`nama : ${this.name}, warna : ${this.color}`);
    }
}
let civic = new Mobil("Honda Civic", "Black");
civic.info();
//# sourceMappingURL=oop.js.map