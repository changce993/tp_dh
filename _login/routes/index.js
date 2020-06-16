var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

var register = require('../controllers/registerControllers');
var profile = require('../controllers/profileControllers');

var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'public/images/avatars');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
var upload = multer({storage:storage});




/* GET home page. */
router.get('/', register.root);
router.post('/register', upload.any(), register.register);

router.get('/profile', profile.root);

module.exports = router;
