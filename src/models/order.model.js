const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'menue' },
    quantity: Number,
 
  });
const subscriptionSchema=new mongoose.Schema({
    food:{ type: mongoose.Schema.Types.ObjectId, ref: 'menue' },
    quantity:Number,
    enddate:String,
})
const orderSchema = mongoose.Schema(
  { 
        
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        items: [orderItemSchema],
        subscription:[subscriptionSchema],
        deliveryStat:{type:Boolean, required:true},
        PaymentStat:{type:Boolean, required:true}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;