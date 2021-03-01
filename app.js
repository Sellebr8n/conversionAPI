const express = require('express');
const path = require("path")
const bodyParser = require("body-parser");
const convertRoutes = require("./routes/convert");
let jsonData = require('./data.json');

const app = express();
app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); //application/json
app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); 
});

app.use("/convert", convertRoutes);

app.get("/", (req, res, next)=> {
    res.render("home.ejs", {json: jsonData})
})
app.all("*", (req, res, next)=> {
    res.render("notfound.ejs")
})

app.listen(8080);