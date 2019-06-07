const Controller = require('../controller');
const fs = require('fs');

class fileController extends Controller {
    constructor(req,res,next){
        super(req, res, next);
    }
    getFilesInDir(directory){
        fs.readdir(directory, (err, files) => {
            console.log(files.length);
        });
    }
}

module.exports = fileController;