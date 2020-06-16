const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		// Do the magic

		let productVisited = products.filter(function(prod){
			return prod.category == 'visited'
		})

		let ofertas = products.filter(function(prod){
			return prod.category == 'in-sale'
		})

		res.render('index', {
			visitados : productVisited,
			ofertas : ofertas
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
