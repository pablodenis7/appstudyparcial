const userController = require("../../controller/users/users.controller");

module.exports= function (app){
    app.get("/users/list", userController.listar);
    app.get("/users/:id", userController.busquedaPorCodigo);
    app.put("/users/update", userController.actualizar);
    app.delete("/users/delete/:id", userController.eliminar);
}


