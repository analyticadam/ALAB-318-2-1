const express = require("express");
const router = express.Router();
// localhost:3000/darksideRouter
router.get("/", (req, res) => {
	res.render("darkside", { title: "Welcome to the Dark Side of the Force!" });
});
// localhost:3000/darksideRouter/submit
router.post("/submit", (req, res) => {
	console.log(req.body);
	res.send("We've got cookies for you!");
});
module.exports = router;
