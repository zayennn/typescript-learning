"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// latihan 1
console.log('\n================= latihan 1 ================= \n');
for (let i = 1; i <= 3; i++) {
    console.log(`baris ke-${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`   kolom ke-${j}`);
    }
}
// latihan 2
console.log('\n================= latihan 2 =================');
for (let i = 0; i <= 5; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// latihan 3
console.log('\n================= latihan 3 =================');
let count = 0;
for (let i = 1; i <= 5; i++) {
    count++;
    for (let j = 1; j <= i; j++) {
        console.log(count);
    }
}
//# sourceMappingURL=nasted_loop.js.map