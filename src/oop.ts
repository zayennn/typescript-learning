type MobilDetail = {
    name: string,
    color: string
}

class Mobil {

    name: string
    color: string

    constructor(name: string, color: string) {
        this.name = name
        this.color = color
    }

    info() {
        console.log(`nama : ${this.name}, warna : ${this.color}`)
    }
}

let civic = new Mobil("Honda Civic", "Black")
civic.info()