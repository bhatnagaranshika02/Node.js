var fs =  require("fs")
console.log("Program Started")
var data = fs.readFileSync("input.txt")

console.log(data.toString())
console.log("Program ended")