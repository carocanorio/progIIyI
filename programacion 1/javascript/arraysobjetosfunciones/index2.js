let nombre='Caro';
let apellido='Canorio';
let edad=17;

let nombreCompleto=[nombre,apellido];

console.log(`Mi nombre es ${nombreCompleto}`);

let frutas=['Banana','Manzana'];

frutas.push('Frutilla');

frutas.push('Anana');

console.log(frutas.length);


console.log('lalalala'.length);


let abuelos=['Elsa','Alberto'];
let padres=[];
let hijos=['Eze', 'Caro',  'Simon'];
let nietos=['no hay'];

let arbol=[abuelos, padres, hijos, nietos];

padres.push('Cecilia', 'Oscar');

console.log(arbol[0][0]);
console.log(arbol[1][0]);
console.log(arbol[2][0]);
console.log(arbol[3][0]);

function area (a,b){
    return 4*4;
}

console.log(area());

function radio(a,b){
    return b*a;
}

console.log(radio(3.14,4));

function promedio(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}

console.log(promedio(1,2,3,4,5));

let misDatos={
    nombre: 'Caro',
    apellido: 'Canorio',
    dni: 44829049,
    comidaFavorita: 'fideos',
    edad: 17,
    saludar: function(){
        return 'Hola! Mi nombre es Caro Canorio y tengo 17 anios'
    }
}
console.log(misDatos.saludar)

function darTotal (array){
    return data.length;
}


function sumar(num1, num2){
    return num1+num2;
};
function multiplicar(num1, num2){
    return num1*num2;
};

console.log(sumar(89,10));



