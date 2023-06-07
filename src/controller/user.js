const data = [{ id: 1, name: "rupam" }];

//test the endpoint
exports.test = (req, res) => {
  res.status(200).send("Hello World");
};

// add the data
exports.addData = (req, res) => {
  const { id, name } = req.body;
  if(!id && !name){
    return res.status(400).json({
      success:false,
      message:"Please provide name and Id"
    })
  }
  data.push({ id, name });
  res.status(201).json({
    success: true,
    message: "Name Added Successfully",
  });
};

//get the all data
exports.getData = (req, res) => {
  res.status(201).json({
    success: true,
    data,
  });
};

//update the data
exports.updateData = (req, res) => {
  const id=req.params.id;
  if (!id) {
    return res.status(400).json("Please Provide id");
  }
  const present = data.find((i) => i.id === id);
  console.log(present)
  if (!present) {
    return res.status(400).json("User is not present ");
  } else {
    data.name = req.body.name;
    res.status(201).json({
      success: true,
      message: "User updated Successfully",
    });
  }
};

//delete the data
exports.deleteData = (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json("Please Provide id");
  }
  data.filter((id) => id !== data.id);
  res.status(201).json({
    success: true,
    message: "User Deleted Successfully",
  });
};
