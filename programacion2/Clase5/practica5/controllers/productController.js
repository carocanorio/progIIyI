const autos = require('../db/index');

const productosControlador = {
    index: function (req,res) {
        return res.render('autos', {
            listaAutos: autos.lista //lleva a la vista 
        }); 
    },

    marca: function (req,res) {
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
    },

    color: function (req,res) {
    
        let color = req.params.color;
        let arrayDeColores = [];
    
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].color === color) {
                arrayDeColores.push(autos.lista[i])
            }      
        }
        if (arrayDeColores.length > 0) {
            return res.render('autos', {
                listaAutos: arrayDeColores
            })
        }else{
            return res.send('No hay autos del color '+ color)
        }
    
    },

    anio: function (req,res) {
        let year = req.params.year;
        let arrayDeAnios = [];
    
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].anio == year) {
                arrayDeAnios.push(autos.lista[i])
            }    
        }
    
        if (arrayDeAnios.length == 0) {
            return res.send('No hay autos del año ' +year)
        }
    
        return res.send(arrayDeAnios)
    },
};

module.exports = productosControlador;