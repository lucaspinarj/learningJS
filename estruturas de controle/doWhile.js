function fulano(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let opcao

do {
    opcao = fulano(-1, 10)
    console.log(opcao)
} while (opcao != -1)

console.log('\naté a proxima');