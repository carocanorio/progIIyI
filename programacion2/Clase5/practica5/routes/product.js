const express = require('express');
const router = express.Router(); //ejecucion del metodo router de express
const autos = require('../db/index'); //importo modulo a requerir
const productosController = require('../controllers/productController.js');

router.get('/', productosController.index);

router.get('/marca/:brand', productosController.marca);

router.get('/color/:color', productosController.color);

/*router.get('/modelo/:model/:anio?', function (req,res) {
    let modelo = req.params.model;
    let anio = req.params.anio
    let arrayDeModelos = [];

    for (let i = 0; i < autos.lista.length; i++) {
        if(autos.lista[i].modelo === modelo && anio == undefined){
            arrayDeModelos.push(autos.lista[i])
        } else if (autos.lista[i].modelo === modelo && anio != undefined && anio <= autos.lista[i].anio) {
            arrayDeModelos.push(autos.lista[i])
        }
    }    

    if (arrayDeModelos.length == 0) {
        return res.send('No hay autos del modelo '+ modelo)
    }else{
        return res.send(arrayDeModelos)
    }

});*/

router.get('/anio/:year', productosController.anio);

module.exports = router;
