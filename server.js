const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Blog",
    navbar: ["Works", "Blog", "Contact"],
    posts: [
      {
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        skill: "Design, Pattern",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2020",
        skill: "figma, icon, Design",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    ],
  });
});

app.listen(8080, () => {
  console.log("run server");
});
