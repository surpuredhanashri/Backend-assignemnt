const fs = require ("fs")

fs.readFile("input.txt",function(data,err){
    if(err) console.log("error",err)
    else  console.log("data",data)
})



