// const { DataTypes } = require("sequelize/dist")

//const { DataTypes } = require("sequelize/dist")


module.exports = (Sequelize,DataTypes)=>{
    const Users = Sequelize.define("users",{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'abc@gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
    });

}