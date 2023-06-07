const express=require("express");
const { test, addData, getData, updateData, deleteData } = require("../controller/user");

const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).json("This is Home Page")
})
router.route("/test").get(test)
router.route("/add").post(addData)
router.route("/get").get(getData)
router.route("/update/:id").put(updateData)
router.route("/delete/:id").delete(deleteData)

router.get("*",(req,res)=>{
    res.status(200).json("Page not Found")
})

module.exports=router;