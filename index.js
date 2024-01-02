const http = require("http");

const user = {
  name: "husan",
  surname: "butaev",
  city: "soul",
};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200);
    return res.end("salom");
  } else if (url === "/user" && method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    return res.end(JSON.stringify(user));
  }
});

server.listen(8080, () => {
  console.log("8080 port eshitayapti");
});
