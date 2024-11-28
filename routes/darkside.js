const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("darkside", { title: "Welcome to the Dark Side of the Force!" });
});

module.exports = router;
