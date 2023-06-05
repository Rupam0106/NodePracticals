const path=require("path");

const res=path.parse(__dirname)
const basename=path.basename(__dirname)
console.log(path.delimiter)
console.log(path.dirname(__dirname))

console.log(basename)
module.exports=res;