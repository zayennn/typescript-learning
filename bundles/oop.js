"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo latihan 1
class Produk {
    nama;
    harga;
    stok;
    jumlah_beli;
    constructor(nama, harga, stok, jumlah_beli) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
        this.jumlah_beli = jumlah_beli;
    }
    tampilkanInfo() {
        console.log(`
========= latihan 1 =========

nama                          : ${this.nama}
harga                         : ${this.harga}
stok                          : ${this.stok}
${this.nama} di beli sebanyak      : ${this.jumlah_beli}
total jumlah produk           : ${this.stok - this.jumlah_beli}  
`);
    }
}
let laptop = new Produk("Tuf F15", 10000000, 100, 3);
laptop.tampilkanInfo();
// todo latihan 2
class Karyawan {
    nama;
    gaji;
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }
    infoKaryawan() {
        console.log(`
========= latihan 2 =========
nama : ${this.nama}
gaji : ${this.gaji}
            `);
    }
}
class Manager extends Karyawan {
    bonus;
    constructor(nama, gaji, bonus) {
        super(nama, gaji);
        this.bonus = bonus;
    }
    totalPendapatan() {
        let totalGaji = this.gaji + this.bonus;
        let currency = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 2
        }).format(totalGaji);
        console.log(`
========= latihan 2 =========

nama       : ${this.nama}
gaji       : ${this.gaji}
bonus      : ${this.bonus}
total gaji : ${currency}
            `);
    }
}
const masbro = new Manager("Masbro on a turtle", 100000000, 50000000);
masbro.totalPendapatan();
class HewanPeliharaan {
    nama;
    jenis;
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }
}
class Kucing extends HewanPeliharaan {
    // constructor(nama: string, jenis: string) {
    //     super(nama, jenis)
    // }
    suara() {
        console.log(`
========= latihan 3 =========

nama hewan ini   : ${this.nama}
jenis hewan ini  : ${this.jenis}
hei, mengeong!!  : Meong~ 🐱
            `);
    }
}
class Anjing extends HewanPeliharaan {
    // constructor(nama: string, jenis: string) {
    //     super(nama, jenis)
    // }
    suara() {
        console.log(`
========= latihan 3 =========

nama hewan ini         : ${this.nama}
jenis hewan ini        : ${this.jenis}
hei, meng gong gong!!  : Guk guk! 🐶
            `);
    }
}
class Capybara extends HewanPeliharaan {
    // constructor(nama: string, jenis: string) {
    //     super(nama, jenis)
    // }
    suara() {
        console.log(`
========= latihan 3 =========

nama hewan ini         : ${this.nama}
jenis hewan ini        : ${this.jenis}
hei, kur kur!!  : kur kurr kuur ~ 🐐
            `);
    }
}
let hewan = ["kucing", "anjing", "capybara"];
for (let i = 0; i < hewan.length; i++) {
    if (hewan[i] === "kucing") {
        let mochi = new Kucing("Mochi", "Kucing Rumahan");
        mochi.suara();
    }
    else if (hewan[i] === "anjing") {
        let scoobyDo = new Anjing("ScoobyDo", "Anjing Ghost Hunter");
        scoobyDo.suara();
    }
    else {
        let capyKing = new Capybara("Capy King", "Chill Guy");
        capyKing.suara();
    }
}
//# sourceMappingURL=oop.js.map