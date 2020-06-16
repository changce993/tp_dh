const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

module.exports = {
    root : (req, res, next)=>{
        res.render('register')
    },
    register : (req, res, next)=>{
        
        let name = req.body.nombre;
        let lastName = req.body.apellido;
        let email = req.body.email;
        let avatar = req.files[0].filename;
        let password = bcrypt.hashSync(req.body.contrasenia, 10);
       
        /*
        let password = function(){
            if( req.body.contrasenia === req.body.repetir-contrasenia ){
                return bcrypt.hashSync(req.body.contrasenia, 10);
            }
        };
        */
       
       let user = {
           name : name,
           lastName : lastName,
           email : email,
           password : password,
           avatar : avatar
        };
        
        let users = JSON.parse(fs.readFileSync('./data/users.json', {encoding:'utf-8'}));
        users.push(user)
        let userJSON = JSON.stringify(users);
        fs.writeFileSync('./data/users.json', userJSON)

        let userView = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatar
        }

        res.render('profile', {
            user: userView
        })
    }
}