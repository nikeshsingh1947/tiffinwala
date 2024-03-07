const express = require("express");
const Menue = require("../models/menue.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const menue = await Menue.find().lean().exec();
    return res.status(200).send(menue);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



router.post("", async (req, res) => {
  try {
    const menue = await Menue.create(req.body);

    return res.status(200).send(menue);
  } catch (err) {
    return res.status(500).send({ message: err.message });
    
  }
});

module.exports = router;