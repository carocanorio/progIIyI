/*CALCULADORA DE CONSUMO */

const calcularConsumo = (edad, consumo, producto) => {

    const edadMaxima = 80;
    let diferencia = edadMaxima - edad;
    let dias = diferencia * 365

    return "Necesitarás " + dias * consumo + " de " + producto +" para que dure el resto de tu vida";

};

/*
console.log(calcularConsumo(21, 2, "medialunas"));
*/

/*EJ 2 CAMBIAR "EL ÚLTIMO ELEMENTO"*/

let cambiarElUltimo = (array,dato) => {

    array.pop();
    array.push(dato);

    return array ;
};

/*EJ 3 "TRABAJANDO CON OBJETOS" */

let libro = {
    nombre:'Orgullo y prejuicio',
    genero: 'Novela',
    cantidadDePalabras: 555 ,
    paraAdultos: true,

    descripcion: () => "El libro se llama " + libro.nombre + " y es de género " + libro.genero ,

    puedeLeerlo: (edad) => {
        if (edad<18 && libro.paraAdultos == true) {
            return false
        }
        else {
            return true
        }  
    
    } 

}

//console.log(libro.descripcion());  
//

/* EJ 4: TRANSFORMANDO FUNCIONES EN ARROW FUNCTIONS */

/* 1) Saludar
function saludar(){
  return “Hola”;
};  */
let saludar = () => "Hola"; 

/* console.log(saludar()) */

/*  2) Multiplicar
function multiplicar(valor1, valor2){
  return valor1*valor2;
}; */

let multiplicar = (valor1, valor2) => valor1*valor2; 

/* console.log(multiplicar(2,3)) */


/* 3) Anónima
function (){
  return “Soy una función sin nombre :( ”;
}; 


NO LA HICE */



/* 4) Es par
function esPar(numero){
  return numero%2 === 0;
};
*/

let esPar = (numero) => numero%2 === 0; 

/* console.log(esPar(7)) */

/*EJERCICIO 5*/

let calcularAniosPerrunos = (e) => {
    let equivalencia = e*7;
    return 'Tu perro tiene' +equivalencia+ 'años perrunos'
}

//console.log(calcularAniosPerrunos(7));

/*EJERCICIO 6*/

let celsiusAFahrenheit = (t) =>{
    let conversion = (t*9/5) +32;
    return t + '°C son' + ''+ conversion + '°F'
}
console.log(celsiusAFahrenheit (0));


