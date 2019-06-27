var express = require('express');
var router = express.Router();
const FileController = require('../api/controllers/fileController');
var path = require('path');
var imagePath = path.join(path.resolve(__dirname, '..'), '/public/images/');
// Attribute config file
const CharObj = require('../config/portraitConfig.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET data from config file
router.get('/config', function(req, res, next){
  let fileController = new FileController(req, res, next)
  fileController.returnJson(200, CharObj)
})

/* GET number of common attribute images in each directory */

router.get('/hair/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + "hairs");
})

router.get('/skin/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'skins');
})

router.get('/ears/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'ears');
})

router.get('/head/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'heads');
})

router.get('/eyes/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'eyes');
})

router.get('/eyecolor/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'eyecolors');
})

router.get('/nose/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'noses');
})

router.get('/mouth/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'mouths');
})

router.get('/clothes/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'clothes');
})

router.get('/complements/length', function(req, res, next){
  let fileController = new FileController(req, res, next);
  fileController.getFilesInDir(imagePath + 'complements');
})

module.exports = router;