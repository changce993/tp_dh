const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		// Do the magic

		res.render('products', {
			products: products
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		let productId = req.params.productId;
		
		let productFound = products.find(function(prod){
			return prod.id == productId
		})

		res.render('detail', {
			found : productFound
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newId = products[products.length-1]
		let newProduct = {

			name: req.body.name,
			price: req.body.price,
			id: newId.id+1,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		};

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products));

		res.send(products)
	},

	// Update - Form to edit
	edit: (req, res) => {

		let productToEdit = products.filter(function(prod){
			return prod.id == req.params.productId
		});

		res.render('product-edit-form', {
			productToEdit : productToEdit 
		})
	},
	// Update - Method to update
	update: (req, res) => {

		products.forEach((prod)=>{
			if(prod.id == req.params.productId){
				prod.name = req.body.name
				prod.price = req.body.price
				prod.category = req.body.category
				prod.discount = req.body.discount
				prod.description = req.body.description
			}
		});

		
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		
		let productId = req.params.productId;
		
		let productFound = products.find(function(prod){
			return prod.id == productId
		})

		res.render('detail', {
			found : productFound
		})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let newProducts = products.filter(function(e){
			return e.id != req.params.productId
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts));

		res.render('products', {
			products: newProducts
		})

	}
};

module.exports = controller;