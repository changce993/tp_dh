const express = require('express');
const fs = require('fs');
//const heroesJSON = JSON.parse(fs.readFileSync('../data/heroes.json'));
var heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
//const heroes = require('../data/heroes.json');

module.exports = {
    index: function(req, res){
        for(var i = 0; i < heroes.length; i++){
            var id = heroes[i].id;
            var nombre = heroes[i].nombre;
            var profesion = heroes[i].profesion;
            var pais = heroes[i].pais;
            var resenia = heroes[i].resenia;

            console.log(
                'id: ' + id + '\n'+
                'nombre: ' + nombre + '\n'+
                'profesion: ' + profesion + '\n'+
                'pais: ' + pais + '\n'+
                'resenia: ' + resenia + '\n' + '\n')
        }
            res.send('En consola te muestro la data bb ;)')
    },
    heroDetail: function(req, res){
        let idHeroe = req.params.idHeroe;
        let heroeEncontrado = '';
        
        for( var i = 0; i < heroes.length; i++){
            if(idHeroe == heroes[i].id){
                heroeEncontrado = heroes[i]
            }
        }
        res.send(`Hola, mi nombre es ${heroeEncontrado.nombre} y soy ${heroeEncontrado.profesion}`)
    },
    bioDetail: (req,res) => {
        var heroe = heroes.find(function(element){
            return element.id == req.params.id;
        });
        
        if(heroe != undefined && req.params.ok == 'ok'){
            res.send(heroe.nombre + '<br>' + heroe.resenia);
        } else if(heroe != undefined){
            res.send(heroe.nombre + '<br>Lamento que no desees saber más de mi :(')
        } else{
            res.send('no se enontro el heroe para buscar su biografia.')
        };
    }
}
