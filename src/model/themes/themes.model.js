const { DataTypes } = require("sequelize");
const { sequelize } = require("../../connection");

const ThemesModel = sequelize.define("themes",{
 id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    primarykey: true, 
    autoIncrement: true,
 },
 create_date:{
    type: DataTypes.DATE, 
    allowNull: false
 },
 name:{
    type: DataTypes.STRING, 
    allowNull: true
 },
 description:{
    type: DataTypes.STRING, 
    allowNull: true
 },
 keywords:{
    type: DataTypes.STRING,
    allowNull: true
 },
 owner_user_id:{
    type: DataTypes.INTEGER,
    allowNull: true
 }
},{
    tableName: 'themes', 
    timestamps: false
});

module.exports= {
    ThemesModel
};

