const express = require("express");
const router = express.Router();
let jsonData = require('../data.json');

//GET /length
router.get("/:measure", ( req, res )=>{
    const { measure } = req.params
    const json = jsonData.filter(obj => {
        return obj.Measure === measure
    })
    const obj = {   
        length: json.length,
        measure: json.map(o => {
            return {
                from: o.Unit_From,
                fromAbb: o.From_Abbreviation,
                to:  o.Unit_To,
                toAbb: o.To_Abbreviation
            }
        }),
    }
    // console.log(JSON.stringify(obj));
    console.log(obj);

    if (json.length > 0){
        res.status(200).json(obj)
    } else {
        res.status(404).render("../views/notfound")
    }
})

router.get("/:measure/:from/:to/:value", (req, res) => {
    console.log(req.params)
    res.status(200).send("HIT ROUTE!")
})

module.exports = router;