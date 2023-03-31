const {sequelize} = require("../../connection");
const {TopicsModel} = require("../../model/topics/topics.model");
const TopicsService = require('../../service/topics/topics.service');

const listar = async function(req, res) {
    console.log("listar topicos");
    try{
        const topics = await sequelize.listar(req.query.filtro || "");
    if(themes){
            res.json({
                success: true,
                topicos : topics
            });
        }else{
            res.json({
                success : true,
                topicos : []
            });
        }
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

const consultarPorCodigo = async function(req, res) {
    console.log("consultar 1 tema por codigo");
    try{
        const topicosModelResult = await TopicsService.findByPk(req.params.filtro||``);

        if(topicosModelResult){
            res.json({
                success: true,
                topic : topicosModelResult
            });
        }else{
            res.json({
                success : true,
                topic : null
            });
        }
    }catch(error){
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};


const actualizar = async function(req, res) {
    console.log("actualizar topicos"); 
    let topicoRetorno=null;
    try{
        let  topicoRetorno= await TopicsService.actualizar(req.body.id,
            req.body.create_date,
            req.body.name,
            req.body.topic_id,
            req.body.order,
            req.body.priority,
            req.body.color,
            req.body.owner_user_id
        );

        res.json({
            success: true,
            topic: topicoRetorno,
        })
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

const eliminar = async function(req, res) {
    console.log("eliminar topicos");
    try{
        await sequelize.eliminar(req.params.filtro ||``);
        res.json({
            success: true
        });
    }catch(error){
        res.json({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    listar, actualizar, eliminar, busquedaPorCodigo: consultarPorCodigo,
};