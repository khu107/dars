const http = require("http");
const uuid = require("uuid");
const users = [
  {
    id: 1,
    name: "husan",
    surname: "butaev",
    city: "soul",
  },
];

// GET - done
// POST
// UPDATE
// DELETE

const retriBody = (req) => {
  return new Promise((resolve, rejects) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      rejects(error);
    }
  });
};

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200);
    return res.end("first server");
  } else if (url === "/users" && method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    return res.end(JSON.stringify(users));
  } else if (url === "/user" && method === "POST") {
    const data = await retriBody(req);

    const createdData = {
      ...JSON.parse(data),
      id: uuid.v4(),
    };
    users.push(createdData);
    res.writeHead(201, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users));
  }
});

server.listen(8080, () => {
  console.log("8080 port eshitayapti");
});
