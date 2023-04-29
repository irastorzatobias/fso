const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const { routeNotFound } = require("./utils/middlewares");
mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/blogs", require("./controller/blogController"));

app.use(routeNotFound);

module.exports = app;
