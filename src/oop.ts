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
nama : ${this.nama}
harga : ${this.harga}
stok : ${this.stok}
${this.nama} di beli sebanyak - ${this.jumlah_beli}
total jumlah produk : ${this.stok - this.jumlah_beli}  
`)
    }
}


let laptop = new Produk("Tuf F15", 10000000, 100, 3)

laptop.tampilkanInfo()