const express = require('express');
const app = express();

const port = 8080;
require('./index');

app.get("/",(req,res)=>{
    res.send("home page");
});

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`);
})