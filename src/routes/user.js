const express=require("express");
const { test, addData, getData } = require("../controller/user");

const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).json("This is Home Page")
})
router.route("/test").get(test)
router.route("/add").post(addData)
router.route("/get").get(getData)

router.get("*",(req,res)=>{
    res.status(200).json("Page not Found")
})

module.exports=router;