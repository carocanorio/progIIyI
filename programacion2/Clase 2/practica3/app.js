let edadMaxima = 100;

function calcularConsumo(e,c,p) {
    let diferencia = edadMaxima - e;
    let diasConsumidos = diferencia*365;
    let consumoTotal = diasConsumidos*c;
        return 'Necesitaras' +consumoTotal + 'de' + p + 'para que dure toda tu vida.'
}

console.log(calcularConsumo(19,5,2))

function cambiarElUltimo(a,d) {
    
}