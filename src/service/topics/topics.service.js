const { sequelize }= require("../../connection");
const{ TopicsModel } = require("../../model/topics/topics.model");

const listar = async function (textoBuscar) {
    console.log("listar topicos");
    try {
      const topics = await sequelize.query(`SELECT * 
        FROM topics 
        WHERE 1=1
        AND UPPER(name) LIKE UPPER ('%${textoBuscar}%')
        ORDER BY id`);
  
      if (topics && topics[0]) {
        return topics[0];
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

const actualizar = async function(
    id,
    create_date,
    name,
    topic_id,
    order,
    priority,
    color,
    owner_user_id
    ) {
    console.log("actualizar topicos");
    let topicoRetorno = null;
    const data = { id,
        create_date,
        name,
        topic_id,
        order,
        priority,
        color,
        owner_user_id};
   // const id = req.body.id;

    try{
        let topicoExiste = null;

        if(id){
            topicoExiste = await TopicsModel.findByPk(id);
        }

        if(topicoExiste){
                topicoRetorno = await TopicsModel.update(data, {where: {id : id}});
                topicoRetorno = data;
        }else{
            topicoRetorno = await TopicsModel.create(data);
        }

       return topicoRetorno;
    }catch(error){
       console.log(error)
       throw error;
    }
};

const eliminar = async function(codigo) {
    console.log("eliminar topicos");
    try{
        TopicsModel.destroy({where : {id:codigo, topic_id}},{truncate:false});
        
    }catch(error){
        console.log(error)
       throw error;
    }
};

const consultarPorCodigo = async function(codigo) {
    console.log("consultar 1 topico por codigo");
    try{
        const topicosModelResult = await TopicsModel.findByPk(codigo);
        if(topicosModelResult){
            return topicosModelResult;
        }else{ topicosModelResult
           return[];
        }
    }catch(error){
        console.log(error);
            throw error;
        }
    };

module.exports = {
    listar, actualizar, eliminar, consultarPorCodigo
};