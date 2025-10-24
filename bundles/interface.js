"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const createLaptop = (laptop) => {
    let laptopName = laptop.name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
        .join(" ");
    let processorName = laptop.processor
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
        .join(" ");
    const storageUnit = laptop.storage >= 1000
        ? `${laptop.storage / 1000} TB`
        : `${laptop.storage} GB`;
    return `
berhasil membuat laptop ${laptopName}
spesifikasi laptop : 
- processor : ${processorName}
- gpu : ${laptop.gpu}
- storage : ${storageUnit}
- ram : ${laptop.ram}
- apakah laptop gaming : ${laptop.isGaming}
    `;
};
const tuf = {
    name: prompt('masukan nama merk laptop : '),
    processor: prompt('masukan jenis processor : '),
    gpu: prompt('masukan jenis graphics card : ').toUpperCase(),
    storage: Number(prompt('masukan kapasitas storage : ')),
    ram: Number(prompt('masukan kapasitas ram (GB) : ')),
    isGaming: prompt('apakah ini laptop gaming ? (y/n) : ').toLocaleLowerCase() === "y" ? true : false
};
console.log(createLaptop(tuf));
//# sourceMappingURL=interface.js.map