var fs = require("fs");
var file = "input.txt";

fs.exists(file, function(exists){
     if(exists){
            fs.start(file, function(err, stat){
                    if(err) throw err;
                    if(stat.isFile()){
                           fs.readLine(file, "utf8",function(err,data){
                                if (err) throw err;
                                      console.log(data);
                          });
                   }
            });
     }
});