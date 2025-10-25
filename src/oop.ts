// todo latihan 1
class Produk {
    nama: string
    harga: number
    stok: number

    constructor(nama: string, harga: number, stok: number) {
        this.nama = nama
        this.harga = harga
        this.stok = stok
    }

    tampilkanInfo() {
        console.log(`
========= latihan 1 =========

nama                          : ${this.nama}
harga                         : ${this.harga}
stok                          : ${this.stok}

`)
    }

    beli(jumlah: number) {
        if (jumlah >= this.stok) {
            console.log(`❌ Stok ${this.nama} tidak cukup!`)
        } else {
            this.stok -= jumlah
            console.log(`✅ ${this.nama} dibeli ${jumlah} unit. Sisa stok: ${this.stok}`)
        }
    }
}


let laptop = new Produk("Tuf F15", 10000000, 100)

laptop.beli(3)

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
interface SuaraHewan {
    nama: string
    jenis: string
    suara(): void
}


abstract class HewanPeliharaan implements SuaraHewan {
    public nama: string
    public jenis: string

    constructor(nama: string, jenis: string) {
        this.nama = nama
        this.jenis = jenis
    }

    abstract suara(): void
}

class Kucing extends HewanPeliharaan {
    // constructor(nama: string, jenis: string) {
    //     super(nama, jenis)
    // }

    suara(): void {
        console.log(`
========= latihan 3 =========

nama hewan ini   : ${this.nama}
jenis hewan ini  : ${this.jenis}
hei, mengeong!!  : Meong~ 🐱
            `
        )
    }
}

class Anjing extends HewanPeliharaan {
    // constructor(nama: string, jenis: string) {
    //     super(nama, jenis)
    // }

    suara(): void {
        console.log(`
========= latihan 3 =========

nama hewan ini         : ${this.nama}
jenis hewan ini        : ${this.jenis}
hei, meng gong gong!!  : Guk guk! 🐶
            `
        )
    }
}

class Capybara extends HewanPeliharaan {
    // constructor(nama: string, jenis: string) {
    //     super(nama, jenis)
    // }

    suara(): void {
        console.log(`
========= latihan 3 =========

nama hewan ini         : ${this.nama}
jenis hewan ini        : ${this.jenis}
hei, kur kur!!  : kur kurr kuur ~ 🐐
            `
        )
    }
}


const MyAnimals: HewanPeliharaan[] = [
    new Kucing("Mochi", "Kucing Rumahan"),
    new Anjing("ScoobyDo", "Anjing Ghost Hunter"),
    new Capybara("Capy King", "Chill Guy")
]