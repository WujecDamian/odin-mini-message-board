const express = require("express");
const path = require("path");
const app = express();

//Configure ejs
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Import Routes
const messagesRoute = require("./routes/messagesRoutes");
const newMessageRoutes = require("./routes/newMessageRoutes");

app.get("/", messagesRoute);
app.get("/new", newMessageRoutes);

app.listen(3000);
