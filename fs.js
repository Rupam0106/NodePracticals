const fs = require("fs");

fs.open("index.txt", "r", (err, fd) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("myfile does not exist");
      return;
    }
    throw err;
  }


    console.log(fd);
  
});
