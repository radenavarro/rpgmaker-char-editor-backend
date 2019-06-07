class controller {
    constructor(req,res,next){
        this.req=req;
        this.res=res;
        this.next=next;
    }
    returnJson(code, param){
        this.res.statusCode = code;
        this.res.header('Access-Control-Allow-Origin', '*');//CORS
        this.res.send(param);
    }
}

module.exports = controller;