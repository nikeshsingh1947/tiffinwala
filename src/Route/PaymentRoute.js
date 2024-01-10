// const express = require("express");
// const router = express.Router();

// const {
//   checkout,
//   paymentVerification,
// }= require("../controller/Payment.controller");


// router.post("/checkout", checkout); 


// router.post("/paymentverification",paymentVerification);

// module.export= router;
const express = require("express");
const router = express.Router();

const {
  checkout,
  paymentVerification,
} = require("../controller/Payment.controller");

router.post("/checkout", checkout);
router.post("/paymentverification", paymentVerification);

// Correct export statement
module.exports = router;