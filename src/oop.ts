class Produk {
    nama: string
    harga: number
    stok: number

    constructor(nama: string, harga: number, stok: number) {
        this.nama = nama
        this.harga= harga
        this.stok= stok
    }

    tampilkanInfo() {
        console.log(`
nama : ${this.nama}
harga : ${this.harga}
stok : ${this.stok}
${this.nama} di beli 2 unit            
`)
    }
}


let laptop = new Produk("Tuf F15", 10000000, 100)
laptop.tampilkanInfo()