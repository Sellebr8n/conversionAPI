const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convert")

//POST /convert
//Post route for FORM in home.ejs. Collect values in req.body and send to /convert/:from/:to/:value and redirect.
// router.post("/", convertController.getMeasures)


//POST: /convert/:measure
//Return all groups of measures. I.e lenght, volume etc.
router.post("/:measure", convertController.getMeasures)

//POST: /convert/:from/:to/:value
//Utilizes the converter function and returns JSON with calculated conversion.
router.post("/:from/:to/:value", convertController.getConverted)

module.exports = router;