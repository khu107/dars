const { Router } = require("express");
const router = Router();

// home
router.use("/", require("./home"));
// user
router.use("/user", require("./user"));
// admin
router.use("/admin", require("./admin"));

// public
router.use("/public", require("./public"));

// book
router.use("/book", require("./book"));

// action
router.use("/action", require("./action"));

module.exports = router;
