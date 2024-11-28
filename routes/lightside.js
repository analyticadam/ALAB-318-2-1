const express = require("express");
const router = express.Router();
// localhost:3000/lightsideRouter
router.get("/", (req, res) => {
	res.render("lightside", { title: "Welcome to the Light Side of the Force!" });
});

module.exports = router;
