const topicsController = require('../../controller/topics/topics.controller');
const topicsController = require('../../controller/topics/topics.controller');

module.exports= function (app){
    app.get("/topics/list", topicsController.listar);
    app.get("/topics/:id", topicsController.busquedaPorCodigo);
    app.put("/topics/update", topicsController.actualizar);
    app.delete("/topics/delete/:id", topicsController.eliminar);
}
