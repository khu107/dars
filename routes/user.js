const { Router } = require("express");
const router = Router();
// user

router.get("/", (req, res) => res.send("hello /user get"));
router.post("/", (req, res) => res.send("hello /user post"));
router.put("/", (req, res) => res.send("hello /user put"));
router.delete("/", (req, res) => res.send("hello /user delete"));

module.exports = router;
