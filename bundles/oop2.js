"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
class Baju {
    nama;
    harga;
    constructor(nama, harga) {
        this.nama = nama;
        this.harga = harga;
    }
    infoProduk() {
        console.log(`
======== latihan 7 ========
produk : ${this.nama}
harga  : ${this.harga}`);
    }
}
const baju = new Baju("Turtle Neck", 100000);
baju.infoProduk();
// todo latihan 8
class Bentuk {
    sisi;
    constructor(sisi) {
        this.sisi = sisi;
    }
}
class Persegi extends Bentuk {
    constructor(sisi) {
        super(sisi);
    }
    luas() {
        console.log(`
======== latihan 8 ========
total sisi + sisi + sisi + sisi + sisi : ${this.sisi}`);
    }
}
const kotak = new Persegi(10);
kotak.luas();
// todo latihan 9
class Karyawan {
    nama;
    status;
    constructor(nama, status) {
        this.nama = nama;
        this.status = status;
    }
}
class KaryawanTetap extends Karyawan {
    gajiTetap;
    constructor(nama, status, gajiTetap) {
        super(nama, status);
        this.gajiTetap = gajiTetap;
    }
    infoGajitetap() {
        console.log(`
======== latihan 9 ========
`);
    }
}
function faktorial(n) {
    if (n == 1) {
        return n;
    }
    else {
        return (n * faktorial(n - 1));
    }
}
// @ts-ignore
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let nilai = Number(prompt('masukan bilangan faktorial : '));
console.log(`${nilai}! = ${faktorial(nilai)}`);
//# sourceMappingURL=oop2.js.map