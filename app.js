//using an express module

const express = require("express");

//setting up the path

const path = require("path");

const app = express();

//specifying the router

var apiRouter = require("./routes/api_router");

app.use("/", apiRouter);

// app.use('')
app.listen(3000);
