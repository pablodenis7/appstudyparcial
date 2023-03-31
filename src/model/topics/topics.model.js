const { DataTypes } = require("sequelize");
const { sequelize } = require("../../connection");

const TopicsModel = sequelize.define("topics",{
 id: {
    type: DataTypes.INTEGER,
    allowNull: false, primarykey: true, autoIncrement: true,
 },
 create_date:{
    type: DataTypes.TIME, allowNull: false
 },
 name:{
    type: DataTypes.STRING, allowNull: true
 },
 topic_id:{
    type: DataTypes.INTEGER, allowNull: true
 },
 order:{
    type: DataTypes.INTEGER, allowNull: true
 },
 priority:{
    type: DataTypes.INTEGER, allowNull: true
 },
 color:{
    type: DataTypes.STRING, allowNull: true
 },
 owner_user_id:{
    type: DataTypes.INTEGER, allowNull: true
 }
},{
    tableName: 'topics', 
    timestamps: false
});

module.exports = {
    TopicsModel
};