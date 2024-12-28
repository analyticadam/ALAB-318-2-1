const express = require("express");
const router = express.Router();

// Route: Render the Dark Side page
// URL: localhost:3000/darksideRouter
router.get("/", (req, res) => {
	res.render("darkside", { title: "Welcome to the Dark Side of the Force!" });
});

// Route: Handle form submission and render the "cookies" page
// URL: localhost:3000/darksideRouter/submit
router.post("/submit", (req, res) => {
	console.log(req.body); // Log the submitted form data
	const star = req.body.star; // Extract the "star" value from the request body

	// Render the "submit" view with the submitted data
	res.render("submit", { star });
});

module.exports = router;
