var fs = require("fs");
var domain = require("domain").create();

domain.run(function() {
  fs.readFile("input1.txt","utf8",function(error,data){
            if (error){
               throw error;
   }
       console.log(data);
    });
});
domain.on("error",function(error){
     console.log("Exception caught")
});