const express = require("express");
const path = require("path");
const app = express();

//Configure ejs
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Import Routes
const messagesRoute = require("./routes/messagesRoutes");
const newMessageRoutes = require("./routes/newMessageRoutes");

app.use("/", messagesRoute);
app.use("/new", newMessageRoutes);

app.listen(3000, function () {
  console.log("Express server listening on port 3000 | http://localhost:3000");
});
