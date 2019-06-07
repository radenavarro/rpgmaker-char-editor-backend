var express = require('express');
var router = express.Router();
const FileController = require('../api/controllers/fileController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hair/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('hair');
})

router.get('/skin/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('skin');
})

router.get('/eyes/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('eyes');
})

router.get('/nose/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('nose');
})

router.get('/mouth/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('mouth');
})

router.get('/clothes/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('clothes');
})

router.get('/complements/length', function(req, res, next){
  let fileController = new fileController(req, res, next);
  fileController.getFilesInDir('complements');
})

module.exports = router;
