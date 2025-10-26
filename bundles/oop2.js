"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo latihan 1
class Laptop {
    merk;
    ram;
    ssd;
    constructor(merk, ram, ssd) {
        this.merk = merk;
        this.ram = ram;
        this.ssd = ssd;
    }
    info() {
        let compileSsd = this.ssd >= 1000
            ? `${this.ssd / 1000} TB`
            : `${this.ssd} GB`;
        console.log(`Laptop: ${this.merk} | ${this.ram} GB | ${compileSsd}`);
    }
}
const tuf = new Laptop("Asus Tuf F15", 16, 1000);
tuf.info();
//# sourceMappingURL=oop2.js.map