const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res, next) => {
		res.render('link');
	},
	login: (req, res, next) => {
		res.send(`Bienvenido ${req.query.user}`)
	}
};

module.exports = controller
