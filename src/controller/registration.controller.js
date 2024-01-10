const express = require("express");
const router = express.Router();
const authenticate = require("../middleweares/authenticate");
const Registration = require("../models/registration.model");
router.post("", authenticate, async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    return res.status(200).send(registration);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
} ); 
router.get("", authenticate, async (req, res) => {
  try {
    const registration = await Registration.find();
    return res.status(200).send(registration);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router; 