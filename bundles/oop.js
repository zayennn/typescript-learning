"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo latihan 1
class Produk {
    nama;
    harga;
    stok;
    constructor(nama, harga, stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
    tampilkanInfo() {
        console.log(`
========= latihan 1 =========

nama                          : ${this.nama}
harga                         : ${this.harga}
stok                          : ${this.stok}

`);
    }
    beli(jumlah) {
        if (jumlah >= this.stok) {
            console.log(`❌ Stok ${this.nama} tidak cukup!`);
        }
        else {
            this.stok -= jumlah;
            console.log(`✅ ${this.nama} dibeli ${jumlah} unit. Sisa stok: ${this.stok}`);
        }
    }
}
let laptop = new Produk("Tuf F15", 10000000, 100);
laptop.beli(3);
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
hei, kur kur!!         : kur kurr kuur ~ 🐐
            `);
    }
}
const MyAnimals = [
    new Kucing("Mochi", "Kucing Rumahan"),
    new Anjing("ScoobyDo", "Anjing Ghost Hunter"),
    new Capybara("Capy King", "Chill Guy")
];
for (let h of MyAnimals) {
    h.suara();
}
//# sourceMappingURL=oop.js.map