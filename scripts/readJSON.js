const { json } = require('body-parser');
let jsonData = require('../data.json');

console.log(jsonData);

for (let e of jsonData){
  console.log(e.Unit_From, e.Unit_To)
}