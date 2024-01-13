const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public", "style")));

app.engine(
  ".html",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    extname: ".html",
  })
);
app.set("view engine", ".html");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    layout: "main",
    title: "Home Page",
    people: [
      {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
        name: "Williamsons",
        star: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant.",
      },
      {
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        name: "Farhad Reja",
        star: 4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXksdu3aWAj1aBuoU5l7yOPx7SMr3Ee7HnAp7u4-TaJg&s",
        name: "Peter sams",
        star: 5,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere nulla id feugiat morbi dictum. Nec enim mauris velit integer. Vitae varius interdum enim eget elementum. Eu velit tortor proin risus amet habitant.",
      },
    ],
  });
});

app.listen(8080, () => {
  console.log("server ishladi...");
});
