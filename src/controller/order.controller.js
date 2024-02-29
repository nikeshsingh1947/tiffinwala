const express = require("express");
const Order = require("../models/order.model");
const Menue=require("../models/menue.model");
const User=require("../models/user.model");
const router = express.Router();
// router.get("", async (req, res) => {
//   try {
//     const order = await Order.find().lean().exec();
//     return res.status(200).send(order);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// }); 

router.get('', async (req, res) => {
    try {
      const orders = await Order.find()
        .populate('user')
        .populate('items.food')
        .lean()
        .exec();
  
      return res.status(200).send(orders);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
   
router.get("/:id",async(req,res)=>{
    try{
         const order =await Order.findById(req.params.id).populate('user').populate('items.food').lean().exec();
         return res.status(200).send(order);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.post("", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(200).send(order);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;