const path=require("path");
 const fs = require("fs");


const path_dir=path.join(__dirname,"Exercise");
console.log(path_dir);


fs.readdir(path_dir,(err,files)=>{
    if(err){
        console.log("Error reading the directory:",err);
    }
    else{
        console.log("Directory Content:",files);

        for(const item of files){
             const fileExtension=path.extname(item).slice(1);

             if(fileExtension===""){
                continue;
             }
             if(fileExtension==="js" || fileExtension==="json"){
                continue;
             }

             const folderpath=path.join(path_dir,fileExtension);
              if(!fs.existsSync(folderpath)){
                fs.mkdirSync(folderpath);
              }



              const oldpath=path.join(path_dir,item);
              const newpath=path.join(folderpath,item);

              fs.renameSync(oldpath,newpath);
              console.log(`${item} moved to ${fileExtension} folder`);
        }
    }
})