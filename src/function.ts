// todo =================== function ===================
function create(): string {
    return "ini dari typescript"
}

function jumlah(x:number, y: number): string {
    return `hasil dari ${x} ditambah ${y} adalah ${x + y}`
}

const result: (string | number) [] = [
    create(),
    jumlah(10, 20)
]

console.log({result})