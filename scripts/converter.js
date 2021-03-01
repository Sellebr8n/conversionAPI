module.exports = function converter(from, to, value, multiplyer){
    const floatMulti = parseFloat(multiplyer.replace(",","."))
    const floatVal = parseFloat(value.replace(",","."))
    // console.log(from, to, floatVal, floatMulti);
    return floatVal * floatMulti
}