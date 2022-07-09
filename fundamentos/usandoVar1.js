{
    {
        {
            var sera = 'Será?'
            console.log(sera)
        }
    }
}

console.log(sera)

function teste() {
    var oi = 123
    console.log(oi)
}

teste()
console.log(sera)

/**
 * não vai saber que variavel é essa pois está no escopo local da função teste
 */
// console.log(oi)
//