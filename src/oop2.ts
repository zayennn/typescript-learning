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
        console.log(`Laptop: ${this.merk} | ${this.ram} | ${this.ssd}`)
    }
}

