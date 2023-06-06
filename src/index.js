require("dotenv").config();
const app=require("./app")

const port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log(`Express is Running on the ${port}`)
})
