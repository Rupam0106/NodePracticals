const fs = require("fs");

// for reading file
fs.readFile("index.txt", (err, data) => {
  if (err) throw err;
  console.log("For File Data :- " + data);
});

//add the content of file
fs.appendFile("index.txt", " This is Rudra Innovative Software.", (err) => {
  if (err) throw err;
  console.log("Data Appended Successfully");
});