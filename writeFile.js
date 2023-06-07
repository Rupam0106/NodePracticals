const fs=require("fs");

fs.writeFileSync("greet.txt","Hello Rudra Innovative")

fs.writeFile("greet.txt","Hello Rupam",(err)=>{  
    // write file override the content of the file
    if(err){
        console.log(err);
    }else{
        console.log("file written successfully")
    }
})