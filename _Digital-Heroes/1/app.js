// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
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
})

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req, res) => {
	let heroe = heroes.find(function(hero){
		return hero.id == req.params.id
	})
	
	res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`)
	
});


// Acá lo primero será encontrar al héroe que corresponda
// Si se encuentra al héroe se envía el nombre y su profesión
// Si NO se encuentra se envía el mensaje de no encontrado
// res.send(`Hola, mi nombre es ${heroeEncontrado.nombre} y soy ${heroeEncontrado.profesion}`)



// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
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

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
);

// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});