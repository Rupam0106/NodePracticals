const os=require("os");

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.hostname())