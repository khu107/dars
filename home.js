const fs = require("fs");
const http = require("http");

// const filePath = "./users.json";

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.error("err", err);
//     return;
//   }
//   const jsonData = JSON.parse(data);
//   console.log(jsonData);
// });
const filePath = "./users.json";

class Users {
  constructor() {
    this.server = http.createServer(this.handleRequest);
  }
  async start(port) {
    this.server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  async handleRequest(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      res.writeHead(200);
      return res.end("first server");
    } else if (url === "/users" && method === "GET") {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Internal Server Error");
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
        console.log(data);
      });
    } else if (url === "/users" && method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        try {
          const newData = JSON.parse(body);

          fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
              console.error("Error reading file:", err);
              res.writeHead(500, { "Content-Type": "text/plain" });
              return res.end("Internal Server Error");
            }

            const existingData = JSON.parse(data);
            existingData.push(newData);

            fs.writeFile(
              filePath,
              JSON.stringify(existingData, null, 2),
              "utf8",
              (err) => {
                if (err) {
                  console.error("Error writing to file:", err);
                  res.writeHead(500, { "Content-Type": "text/plain" });
                  return res.end("Internal Server Error");
                }

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newData));
              }
            );
          });
        } catch (parseError) {
          console.error("Error parsing request body:", parseError);
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Bad Request");
        }
      });
    }
  }
}

const userServer = new Users();
const port = 3005; // Set the desired port number
userServer.start(port);
