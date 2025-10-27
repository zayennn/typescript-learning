// latihan 1
console.log('\n================= latihan 1 ================= \n')
for ( let i: number = 1; i <= 3; i++ ) {
    console.log(`baris ke-${i}`)

    for ( let j: number = 1; j <= 3; j++ ) {
        console.log(`   kolom ke-${j}`)
    }
}


// latihan 2
console.log('\n================= latihan 2 =================')
for ( let i: number = 0; i <= 5; i++ ) {
    let stars: string = ""
    for ( let j: number = 0; j < i; j++ ) {
        stars += "*"
    }
    console.log(stars)
}