const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    index: function(req,res){
        db.peliculas.findAll()
            .then(function(result){
                res.render('movies', {
                    peliculas: result
                })
            })
            .catch(function(error){
                res.send(error)
            })
    },
    detail: function(req, res){
        db.peliculas.findByPk(req.params.id)
            .then(function(result){
                res.render('movies-detail', {
                    pelicula: result
                })
            })

    },
    formEdit: function(req,res){
        db.peliculas.findByPk(req.params.id)
            .then(function(result){
                res.render('form-edit', {
                    pelicula: result
                })
            })
    },
    edit: function(req,res){


        db.peliculas.update({
            title: req.body.title,
            awards: req.body.awards,
            rating: req.body.rating,
            length: req.body.length,
            release_date: req.body.release_date
        },{
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies/detail/' + req.params.id)
    },
    formCreate: function(req,res){
        res.render('create')
    },
    create: function(req,res){
        db.peliculas.create({
            title: req.body.title,
            awards: req.body.awards,
            rating: req.body.rating,
            length: req.body.length,
            release_date: req.body.release_date
        })

       res.redirect('/movies')
    },
    destroy: function(req,res){
        db.peliculas.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/movies')
    }
}