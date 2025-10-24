"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo annotation type
let nama = 'elang';
let umur = 18;
let isDead = false;
// todo arr biasa
let pacarSaya;
pacarSaya = ["davina karamoy", "nadine abigail"];
// todo tuple arr
let selingkuhanSaya;
selingkuhanSaya = ["jenny kim", 29, true];
console.log({ nama });
console.log({ umur });
console.log({ isDead });
console.log({ pacarSaya });
console.log({ selingkuhanSaya });
let teman = {
    nama: "fulan",
    jumlah_hutang: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(100000),
    isKampret: false
};
console.log(teman);
//# sourceMappingURL=app.js.map