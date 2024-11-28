const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("lightside", { title: "Welcome to the Light Side of the Force!" });
});

module.exports = router;
