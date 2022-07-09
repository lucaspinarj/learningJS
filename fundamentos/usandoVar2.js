var numero = 1
console.log('fora antes do bloco = ', numero)
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora depois do bloco = ', numero)