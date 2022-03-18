const express = require('express');
const router = express.Router(); //ejecucion del metodo router de express
const autos = require('../db/index');

router.get('/', function (req,res) {
    return res.send(autos.lista)
});

router.get('/:brand', function (req,res) {
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



router.get('/modelo/:model/:a?', function (req,res) {
    
    let modelo = req.params.model;
    let anio = req.params.a;
    let arrayDeModelos = [];
    let arrayModelosyAnios = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if(autos.lista[i].modelo === modelo){
            arrayDeModelos.push(autos.lista[i])
        }
        if (autos.lista[i].modelo === modelo && autos.lista[i].anio >= anio ) {
            arrayModelosyAnios.push(autos.lista[i])
        }     
    }
    if (arrayDeModelos.length == 0) {
        return res.send('No hay autos del modelo '+ modelo)
    }
    
    return res.send(arrayDeModelos) && res.send(arrayModelosyAnios);
});

router.get('/:anio', function (req,res) {
    
})



module.exports = router;
