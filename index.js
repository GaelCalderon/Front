const express = require("express");
const request = require("request");
const exprhbs = require("express-handlebars");

const app = express();

app.engine("handlebars",exprhbs());

app.set("View engine", "handlebars");

//ruta get inicial

app.get("/",(req, res) =>{
    request("https://minox.onrender.com/ver", (err, express,response,body)=>{
        if(!err){
            const valores = JSON.parse(body);
            res.render("home", {
                layout:"main",
                MQ135:MQ135
            });

        }

    })
})