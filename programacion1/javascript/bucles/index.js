for (let i=0; i<5; i++){
    console.log('Practicando con el bucle for');
};

for (let i=0; i<10; i++){
    console.log('La variable i tiene el valor de' +i);
}

for (let i=0; i<20; i+=2){
    console.log('Pares');
}

for (let i=0; i<50; i+=5){
    console.log('Cinco');
}

/*
for (let i=0; i<100; i++){
    console.log('Cien');
}
*/

let base=1;

let resultados=[1,2,3,4,5,6,7,8,9];

for (let i=1; i<10; i++){
    resultados.push(base*i)
}

console.log(resultados);

let ganancias=[1,2,3,4,5,6,7,8,9,0];

let resultado=0

for (let i=0; i<ganancias.length; i++){
    resultado= ganancias[i]+resultado
}

console.log(resultado)

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i=0; i<healingIsDifficult.length; i++){
    console.log(healingIsDifficult[i])
}

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19,
        ciudad: 'Indefinida'
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
]

for(let i=0; i<got.length; i++){
    console.log(`Hola ${got[i].nombre} ${got[i].apellido} criatura viajera!`);
    console.log(`Soy ${got[i].nombre} ${got[i].apellido} de la ciudad ${got[i].ciudad}`);
}


