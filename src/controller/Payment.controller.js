// const Razorpay =require("razorpay");
// const instance=require("../server")
// const crypto=require("crypto");
//  const{ Payment }= require("../models/Payment.model");

//  const checkout = async (req, res) => {
//   const options = {
//     amount: Number(req.body.amount * 100),
//     currency: "INR",
//   };
//   const order = await instance.orders.create(options);

//   res.status(200).json({
//     success: true,
//     order,
//   });
// };

// const paymentVerification = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   const isAuthentic = expectedSignature === razorpay_signature;

//   if (isAuthentic) {
//     // Database comes here

//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     });

//     res.redirect(
//       `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
//     );
//   } else {
//     res.status(400).json({
//       success: false,
//     });
//   }
// };

// module.exports=checkout,paymentVerification

const Razorpay = require("razorpay");
const instance = require("../server");
const crypto = require("crypto");
const Payment = require("../models/Payment.model");

const checkout = async (req, res) => {
  const instance = require("../server");
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order =  instance.orders.create(options,function(err, order) {
    console.log(order);
    res.status(200).json({
      success: true,
      order,
    });
  });
  

  // res.status(200).json({
  //   success: true,
  //   order,
  // });
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database logic goes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

// Correct export using an object
module.exports = {
  checkout,
  paymentVerification,
};