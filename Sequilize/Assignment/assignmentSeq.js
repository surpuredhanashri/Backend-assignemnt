var sequelize = require("sequelize");
var dbConfig = require("./Dbconn");

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

Sequelize.authenticate()
  .then(() => {
    console.log("connected to DB successfully");
  })
  .catch((err) => {
    console.error("unable to connect to db, because" + err);
  })
  // .finally(() => {
  //   Sequelize.close();
  // });

 //--------------------------------------------------------------------------------------
  let studentTable = Sequelize.define(
    "studentTable",
    {
      student_id: sequelize.INTEGER,
      stream: sequelize.STRING,
      name: sequelize.STRING,
      marks: sequelize.INTEGER,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

 studentTable.sync({force:true}).then(()=>{
    console.log("table created successfully");
})
.finally(()=>{
    Sequelize.close();
})
 //--------------------------------------------------------------------------------------

  studentTable
  .create({
    student_id: 106,
    stream: "Civil",
    name: "Dhanashri",
    marks: 300,
  })
  .then((data) => {
    console.log("Record insert successfully...");
  })
  .catch((err) => {
    console.log("there is an error" + err);
  });
  
  //--------------------------------------------------------------------------------------
  //inserting more than one record into the table at a time.
  // studentTable.bulkCreate([
  //   {student_id:1, name:'Rahul', stream:'CSE',marks:450},
  //   {student_id:2, name:'Rohit', stream:'Arts',marks:500},
  //   {student_id:3, name:'Himanshu', stream:'Science',marks:450},
  // ]).then((data)=>{
  //   console.log("Records inserted into the table successfully");
  // }).catch((err)=>{
  //   console.log("The error is"+err);
  // })
  
   //--------------------------------------------------------------------------------------
//    let MovieTable = Sequelize.define(
//     "movieTable",
//     {
//       Movie_id: {
//           primarykey: true,
//           type: sequelize.INTEGER
//       },
//       MovieName: sequelize.STRING,
//       TypeOfMovie: sequelize.STRING,
//       Language: sequelize.STRING,
//       Cast: sequelize.STRING
//     },
//     {
//       timestamps: false,
//       freezeTableName: true,
//     }
//   );

//   MovieTable.sync().then(()=>{
//     console.log("table created successfully");
// })
// .finally(()=>{
//     Sequelize.close();
// })

//--------------------------------------------------------------------------------------
//  MovieTable.bulkCreate([
//     { Movie_id:1, MovieName:'3Idiots', TypeOfMovie:'Educational',Language:'Hindi',Cast:'Amir'},
//     { Movie_id:2, MovieName:'Sidhat', TypeOfMovie:'Love',Language:'Hindi',Cast:'Radhika'},
//     { Movie_id:3, MovieName:'Raaz', TypeOfMovie:'Horror',Language:'English',Cast:'Imraan Hashmi'},
//   ]).then((data)=>{
//     console.log("Records inserted into the table successfully");
//   }).catch((err)=>{
//     console.log("The error is"+err);
//   })

//   MovieTable.findAll()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error is : " + err);
//   });

  //---------------------------------------------------------------------------------------------

  let EmployeeTable = Sequelize.define(
    "EmployeeTable",
    {
      EmpId: {
          primarykey: true,
          type: sequelize.INTEGER
      },
      Name: sequelize.STRING,
      Department: sequelize.STRING
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

//   EmployeeTable.sync().then(()=>{
//     console.log("table created successfully");
// })
// .finally(()=>{
//     Sequelize.close();
// })

// EmployeeTable.bulkCreate([
//   { EmpId:101, Name:'Rahul', Department:'CSE'},
//   { EmpId:102, Name:'Shri', Department:'ETC'},
//   { EmpId:103, Name:'rohit', Department:'IT'},
// ]).then((data)=>{
//   console.log("Records inserted into the table successfully");
// }).catch((err)=>{
//   console.log("The error is"+err);
// })

// EmployeeTable.findAll({raw:true})
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log("Error is : " + err);
// });


  //---------------------------------------------------------------------------------------------

  // EmployeeTable.findByPk(1)
  // .then((data) => {
  //   console.log(data.dataValues);
  // })
  // .catch((err) => {
  //   console.error("Error is : " + err);
  // });

  //---------------------------------------------------------------------------------------------

  //adding where clause to select query
// EmployeeTable.findAll({where:{Name:'Rahul'},raw:true}).then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.error("Error is : "+err)
// });

 //---------------------------------------------------------------------------------------------

//  EmployeeTable.findAll({attributes:['Name','Department'],raw:true}).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("Error is : " + err)
// });

//---------------------------------------------------------------------------------------------
 
// EmployeeTable.findAll({attributes:['Name','Department'],where:{Department:'CSE'},raw:true}).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("Error is : " + err)
// });


//---------------------------------------------------------------------------------------------
//  EmployeeTable.findAndCountAll().then((data)=>{
//   console.log("Number of records are:"+ data.count);
// }).catch((err)=>{
//   console.log("error is "+err);
// });

//-------------------------------------------------------------------------------------------------

// select * from ProductSequelize order by ProductName

// EmployeeTable.findAll({order:['Name'],raw:true}).then((data)=>{
//   console.log(data);
// }).catch ((err)=>{
//   console.error("error is:"+err);
// });

//-----------------------------------------------------------------------------------------------

// const Op = sequelize.Op;
// EmployeeTable.findAll ({
//   where:{
//     Name:{
//       [Op.like]:'%S%'
//     }
//   },raw:true
// }).then ((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.error("error is:"+err);
// });

//-----------------------------------------------------------------------------------------------

// const Op = sequelize.Op;
// studentTable
//   .findAll({
//     where: {
//       [Op.or]: [{ stream: "CSE" }, { marks: 3200 }],
//     },
//     raw: true,
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("error is" + err);
//   });

  //-----------------------------------------------------------------------------------------------

//   let productObj = EmployeeTable.build({EmpId:104, Name:'Himanshu',Department:'Business'});
//  productObj.save();

//-----------------------------------------------------------------------------------------------


// EmployeeTable.update(
//   {Name:'Rahul Kumar'},
//   {where :{Name:'Rahul'}}
// ).then((data)=>{
//   console.log("Record updated successfully");
// }).catch(err=>{
//   console.error("error is "+ err);
// });

//-----------------------------------------------------------------------------------------------

//deleting a record
// EmployeeTable.destroy({
//   where: { Name: "Rohit" },
// })
//   .then((data) => {
//     console.log("records deleted successfully...");
//   })
//   .catch((err) => {
//     console.error("error is :" + err);
//   });

//-----------------------------------------------------------------------------------------------
//drop the table

// studentTable.drop().then(()=>{
//   console.log("Table dropped");
// })

//---------------------------------------------------------------------------------------


// CREATE TABLE Customer(
//   ID int NOT NULL,
//   Name_Customer varchar(50),
//   Location varchar(50),
//   PRIMARY KEY (ID)
//   );
 
//   CREATE TABLE Product(
//    ProductNumber int NOT NULL,
//    ProductDescription varchar (50),
//   Cost int,
//   ID int,
//   PRIMARY KEY (ProductNumber),
//   FOREIGN KEY (ID) REFERENCES Customer1 (ID)
//   );
 
  
//   INSERT INTO Customer VALUE(1,'Rahul Kumar','Delhi');
//   INSERT INTO Customer VALUE(2,'Rohit','Haryana');
//   INSERT INTO Customer VALUE(3,'Shree','kolhapur');
 
//   INSERT INTO Product VALUE(101,'TV',20000,1);
//   INSERT INTO Product VALUE(102,'AC',40000,2);
//   INSERT INTO Product VALUE(103,'Laptop',50000,3);
 
//   SELECT c1.Name_Customer,c2.ProductDescription FROM Customer1 c1, ProductOrders c2 WHERE  c1.ID=c2.ID;

