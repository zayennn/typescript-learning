"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kendaraan {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.name = name;
        this.color = color;
    }
    info() {
        console.log(`nama : ${this.name}, warna : ${this.color}`);
    }
}
class Motor extends Kendaraan {
    top_speed;
    constructor(name, color, top_speed) {
        super(name, color);
        this.top_speed = top_speed;
        this.top_speed = top_speed;
    }
    info() {
        console.log(`nama : ${this.name}, 
warna : ${this.color}
top speed : ${this.top_speed} km/jam`);
    }
}
let civic = new Kendaraan("Honda Civic", "Abu Abu");
civic.info();
let h2r = new Motor("Kawasaki Ninja H2R", "Hitam", 410);
h2r.info();
//# sourceMappingURL=oop.js.map