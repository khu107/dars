const { Router } = require("express");
const router = Router();

// public
router.get("/", (req, res) => res.send("hello /public get"));
router.post("/", (req, res) => res.send("hello /public post"));
router.put("/", (req, res) => res.send("hello /public put"));
router.delete("/", (req, res) => res.send("hello /public delete"));

module.exports = router;
