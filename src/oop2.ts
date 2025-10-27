// todo latihan 1
class Laptop {
    private merk: string
    private ram: number
    private ssd: number

    constructor(merk: string, ram: number, ssd: number) {
        this.merk = merk
        this.ram = ram
        this.ssd = ssd
    }

    info() {
        let compileSsd = this.ssd >= 1000
            ? `${this.ssd / 1000} TB`
            : `${this.ssd} GB`

        console.log(`
======== latihan 1 ========
Laptop: ${this.merk} | ${this.ram} GB | ${compileSsd}`)
    }
}

const tuf = new Laptop("Asus Tuf F15", 16, 1000)
tuf.info()

// todo latihan 2
class Mahasiswa {
    private nama: string
    private nim: number

    constructor(nama: string, nim: number) {
        this.nama = nama
        this.nim = nim
    }

    belajar() {
        console.log(`
======== latihan 2 ========
${this.nama} dengan nim ${this.nim} sedang belajar`)
    }
}

const masbro = new Mahasiswa("masbro", 15250506)
masbro.belajar()


// todo latihan 3
class RekeningBank {
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    setor(jumlah: number) {
        if (jumlah <= 0) {
            console.log('jumlah tidak boleh kurang dari 0')
        } else {
            this.saldo += jumlah
        }
    }

    checkSaldo() {
        let currency = new Intl.NumberFormat("id-ID", {
            style: 'currency',
            currency: 'IDR',
        }).format(this.saldo)

        console.log(`
======== latihan 3 ========
total saldo anda: ${currency}`)
    }
}

const mySaldo = new RekeningBank(0)
mySaldo.setor(100000)
mySaldo.checkSaldo()

// todo latihan 4 dan 5
class Kendaraan {
    protected merk: string

    constructor(merk: string) {
        this.merk = merk
    }

    jalan() {
        console.log(`
======== latihan 4 dan 5 ========
${this.merk} sedang jalan di jalanan`)
    }
}

class Motor extends Kendaraan {
    ngebut() {
        console.log(`
======== latihan 4 dan 5 ========
${this.merk} sedang ngebut di jalanan`)
    }
}

const H2R = new Motor("Kawasaki Ninja H2R")
H2R.ngebut()


// todo latihan 6
class Hewan {
    protected nama: string

    constructor(nama: string) {
        this.nama = nama
    }
}

class Kucing extends Hewan {
    bersuara() {
        console.log(`
======== latihan 6 ========
${this.nama} berkata : ~ Meong`)
    }
}

const mochi = new Kucing("Mochiaw")
mochi.bersuara()


// todo latihan 7
interface Produk {
    nama: string,
    harga: number,
    infoProduk(): void
}

class Baju implements Produk {
    public nama: string
    public harga: number

    constructor(nama: string, harga: number) {
        this.nama = nama
        this.harga = harga
    }

    infoProduk(): void {
        console.log(`
======== latihan 7 ========
produk : ${this.nama}
harga  : ${this.harga}`)
    }
}

const baju = new Baju("Turtle Neck", 100000)
baju.infoProduk()

// todo latihan 8
abstract class Bentuk {
    protected sisi: number

    constructor(sisi: number) {
        this.sisi = sisi
    }

    abstract luas(): void
}

class Persegi extends Bentuk {

    constructor(sisi: number) {
        super(sisi)
    }

    luas() {
        console.log(`
======== latihan 8 ========
total sisi + sisi + sisi + sisi + sisi : ${this.sisi}`)
    }
}

const kotak = new Persegi(10)
kotak.luas()


// todo latihan 9
abstract class Karyawan {
    protected nama: string
    protected status: string

    constructor (nama: string, status: string) {
        this.nama = nama
        this.status = status
    }
}


class KaryawanTetap extends Karyawan {
    private gajiTetap: number

    constructor ( nama: string, status: string, gajiTetap: number ) {
        super(nama, status)
        this.gajiTetap = gajiTetap
    }

    infoGajitetap() {
                console.log(`
======== latihan 9 ========
`)
    }
}

function faktorial( n: number ): any {
    if ( n == 1 ) {
        return n
    } else {
        return ( n * faktorial( n - 1 ) )
    }
}

// @ts-ignore
import promptSync from 'prompt-sync'

let prompt = promptSync()

let nilai = Number(prompt('masukan bilangan faktorial : '))

console.log(`${nilai}! = ${faktorial(nilai)}`)