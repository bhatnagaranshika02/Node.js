var fs = require("fs");

fs.readFile("input.txt","utf8",function(error,data){
    if (error) {
      throw error;
}
   console.log(data);
});

process.on("uncaughexception",function(error){
  console.log("The exception was caught");
});