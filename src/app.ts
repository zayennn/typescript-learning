// todo annotation type
let nama: string = 'elang'
let umur: number = 18
let isDead: boolean = false

// todo arr biasa
let pacarSaya: string[]
pacarSaya = ["davina karamoy", "nadine abigail"]

// todo tuple arr
let selingkuhanSaya: [string, number, boolean]
selingkuhanSaya = ["jenny kim", 29, true]

console.log({ nama })
console.log({ umur })
console.log({ isDead })
console.log({ pacarSaya })
console.log({ selingkuhanSaya })


// todo =================== type costume ===================
type TypeTeman = {
    nama: string,
    jumlah_hutang: string
    isKampret: boolean
}

let teman: TypeTeman = {
    nama: "fulan",
    jumlah_hutang: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(100000),
    isKampret: false
}

console.log(teman);