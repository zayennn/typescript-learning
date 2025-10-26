// todo latihan 1
class Laptop {
    private merk: string
    private ram: number
    private ssd: number

    constructor( merk: string, ram: number, ssd: number ) {
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

    constructor( nama: string, nim: number ) {
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

    constructor( saldo: number ) {
        this.saldo = saldo
    }

    setor( jumlah: number ) {
        if ( jumlah <= 0 ) {
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

    constructor( merk: string ) {
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