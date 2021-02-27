const express = require('express');
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");


const app = express();
app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); //application/json

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); 
});

app.use("/feed", feedRoutes);
app.get("/", (req, res, next)=> {
    res.render("home.ejs")
})
app.get("*", (req, res, next)=> {
    res.render("notfound.ejs")
})

app.listen(8080);