const http = require("http");
const uuid = require("uuid");
const users = [
  {
    id: "1",
    name: "husan",
    surname: "butaev",
    city: "soul",
  },
];

// GET - done
// POST - done
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

    res.end(JSON.stringify(createdData));
  } else if (url.match(/\/user\/\w+/) === "/user" && method === "PUT") {
    const id = url.split("/")[url.split("/").length - 1];
    const foundUser = users.find(user.id === id);
    if (!foundUser) return res.end("user canot found");

    const data = JSON.parse(await retriBody(req));

    users.push(createdData);
    res.writeHead(201, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify(
        users.map((user) =>
          user.id === id
            ? {
                ...foundUser,
                ...data,
              }
            : user
        )
      )
    );
  } else if (url.match(/\/user\/\w+/) === "/user" && method === "DELETE") {
    const id = url.split("/")[url.split("/").length - 1];
    const foundUser = users.find(user.id === id);
    if (!foundUser) return res.end("user canot found");

    const data = JSON.parse(await retriBody(req));

    users.push(createdData);
    res.writeHead(201, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users.filter((user) => user.id !== id)));
  }
});

server.listen(8080, () => {
  console.log("8080 port eshitayapti");
});
