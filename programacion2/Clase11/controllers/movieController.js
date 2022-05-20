const db = require('../database/models');

const Movie = db.Movie; //Movie es el alias. Importante escribirlo bien!

const movieController = {
  findAll: (req, res) => {
    Movie
      .findAll({
          /* where : [{ awards : 1 }, { length : 120}] */
         /*  order : [["title", "ASC"]] */
         /* limit : 5,
         offset : 3 */
      })
      .then((result) => {
        
         return res.render("movies", { listaPeliculas: result });   
      });
  },
  show : (req, res) => {
    let id = req.params.id;
    Movie.findByPk(id).then((result) =>{

      let date = result.release_date;
      let fechaFormateada = new Date(date).toISOString().slice(0,10);

      let movie = {
        title : result.title,
        rating : result.rating,
        awards : result.awards,
        release_date : fechaFormateada,
        length : result.length,
        genre_id : result.genre_id
      }
      
      return res.render("moviesDetails", {
          movie : movie
      })
    })
  },
  showOne : (req,res) => {
    let buscada = req.query.pelicula;
    Movie.findOne({
      where : 
      /* { title : buscada} */
      { title : {[op.like] : "%" + buscada
      }}

    }).then((result) => {
      res.send(result)
    })
  },
  create: (req,res) => {
    return res.render("register")
  },
  store: (req,res) => {
    let info = req.body; //Captura la informacion

    let pelicula = { //Tiene las propiedades del modelo
      title: info.titulo,
      rating: info.clasificacion,
      awards: info.premios,
      release_date: info.fecha,
      length: info.duracion,
      genre_id: info.genero,
    }

    Movie.create(pelicula) //Es almacenada en la db, llamo 
    .then((result) => { //resuelve
      return res.redirect('/movies/all')
    }).catch((err) => {
      return res.send("Hay un error" + err)
    });
    
  },
  update: (req,res) => {
    let info = req.body;
    
    let idParaEditar = req.params.id;

    let pelicula = { //Tiene las propiedades del modelo
      title: info.titulo,
      rating: info.valuacion,
      awards: info.premios,
      release_date: info.fecha,
      length: info.duracion,
      genre_id: info.genero,
    };

    let filtro = {
      where: {
        id: idParaEditar
      }
    }

    Movie.update(pelicula, filtro)
    .then((result) => {
      return res.redirect('/movies/all')
    }).catch((err) => {
      return res.send('Hay un error' + err)
    });
  },
  edit: (req,res) => {

    let id = req.params.id; //Uso params pq el parametro llega por la ruta

    Movie.findByPk(id)
    .then((result) =>{

      let date = result.release_date;
      let fechaFormateada = new Date(date).toISOString().slice(0,10);

      let movie = {
        title : result.title,
        rating : result.rating,
        awards : result.awards,
        release_date : fechaFormateada,
        length : result.length,
        genre_id : result.genre_id,
        id: result.id,
      };
      
      return res.render("movieEdit", {
          movie : movie
      })
    })

    return res.render('movieEdit')
  },
  destroy: (req,res) => {

  },

}; 

module.exports = movieController