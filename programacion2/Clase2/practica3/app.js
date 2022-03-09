let edadMaxima = 100;

function calcularConsumo(e,c,p) {
    let diferencia = edadMaxima - e;
    let diasConsumidos = diferencia*365;
    let consumoTotal = diasConsumidos*c;
        return 'Necesitaras' +consumoTotal + 'de' + p + 'para que dure toda tu vida.'
}

console.log(calcularConsumo(19,5, 'agua'))

let libro = {
    nombre: 'The Shining',
    genero: 'terror',
    cantidadDePalabras: 500,
    paraAdultos: true,

    function () {
        return 'El libro se llama' + libro.nombre + 'y es del genero' + libro.genero
    }
}

libro.puedeLeerlo = {
    function (e) {
        if (libro.paraAdultos === true && e<18){
            return false
        }
    }
}