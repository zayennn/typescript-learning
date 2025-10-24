class Kendaraan {
    constructor(public name: string, public color: string) {
        this.name = name
        this.color = color
    }

    info() {
        console.log(`nama : ${this.name}, warna : ${this.color}`)
    }
}

class Motor extends Kendaraan {
    constructor(name: string, color: string, public top_speed: number) {
        super(name, color)

        this.top_speed = top_speed
    }

    info() {
        console.log(`nama : ${this.name}, 
warna : ${this.color}
top speed : ${this.top_speed} km/jam`)
    }
}

let civic = new Kendaraan("Honda Civic", "Abu Abu")
civic.info()


let h2r = new Motor("Kawasaki Ninja H2R", "Hitam", 410)
h2r.info()