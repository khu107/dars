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
  get = (req, res) => res.end(JSON.stringify(user_data));

  update = async (req, res) => {
    const id = url.split("/")[url.split("/").length - 1];
    const foundUser = users.find(user.id === id);
    const body = await retrieveBody(req);
    console.log(body);
    console.log(foundUser);
    res.end("ok");
  };
  post = async (req, res) => {
    const body = await retrieveBody(req);
    const createdData = {
      ...body,
      id: uuid.v4(),
    };

    user_data.push(createdData);
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

    const userIndex = user_data.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      const deletedUser = user_data.splice(userIndex, 1)[0];

      const filePath = path.join(__dirname, "../lib/user.json");
      fs.writeFileSync(filePath, JSON.stringify(user_data, null, 2));

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      if (!res.writableEnded) {
        res.end(JSON.stringify(deletedUser));
      }
    }
  };
};
