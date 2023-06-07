const express=require("express");
const app=express();
const ejs=require("ejs")
const User=require("./routes/user")

// application middleware
app.use(express.json());
app.use(User)

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views')

//export module
module.exports=app;