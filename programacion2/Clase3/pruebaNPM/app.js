let popularMovieQuotes = require('popular-movie-quotes');

//console.log(modulo.getRandomQuote());

let autos = require('./../autos/db/index');

//console.log(autos);

function describirse (n) {
    return 'Hola soy el auto marca:' +autos.lista[n].marca + 'modelo' + autos.lista[n].modelo + 'fabricado en el año' + autos.lista[n].anio + 'y de color' + autos.lista[n].color
};

//console.log(describirse(2));

for (let i = 0; i < autos.lista.length; i++) {
    //console.log(describirse(i));
};

let porColor = c => {
    
    let resultados = [];

    for (let i = 0; i < autos.lista.length; i++) {

        if (autos.lista[i].color === c) {
            resultados.push(autos.lista[i]); 
        }else{
            resultados.push('No contamos con autos del color' +c);
        }

    }

    return resultados
}

//console.log(porColor('negro'));

let porMarca = m => {
    
    let arrayDeMarcas = [];

    for (let i = 0; i < autos.lista.length; i++) {

        if (autos.lista[i].marca === m) {
            arrayDeMarcas.push(autos.lista[i]); 
        }else{
            arrayDeMarcas.push('No contamos con autos de la marca' + ' ' + m);
        }

    }

    return arrayDeMarcas
}

//console.log(porMarca('Volkswagen'));

let porAnio = a=> {
    
    let arrayDeAnios = [];

    for (let i = 0; i < autos.lista.length; i++) {

        if (autos.lista[i].anio === a) {
            arrayDeAnios.push(autos.lista[i]); 
        }else{
            arrayDeAnios.push('No contamos con autos del anio' + ' ' + a);
        }

    }

    return arrayDeAnios
}

console.log(porAnio(2021));
