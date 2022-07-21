function teste1(num) {
    if (num > 7)
        console.log(num)

    // if sem abertura de chaves apenas pega a primeira linha    
    console.log('Final')
}
// teste1(6)
// teste1(8)

function teste2(num) {
    if (num > 7); { // cuidado com ;
        console.log(num)
    }
}
teste2(6)
teste2(8)