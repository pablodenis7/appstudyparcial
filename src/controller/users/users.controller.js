const { sequelize } = require("../../connection");
const { UserModel } = require("../../model/users/users.model");
const UserService = require("../../service/users/users.service");


const listar = async function (req, res) {
    console.log("listar usuarios controller");
    try {
      //el or es para que si retorna undefined me traiga vacio
      const users = await UserService.listar(req.query.filtro || "");
  
      if (users) {

        //en users[0] se encuentra el listado de lo que se recupera desde el sql
        res.json({
          success: true,
          usuarios: users,
        });
      } else {
        res.json({
          success: true,
          usuarios: [],
        });
      }
    } catch (error) {
        console.log(error);
        res.json({
        success: false,
        error: error.message,
      });
    }
    //res.json(users);
  };

const actualizar = async function(req, res) {
    console.log("actualizar usuarios");
    let usuarioRetorno = null;
    

    try{

        usuarioRetorno = await UserService.actualizar(req.body.id,
                                                      req.body.name,
                                                      req.body.last_name,
                                                      req.body.avatar,
                                                      req.body.email,
                                                      req.body.password,
                                                      req.body.deleted);
        res.json({
            success: true,
            user: usuarioRetorno,
        });
    }catch(error){
        console.log(error);
        res.json({
            success: false,
            error: error.message,
        });
    }
};

const eliminar = async function(req, res) {
    console.log("eliminar usuarios");
    try{
        await UserService.eliminar(req.params.filtro || "");
        res.json({
            success: true,
        });
    }catch(error){
        console.log(error);
        res.json({
            success: false,
            error: error.message,
        });
    }
};

const consultarPorCodigo = async function(req, res) {
    console.log("consultar  1 usuario por codigo");
    try{
        const UserModelResult = await UserService.busquedaPorCodigo(req.params.filtro || "");

        if(UserModelResult){
            res.json({
                success: true,
                usuario : UserModelResult,
            });
        }else{
            res.json({
                success : true,
                usuario : [],
            });
        }
    }catch(error){
        console.log(error);
        res.json({
            success: false,
            error: error.message,
        });
    }
};
// lo que queda dentro de una llave es json
module.exports = {
    listar, actualizar, eliminar, busquedaPorCodigo: consultarPorCodigo,
};