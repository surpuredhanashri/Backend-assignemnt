const Sequelize = require('sequelize');

const sequelize = new Sequelize('mtxmysql','root','RAHUL@123021',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:10000
    }
});

sequelize.authenticate().then(()=>{
    console.log("connceted");
})
.catch(err=>{
    console.log("error"+err);
});

const Users = sequelize.define("users",{
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        defaultValue:'abc@gmail.com'
    },
    gender:{
        type:Sequelize.STRING
        }
 });

 Users.sync({force:true}).then( () =>{
    console.log("Table created successfully..");
}).finally ( () => {
    sequelize.close();
})

// const db = {};
// db.sequelize = Sequelize;
// db.sequelize = sequelize;

// db.users = require('./user')(sequelize.DataTypes);

// db.sequelize.sync({force:false}).then(()=>{
//     console.log("yes re sync");
// })

