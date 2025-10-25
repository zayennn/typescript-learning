// todo latihan 1
class Produk {
    nama: string
    harga: number
    stok: number
    jumlah_beli: number

    constructor(nama: string, harga: number, stok: number, jumlah_beli: number) {
        this.nama = nama
        this.harga= harga
        this.stok= stok
        this.jumlah_beli= jumlah_beli
    }

    tampilkanInfo() {
        console.log(`
========= latihan 1 =========

nama                          : ${this.nama}
harga                         : ${this.harga}
stok                          : ${this.stok}
${this.nama} di beli sebanyak      : ${this.jumlah_beli}
total jumlah produk           : ${this.stok - this.jumlah_beli}  
`)
    }
}


let laptop = new Produk("Tuf F15", 10000000, 100, 3)

laptop.tampilkanInfo()


// todo latihan 2
class Karyawan {
    protected nama: string
    protected gaji: number

    constructor(nama: string, gaji: number) {
        this.nama = nama
        this.gaji = gaji
    }

    infoKaryawan() {
        console.log(`
========= latihan 2 =========
nama : ${this.nama}
gaji : ${this.gaji}
            `
        )
    }
}


class Manager extends Karyawan {
    private bonus: number 

    constructor(nama: string, gaji: number, bonus: number) {
        super(nama, gaji)

        this.bonus = bonus
    }

    totalPendapatan() {

        let totalGaji = this.gaji + this.bonus

        let currency = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 2
        }).format(totalGaji)

        console.log(`
========= latihan 2 =========

nama       : ${this.nama}
gaji       : ${this.gaji}
bonus      : ${this.bonus}
total gaji : ${currency}
            `
        )
    }
}

const masbro = new Manager("Masbro on a turtle", 100000000, 50000000)
masbro.totalPendapatan()


// todo latihan 3