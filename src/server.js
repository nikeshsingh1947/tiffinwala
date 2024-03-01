const app = require("./index");
const connect = require("./config/db");
const Razorpay = require('razorpay');
const port =process.env.PORT || 5000
 const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});


app.listen(port, async function () {
  try {
    await connect();
    console.log("listening 5000");
  } catch (err) {
    console.log(err);
  }
});



module.exports=instance;