const data=[]


//test the endpoint
exports.test = (req, res) => {
  res.status(200).send("Hello World");
};

// add the data
exports.addData=(req,res)=>{
    const {name}=req.body;
     data.push(name);
     res.status(201).json({
        success:true,
        message:"Name Added Successfully"
     })
}

//get the all data
exports.getData=(req,res)=>{
    res.status(201).json({
        success:true,
        data
     })
}
