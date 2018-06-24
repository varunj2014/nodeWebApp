const express = require("express");
const router = express.Router();

//@route GET to api/users/test
router.get("/test", (req, res) => res.json({ msg: "users work" }));

module.exports = router;
