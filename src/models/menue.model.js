const mongoose = require("mongoose");


const menueSchema = mongoose.Schema(
  { foodname:{type:String, required:true,unique:true},
    foodprice:{type:Number, required:true},
    categorie:{type:String, required:true},
    item:{type:String, required:true},
    foodimage:{type:String, required:true},
    veg:{type:Boolean, required:true},
    type:{type:String, required:true},
    Day:{type:String, required:true}
  },
  
  
  
  {
    
    timestamps: true,
    versionKey: false,
  }
);

const Menue = mongoose.model("menue", menueSchema);

module.exports = Menue;
