const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    allMovies: (req, res, next)=>{
        sequelize.query('SELECT * FROM movies')
        .then((movies)=>{
            console.log(movies)
            let peliculas = movies

            res.render('home', { peliculas : peliculas })
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    detailMovie: (req, res, next)=>{
        sequelize.query('SELECT * FROM movies left join genres on movies.genre_id = genres.id  where movies.id =' + req.params.id)
        .then((movies)=>{
            console.log(movies)
            let peliculas = movies

            res.render('detail-movie', { peliculas : peliculas })
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    newMovies: (req, res, next)=>{
        sequelize.query('select * from movies order by release_date desc limit 5')
        .then((movies)=>{
            console.log(movies)
            let peliculas = movies

            res.render('new-movies', { peliculas : peliculas })
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    recommended: (req, res, next)=>{
        sequelize.query('select * from movies where rating > 8 order by rating desc')
        .then((movies)=>{
            console.log(movies)
            let peliculas = movies

            res.render('recommended', { peliculas : peliculas })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}



