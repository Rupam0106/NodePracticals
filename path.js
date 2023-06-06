const path = require("path");

const res = path.parse(__dirname);
console.log("path of the directory : = "+path.dirname(__dirname));
console.log("Find the Extension of the file name"+path.extname('index.html'));

console.log("use the format : = "+
  path.format({
    root: "/ignored",
    dir: "/home/user/dir",
    base: "file.txt",
  })
);
console.log("For Absolute Path:=   "+path.isAbsolute(__dirname))
console.log("Find the path "+path.toNamespacedPath(__dirname));
console.log("Find the baseName : = "+path.basename(__dirname));
console.log("foo/bar/baz".split(path.sep));
console.log("Find the details path : = "+process.env.PATH);

module.exports = res;