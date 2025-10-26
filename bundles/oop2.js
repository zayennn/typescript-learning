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
======== latihan 1 ========
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
class RekeningBank {
    saldo;
    constructor(saldo) {
        this.saldo = saldo;
    }
    setor(jumlah) {
        if (jumlah <= 0) {
            console.log('jumlah tidak boleh kurang dari 0');
        }
        else {
            this.saldo += jumlah;
        }
    }
    checkSaldo() {
        let currency = new Intl.NumberFormat("id-ID", {
            style: 'currency',
            currency: 'IDR',
        }).format(this.saldo);
        console.log(`
======== latihan 3 ========
total saldo anda: ${currency}`);
    }
}
const mySaldo = new RekeningBank(0);
mySaldo.setor(100000);
mySaldo.checkSaldo();
// todo latihan 4 dan 5
class Kendaraan {
    merk;
    constructor(merk) {
        this.merk = merk;
    }
    jalan() {
        console.log(`
======== latihan 4 dan 5 ========
${this.merk} sedang jalan di jalanan`);
    }
}
class Motor extends Kendaraan {
    ngebut() {
        console.log(`
======== latihan 4 dan 5 ========
${this.merk} sedang ngebut di jalanan`);
    }
}
const H2R = new Motor("Kawasaki Ninja H2R");
H2R.ngebut();
// todo latihan 6
class Hewan {
    nama;
    constructor(nama) {
        this.nama = nama;
    }
}
class Kucing extends Hewan {
    bersuara() {
        console.log(`
======== latihan 6 ========
${this.nama} berkata : ~ Meong`);
    }
}
const mochi = new Kucing("Mochiaw");
mochi.bersuara();
//# sourceMappingURL=oop2.js.map