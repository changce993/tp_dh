const fs = require('fs');
const path = require('path');

const userLogsFilePath = path.join(__dirname, '../logs/userLogs.txt');

module.exports = function (req, res, next){
    fs.appendFileSync(userLogsFilePath, `El usuario ingreso a la ruta ${req.url} \n`);
    next()
}