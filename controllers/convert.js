const jsonData = require('../data.json');
const converter = require("../scripts/converter")

exports.getMeasures = ( req, res )=>{
    const { measure } = req.params
    const json = jsonData.filter(obj => {
        return obj.Measure === measure
    })
    const obj = {   
        versions: json.length,
        measure: measure, 
        conversions: json.map(o => {
            return {
                From: o.From,
                To: o.To,
                Operator: o.Operator,
                Multiplyer: o.Multiplyer
            }
        }),
    }
    if (json.length > 0){
        res.status(200).json(obj)
    } else {
        res.status(404).render("../views/notfound")
    }
}

exports.getConverted = (req, res) => {
    const { from, to, value } = req.params
    const filteredJSON = jsonData.filter(obj => {
        return obj.From === from && obj.To === to
    })
    const newO = {
        Value: value,
        From: from,
        To: to,
        Equals: converter(value, filteredJSON[0].Multiplyer)
    }
    const json = JSON.stringify(newO)
    res.status(200).send(json)
}