const fs = require('fs');
const path = require('path');

const listaProductos = JSON.parse(fs.readFileSync('./data/productsDataBase.json'))

const controller = {
	root: (req, res) => {
		var salen = listaProductos.filter(function(prod){
			return prod.category == 'in-sale'
		})

		var visitados = listaProductos.filter(function(prod){
			return prod.category == 'visited'
		})


		res.render('index', {
			titulo: 'Home',
			salen: salen,
			visitados: visitados
		})
	}
};

module.exports = controller