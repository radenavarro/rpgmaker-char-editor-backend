const Controller = require('./controller');
const fs = require('fs');

class fileController extends Controller {
    constructor(req, res, next){
        super(req, res, next);
    }
    getFilesInDir(directory){
        fs.readdir(directory, (err, files) => {
            if(err) this.returnJson(404, "No se encontraron imagenes")
            if(files) this.returnJson(200, files)
        });
    }
}

module.exports = fileController;