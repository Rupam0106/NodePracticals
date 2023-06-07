const fs=require('fs/promises');

// using aync and await
async function readFile(){
    try {
        const data=await fs.readFile("index.txt","utf-8");
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
readFile();

//using then & catch
fs.readFile("greet.txt","utf-8").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})