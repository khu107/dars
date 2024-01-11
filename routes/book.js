const { Router } = require("express");
const router = Router();

// book
router.get("/", (req, res) => res.send("hello /book get"));
router.post("/", (req, res) => res.send("hello /book post"));
router.put("/", (req, res) => res.send("hello /book put"));
router.delete("/", (req, res) => res.send("hello /book delete"));

module.exports = router;
