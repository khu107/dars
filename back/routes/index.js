const { Router } = require("express");
const {
  gardeningModel,
  homepotModel,
  domesticModel,
} = require("../module/gardening.schema");

const route = Router();

// Gardening
route.get("/gardening", async (req, res) => {
  return res.status(200).json({
    message: "succsess",
    data: await gardeningModel.find(),
  });
});
route.post("/gardening", async (req, res) => {
  const { image, title, description, type } = req.body;
  await gardeningModel.create({
    image,
    title,
    description,
    type,
  });
  return res.status(201).json({
    message: "success",
  });
});

// Homepot
route.get("/homepot", async (req, res) => {
  return res.status(200).json({
    message: "succsess",
    data: await homepotModel.find(),
  });
});
route.post("/homepot", async (req, res) => {
  const { image, title, description, type } = req.body;
  await homepotModel.create({
    image,
    title,
    description,
    type,
  });
  return res.status(201).json({
    message: "success",
  });
});

// Domestic
route.get("/domestic", async (req, res) => {
  return res.status(200).json({
    message: "succsess",
    data: await domesticModel.find(),
  });
});

route.post("/domestic", async (req, res) => {
  const { image, title, description, type } = req.body;
  await domesticModel.create({
    image,
    title,
    description,
    type,
  });
  return res.status(201).json({
    message: "success",
  });
});

module.exports = route;
