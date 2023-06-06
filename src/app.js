const express=require("express");

const app=express();
const User=require("./routes/user")

// application middleware
app.use(express.json());
app.use(User)

//export module
module.exports=app;