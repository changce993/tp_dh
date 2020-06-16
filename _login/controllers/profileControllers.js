const express = require('express');
const path = require('path');
const fs = require('fs');

//const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

module.exports = {
    root : (req, res, next)=>{
        res.render('profile')
    }
}