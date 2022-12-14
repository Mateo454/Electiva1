const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { API_VERSION } = require('./config.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`/api/${API_VERSION}`, userRoutes);

//configuracion de los header HTTP

module.exports=app;