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

console.log(mensaje);