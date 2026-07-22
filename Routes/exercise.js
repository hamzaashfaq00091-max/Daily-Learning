const path = require('path');
const fs = require('fs');

const path_dir=path.join(__dirname,"..");

console.log(path_dir);



const fileread=fs.readdir(path_dir,(err,files)=>{
    if(err){
        console.log("Error reading the directory:", err);
    }
    else{
        console.log("Directory content:", files);
    }
});

console.log(path.join(__dirname, "blog.js"));

