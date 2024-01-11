const { Router } = require("express");
const router = Router();

// admin
router.get("/", (req, res) => res.send("hello /admin get"));
router.post("/", (req, res) => res.send("hello /admin post"));
router.put("/", (req, res) => res.send("hello /admin put"));
router.delete("/", (req, res) => res.send("hello /admin delete"));

module.exports = router;
