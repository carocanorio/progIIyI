let popularMovieQuotes = require('popular-movie-quotes');

//console.log(modulo.getRandomQuote());

let autos = require('./../autos/db/index');

//console.log(autos);

function describirse (n) {
    return 'Hola soy el auto marca:' +autos.lista[n].marca + 'modelo' + autos.lista[n].modelo + 'fabricado en el año' + autos.lista[n].anio + 'y de color' + autos.lista[n].color
};

//console.log(describirse(2));

for (let i = 0; i < autos.lista.length; i++) {
    console.log(describirse(i));
};

let porColor = c => {
    if (c == ) {
        
    }
}


