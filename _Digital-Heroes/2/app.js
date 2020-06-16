const express = require('express');
const app = express();
const fs = require('fs')
const main = require('./routes/main.js')
const heroes = require('./routes/heroes.js')

app.listen(3030, () => console.log('servidor prendido'));

app.use('/', main);
app.use('/heroes', heroes);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
