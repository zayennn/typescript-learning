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

        console.log(`Laptop: ${this.merk} | ${this.ram} GB | ${compileSsd}`)
    }
}

const tuf = new Laptop("Asus Tuf F15", 16, 1000)
tuf.info()