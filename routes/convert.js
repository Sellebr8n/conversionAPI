const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convert")

//POST: /convert/:measure
//Return all groups of measures. I.e lenght, volume etc.
router.post("/:measure", convertController.getMeasures)

//POST: /convert/:from/:to/:value
//Utilizes the converter function and returns JSON with calculated conversion.
router.post("/:from/:to/:value", convertController.getConverted)

module.exports = router;