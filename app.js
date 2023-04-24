const express = require("express");
const path = require("path");
const app = express();

var apiRouter = require("./routes/api_router");

app.use("/", apiRouter);

// app.use('')
app.listen(3000);
