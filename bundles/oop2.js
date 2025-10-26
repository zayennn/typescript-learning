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
        console.log(`
======== latihan 2 ========
Laptop: ${this.merk} | ${this.ram} GB | ${compileSsd}`);
    }
}
const tuf = new Laptop("Asus Tuf F15", 16, 1000);
tuf.info();
// todo latihan 2
class Mahasiswa {
    nama;
    nim;
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }
    belajar() {
        console.log(`
======== latihan 2 ========
${this.nama} dengan nim ${this.nim} sedang belajar`);
    }
}
const masbro = new Mahasiswa("masbro", 15250506);
masbro.belajar();
// todo latihan 3
//# sourceMappingURL=oop2.js.map