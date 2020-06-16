const fs = require('fs');
const path = require('path');



const controller = {
	root: (req, res) => {
		const listaProductos = JSON.parse(fs.readFileSync('./data/productsDataBase.json'));

		let productoEncontrado = {};

		for(var i=0; i<listaProductos.length; i++){
			if(listaProductos[i].id == req.params.id){
				productoEncontrado = listaProductos[i]
			}
		}
		res.render('product', {
			producto : productoEncontrado
		})
	}
};

module.exports = controller
