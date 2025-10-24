// @ts-ignore
import promptSync from "prompt-sync";
const prompt = promptSync();

interface iLaptop {
    name: string,
    processor: string,
    gpu: string,
    storage: number,
    ram: number,
    isGaming: boolean
}

const createLaptop = (laptop: iLaptop) => {

    let laptopName = laptop.name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(" ")

    let processorName = laptop.processor
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(" ")

    const storageUnit = laptop.storage >= 1000
                        ? `${laptop.storage / 1000} TB`
                        : `${laptop.storage} GB`

    return `
berhasil membuat laptop ${laptopName}
spesifikasi laptop : 
- processor : ${processorName}
- gpu : ${laptop.gpu}
- storage : ${storageUnit}
- ram : ${laptop.ram}
- apakah laptop gaming : ${laptop.isGaming}
    `
}

const tuf = {
    name : prompt('masukan nama merk laptop : '),
    processor : prompt('masukan jenis processor : '),
    gpu : prompt('masukan jenis graphics card : ').toUpperCase(),
    storage : Number(prompt('masukan kapasitas storage : ')),
    ram : Number(prompt('masukan kapasitas ram (GB) : ')),
    isGaming : prompt('apakah ini laptop gaming ? (y/n) : ').toLocaleLowerCase() === "y" ? true : false
}

console.log(createLaptop(tuf))