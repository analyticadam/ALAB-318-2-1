const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", { title: "Welcome to Star Wars Land" });
});

module.exports = router;
