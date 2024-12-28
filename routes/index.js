const express = require("express");
const router = express.Router();

// Route: Render the Star Wars Land homepage
// URL: localhost:3000/
router.get("/", (req, res) => {
	res.render("index", { title: "Welcome to Star Wars Land" });
});

module.exports = router;
