const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { layout: "main", title: "Home Page", isActive: false });
});
app.get("/about", (req, res) => {
  res.render("about", { layout: "main", title: "About Page" });
});
app.listen(8080, () => {
  console.log("server ishladi...");
});
