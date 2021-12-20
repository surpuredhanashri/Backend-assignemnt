var sequelize = require("sequelize");
var dbConfig = require("./db.config");

var Sequelize = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
// --------------------------------------------------------------------------------------
//TBALE DEFINE
// let userSequelize = Sequelize.define("userSequelize",{
//     userid:sequelize.STRING,
//     password:sequelize.STRING,
//     role:sequelize.STRING
// },{
//     timestamps:false,
//     freezeTableName:true,
// })

// userSequelize.sync({force:true}).then(()=>{
//     console.log("table created successfully");
// })
// .finally(()=>{
//     Sequelize.close();
// })

// --------------------------------------------------------------------------------------
//defining the product table structure

// let productTable = Sequelize.define('Productsequelize', {
//   Product_id: {
//     primarykey: true,
//     type: sequelize.INTEGER
//   },
//   Product_name: sequelize.STRING,
//   Description: sequelize.STRING,
//   cost: sequelize.INTEGER
// }, {
//   timestamps: false,
//   freezeTableName: true
// });
// --------------------------------------------------------------------------------------
// productTable.sync().then(()=>{
//   console.log("table created successfully");
// }).catch((err)=>{
//   console.log("error is"+err);
// }).finally(()=>{
//   Sequelize.close();
// })



// let productTable = Sequelize.define('Productsequelize', {
//   Product_id: {
//     primarykey: true,
//     type: sequelize.INTEGER
//   },
//   Product_name: sequelize.STRING,
//   Description: sequelize.STRING,
//   cost: sequelize.INTEGER
// }, {
//   timestamps: false,
//   freezeTableName: true
// });
// --------------------------------------------------------------------------------------
// productTable.findByPk (1).then((data)=>{
//   console.log(data.dataValues);
// }).catch((err)=>{
//   console.log("error is:"+err);
// });
// --------------------------------------------------------------------------------------
//display all the rows
//select * from ProductSequelize
// productTable.findByPk(1).then((data)=>{
//   console.log(data.dataValues)
// }).catch((err)=>{
//   console.error("Error is : "+err)
// });
// --------------------------------------------------------------------------------------
// productTable.findAll({raw:true}).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log("Error is : " +err);
// })
// --------------------------------------------------------------------------------------
//adding where clause to select query
// productTable.findAll({where:{Product_name:'Mobile'},raw:true}).then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.error("Error is : "+err)
// });

// --------------------------------------------------------------------------------------

//display the selected columns in Select
//select ProductDesc, cost from ProductSequelize

// productTable.findAll({attributes:['Product_name','cost'],raw:true}).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("Error is : " + err)
// });

// --------------------------------------------------------------------------------------

//select productDesc. cost from productsequelize where productDesc = 'Mobile'

// productTable.findAll({attributes:['Product_name','cost'],where:{Product_name:'Mobile'},raw:true}).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("Error is : " + err)
// });

// --------------------------------------------------------------------------------------

//select count(*) from ProductSequelize

// productTable.findAndCountAll().then((data)=>{
//   console.log("Number of records are:"+ data.count);
// }).catch((err)=>{
//   console.log("error is "+err);
// });

// --------------------------------------------------------------------------------------
//add a where clause to count(*)
//select count(*) from ProductSequelize where ProductName = 'TV'

// productTable.findAndCountAll({where:{Product_name:'TV'}}).then((data)=>{
//   console.log("Number of records are :"+data.count);
// }).catch((err)=>{
//   console.error("error is"+err);
// })


//--------------------------------------------------------------------------------------
//sort the data
// select * from ProductSequelize order by ProductName

// productTable.findAll({order:['Product_name'],raw:true}).then((data)=>{
//   console.log(data);
// }).catch ((err)=>{
//   console.error("error is:"+err);
// });

//sorting in descending order
// --------------------------------------------------------------------------------------
// productTable.findAll({order:[['Product_name','DESC']],raw:true}).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("error is:" + err);
// });

//like in select
// ----------------------------------------------------------------------------------------
//const Op = sequelize.Op;
// productTable.findAll ({
//   where:{
//     Product_name:{
//       [Op.like]:'%AC'
//     }
//   },raw:true
// }).then ((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("error is:"+err);
// });

// --------------------------------------------------------------------------------------
//executing sql queries in sequelize
// Sequelize.query("select * from `ProductSequelize`",{type:sequelize.QueryTypes.SELECT}).then(
//   function(data){
//     console.log(data);
//   }
// )


//--------------------------------------------------------------------------------------
//Adding or condition to select

// const Op = sequelize.Op;
// productTable.findAll({
//   where:{
//     [Op.or]:[{Product_name:'Mobile'},{cost:3200}]
//   },
//   raw:true
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("error is" + err);
// });


//--------------------------------------------------------------------------------------
//inseert a record into the table

// productTable.create({
//   Product_id:105,
//   Product_name:'Routers',
//   Description:"tp-link Routers",
//   cost:3000
// }).then((data)=>{
//   console.log("Record insert successfully...");
// }).catch((err)=>{
//   console.log("there is an error"+err);
// })

//--------------------------------------------------------------------------------------

//insert a record in the db using build() and save()

// let productObj = productTable.build({Product_id:106, Product_name:'Sports watch',Description:'MI sports watch',cost:10000});
// productObj.save();


//--------------------------------------------------------------------------------------
//inserting more than one record into the table at a time.
// productTable.bulkCreate([
//   {Product_id:106, Product_name:'Alexa', Description:'Nice music player',cost:4500},
//   {Product_id:107, Product_name:'Dolby Digital speaker', Description:'dolby digital ',cost:8000},
//   {Product_id:108, Product_name:'Fan', Description:'Nice cooling',cost:10000},
// ]).then((data)=>{
//   console.log("Records inserted into the table successfully");
// }).catch((err)=>{
//   console.log("The error is"+err);
// })

//-----------------------------------------------------------------------------------------
// update 

// productTable.update(
//   {Product_name:'Amazon Alexa'},
//   {where :{Product_name:'Alexa'}}
// ).then((data)=>{
//   console.log("Record updated successfully");
// }).catch(err=>{
//   console.error("error is "+ err);
// });

//-----------------------------------------------------------------------------------------

//deleting a record
// productTable.destroy({
//   where:{Product_name:'Sports watch'}
// }).then((data)=>{
//   console.log("records deleted successfully...");
// }).catch(err=>{
//   console.error("error is :"+err);
// });

//-----------------------------------------------------------------------------------------
//drop the table
// productTable.drop().then(()=>{
//   console.log("Table dropped");
// })

// --------------------------------------------------------------------------------------
//FOR AUTHENTICATION

// Sequelize.authenticate()
//   .then(() => {
//     console.log("connected to DB successfully");
//   })
//   .catch((err) => {
//     console.error("unable to connect to db, because" + err);
//   })
//   .finally(() => {
//     Sequelize.close();
//   });