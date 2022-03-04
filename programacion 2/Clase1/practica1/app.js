let subject = 'programacion';

let year = 2022;

let favoriteSites = ['Playground', 'Youtube', 'Netflix', 'Instagram', 'Tiktok'];

console.log( favoriteSites[3]);

favoriteSites.pop();

favoriteSites.push('SIGEDU');

const person = {
    name: 'Caro',
    lastName: 'Canorio',
    age: 19,
};

console.log(`Hola mi nombre es${person.name} y mi edad es esta${person.age}`);

person.sites = favoriteSites;

console.log( person.sites [1]);

let curso = [
    {
        nombre: 'Historia',
        descripcion: 'Libros',
        alumnos: 1,
        diasDeCursada: ['Lunes', 'Martes'],
    },
    {
        nombre: 'Geografia',
        descripcion: 'Paises',
        alumnos: 2,
        diasDeCursada: ['Miercoles', 'Jueves'],
    },
    {
        nombre: 'Lengua',
        descripcion: 'Palabras',
        alumnos: 3,
        diasDeCursada: ['Lunes', 'Martes'],
    },
    {
        nombre: 'Historia',
        descripcion: 'Libros',
        alumnos: 1,
        diasDeCursada: ['Lunes', 'Martes'],
    },
    {
        nombre: 'Geografia',
        descripcion: 'Paises',
        alumnos: 2,
        diasDeCursada: ['Miercoles', 'Jueves'],
    },
    {
        nombre: 'Lengua',
        descripcion: 'Palabras',
        alumnos: 3,
        diasDeCursada: ['Lunes', 'Martes'],
    },
];

console.log(curso[2]);

console.log(curso[3].nombre);


