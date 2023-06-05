const os=require("os");

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log(os.totalmem()); //total memory
console.log(os.freemem()); // free memory
console.log(os.uptime()) //uptime
console.log(os.type()) // type of os
console.log(os.release())
console.log(os.hostname()) //host-name