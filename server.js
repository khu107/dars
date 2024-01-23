const express = require("express");
const path = require("path");
const home = require("./home");
const blog = require("./blog");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { home });
});
app.get("/blog", (req, res) => {
  res.render("blog", { blog });
});
app.get("/work", (req, res) => {
  res.render("work", { home });
});
app.listen(8080, () => {
  console.log("run server");
});
