const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.send("hello /action get"));
router.post("/", (req, res) => res.send("hello /action post"));
router.put("/", (req, res) => res.send("hello /action put"));
router.delete("/", (req, res) => res.send("hello /action delete"));

module.exports = router;
