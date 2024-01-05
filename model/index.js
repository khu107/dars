const user_data = require("../lib/user.json");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");
const retrieveBody = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = class Users {
  constructor() {}

  // GET
  get = (req, res) => res.end(JSON.stringify(user_data));

  update = async (req, res) => {
    const id = url.split("/")[url.split("/").length - 1];
    const foundUser = users.find(user.id === id);
    const body = await retrieveBody(req);
    res.end("ok");
  };

  post = async (req, res) => {
    const body = await retrieveBody(req);
    const createdData = {
      ...body,
      id: uuid.v4(),
    };

    // user_data.push(createdData);
    const filePath = path.join(__dirname, "../lib/user.json");
    fs.writeFileSync(filePath, JSON.stringify(user_data, null, 2));
    res.writeHead(201, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(createdData));
  };
  delete = async (req, res) => {
    const url = req.url;
    const id = url.split("/")[url.split("/").length - 1];

    const updatedUserData = user_data.filter((user) => user.id !== id);

    if (updatedUserData.length < user_data.length) {
      const filePath = path.join(__dirname, "../lib/user.json");
      fs.writeFileSync(filePath, JSON.stringify(updatedUserData, null, 2));

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      if (!res.writableEnded) {
        const deletedUser = user_data.find((user) => user.id === id);
        res.end(JSON.stringify(deletedUser));
      }
    } else {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      if (!res.writableEnded) {
        res.end(JSON.stringify({ error: "User not found" }));
      }
    }
  };
};
