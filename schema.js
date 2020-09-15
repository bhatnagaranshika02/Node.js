var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var tutorialSchema = new Schema({
   name:{
      type:String,
      require:true,
      unique:true
},
    description:{
           type: String,
           required:true
}
}
});
var Tutorials = mongoose.model("tutorilas",tutorialSchema);
module.exports = Tutorials;