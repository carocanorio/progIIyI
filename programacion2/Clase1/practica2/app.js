let idioma = 'es';
let texto = '';

if (idioma == 'en'){
    texto = 'Hello world, JavaScript is back!'
}else if (idioma == 'fr') {
    texto = 'Bonjout tout le mond, retour de JavaScript! '
}else {
    texto = 'Hola mundo, ¡volvió JavaScript!'
}

//console.log(texto);

let diaSemana = 'Sabado';
let saludo = '';

if (diaSemana == 'Viernes'){
    saludo = 'Buen viernes'
}else if (diaSemana == 'Jueves'){
    saludo = 'Buen jueves'
}else if (diaSemana == 'Miercoles'){
    saludo = 'Buen miercoles'
}else if (diaSemana == 'Martes'){
    saludo = 'Buen martes'
}else if (diaSemana == 'Lunes'){
    saludo = 'Buen lunes'
}else{
    saludo = 'Buen finde'
};

//console.log(saludo)

let persona = {
    nombre: 'Caro',
    apellido: 'Canorio',
    edad: 19,
    ciudad: 'Winterfell',
}

let mensaje = '';

if (persona.edad < 18 && persona.ciudad == null){
    mensaje = `Hola ${persona.nombre} ${persona.apellido} criatura viajera!`
}else if (persona.edad >= 18 && persona.ciudad == null){
    mensaje = `Hola ${persona.nombre} ${persona.apellido} eminencia viajera!`
}else if(persona.edad < 18 && persona.ciudad != undefined){
    mensaje = `Hola mini ${persona.nombre} ${persona.apellido} de ${persona.ciudad}`
}else if(persona.edad > 18 && persona.ciudad != undefined){
    mensaje = `Hola ${persona.nombre} ${persona.apellido} de ${persona.ciudad}`
}else if(persona.nombre.length < 4){
    mensaje = 'Ay pero que nombre cortito!'
}else if(persona.ciudad === 'Winterfell'){
    mensaje = 'Winter is coming'
};

//console.log(mensaje);

/*BUCLE FOR*/

let base = 2;

let resultados = [];

for (let i = 0; i < 10; i++) {
    resultados.push(base*i) 
}

//console.log(resultados);

let destinos = ['Grecia', 'Londres', 'Miami', 'Orlando', 'Nueva York'];

for (let i = 0; i<destinos.length; i++) {
    //console.log('Mi destino' + [i] + 'es' + destinos[i]);
};

let notas = [10,20,30,65,70,80,90];

for (let i = 0; i<notas.length; i++) {
    //console.log('Nota:' + notas[i]);

    if (notas[i]>=90) {
        //console.log('Nota alfabética A');
    }else if (notas[i]>=80) {
        //console.log('Nota alfabética B');
    }else if (notas[i]>=70) {
        //console.log('Nota alfabética C');
    }else if (notas[i]>=65) {
        //console.log('Nota alfabética D');
    }else{
        //console.log('Nota alfabética F');
    }
};

let ganancias = [
    {
        mes: 1,
        saldo: 2
    },
    {
        mes: 2,
        saldo: -3
    },
    {
        mes: 3,
        saldo: 4
    },
    {
        mes: 4,
        saldo: -5
    },
    {
        mes: 5,
        saldo: 6
    },
    {
        mes: 6,
        saldo: -7
    },
]

for (let i = 0; i < ganancias.length; i++) {
    //console.log('El mes' + ganancias[i].mes + 'tuvo un saldo de' + ganancias[i].saldo);    

    if (ganancias[i].saldo >= 0) {
        //console.log('El mes' + ganancias[i].mes + 'fue positivo');
    }else{
        //console.log('El mes' + ganancias[i].mes + 'fue negativo');
    }

};

let personas = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let mensajes ='';

for (let i = 0; i < personas.length; i++) {
    
    if (personas.edad <= 18 && personas.ciudad == null){
        mensajes = `Hola ${personas.nombre} ${personas.apellido} criatura viajera!`
    }else if (personas.edad >= 18 && personas.ciudad == null){
        mensajes = `Hola ${personas.nombre} ${personas.apellido} eminencia viajera!`
    }else if(personas.edad < 18 && personas.ciudad != undefined){
        mensajes = `Hola mini ${personas.nombre} ${personas.apellido} de ${personas.ciudad}`
    }else if(personas.edad > 18 && personas.ciudad != undefined){
        mensajes = `Hola ${personas.nombre} ${personas.apellido} de ${personas.ciudad}`
    }else if(personas.ciudad === 'Winterfell'){
        mensajes = 'Winter is coming'
    }
}

console.log(mensajes);