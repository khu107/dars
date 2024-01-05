const http = require("http");
const User = require("./model/index");
const port = 3005;

const user = new User();
const server = http.createServer((req, res) => {
  // GET
  if (req.url === "/" && req.method === "GET") return user.get(req, res);

  // POST
  if (req.url === "/" && req.method === "POST") return user.post(req, res);

  // PUT
  if (req.url.match(/\/user\/\w+/) === "/" && req.method === "PUT")
    return user.update(req, res);

  // DELETE
  if (req.url.match(/\/user\/\w+/) === "/" && req.method === "DELETE")
    console.log(req.url);
  return user.delete(req, res);
});

server.listen(port, () => {
  console.log(`${port} listen`);
});
