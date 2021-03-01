const express = require("express");
const router = express.Router();
const jsonData = require('../data.json');
const converter = require("../scripts/converter")

//GET /length
router.get("/:from", ( req, res )=>{
    const { from } = req.params
    const json = jsonData.filter(obj => {
        return obj.From === from
    })
    const obj = {   
        conversions: json.length,
            type: json.map(o => {
            return {
                Measure: o.Measure,
                From: o.From,
                To: o.To,
                Operator: o.Operator,
                Multiplyer: o.Multiplyer
            }
        }),
    }
    // console.log(JSON.stringify(obj));

    if (json.length > 0){
        res.status(200).json(obj)
    } else {
        res.status(404).render("../views/notfound")
    }
})

router.get("/:from/:to/:value", (req, res) => {
    const { from, to, value } = req.params
    const filteredJSON = jsonData.filter(obj => {
        return obj.From === from && obj.To
    })
    const newO = {
        Value: value,
        From: from,
        To: to,
        Equals: converter(from, to, value, filteredJSON[0].Multiplyer)
    }
    const json = JSON.stringify(newO)
    res.status(200).send(json)
})

module.exports = router;