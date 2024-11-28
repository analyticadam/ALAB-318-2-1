const express = require("express");
const router = express.Router();
// localhost:3000/darksideRouter
router.get("/", (req, res) => {
	res.render("darkside", { title: "Welcome to the Dark Side of the Force!" });
});

// Handles the form submission and renders the "cookies" page
// localhost:3000/darksideRouter/submit
router.post("/submit", (req, res) => {
	console.log(req.body);
	const star = req.body.star; // Get the submitted "star" value
	res.render("submit", { star }); // Pass it to the submit.ejs view
	res.send("We've got cookies for you!");
});

module.exports = router;
