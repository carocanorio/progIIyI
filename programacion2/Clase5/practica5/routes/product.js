const express = require('express');
const router = express.Router(); //ejecucion del metodo router de express
const autos = require('../db/index');

router.get('/', function (req,res) {
    return res.send(autos.lista)
});

router.get('/marca/:brand', function (req,res) {
    let marcaAuto = req.params.brand;
    let arrayDeMarcas = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].marca === marcaAuto) {
            arrayDeMarcas.push(autos.lista[i])
        }      
    }
    if (arrayDeMarcas.length == 0) {
        return res.send('No hay autos de la marca' +' ' + marcaAuto)
    }

    return res.send (arrayDeMarcas);
});

router.get('/color/:color', function (req,res) {
    
    let color = req.params.color;
    let arrayDeColores = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].color === color) {
            arrayDeColores.push(autos.lista[i])
        }      
    }
    if (arrayDeColores.length == 0) {
        return res.send('No hay autos del color '+ color)
    }

    return res.send (arrayDeColores);
});

router.get('/modelo/:model/:anio?', function (req,res) {
    
    let modelo = req.params.model;
    let anio = req.params.anio
    let arrayDeModelos = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if(autos.lista[i].modelo === modelo && anio == undefined){
            arrayDeModelos.push(autos.lista[i])
        }  
    }

    if (arrayDeModelos.length == 0) {
        return res.send('No hay autos del modelo '+ modelo)
    }
    
    return res.send(arrayDeModelos);
});

router.get('/anio/:year', function (req,res) {
    
    let anioAuto = req.params.year;
    let arrayDeAnios = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if (autos.lista[i].anio == anioAuto) {
            arrayDeAnios.push(autos.lista[i])
        }        
    }
    if (arrayDeAnios.length == 0) {
        return res.send('No hay autos del año ' + anioAuto)
    }

    return res.send(arrayDeAnios);
});


module.exports = router;
