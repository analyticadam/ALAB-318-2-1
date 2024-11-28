const express = require("express");
const indexRouter = require("./routes/index.js");
const lightsideRouter = require("./routes/lightside.js");
const darksideRouter = require("./routes/darkside.js");
const path = require("path"); //For Part 3 Img Download

const app = express();
app.set("views", "views");
// Set up view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
	console.log(`New request: ${req.method} ${req.url}`);
	next();
});
app.use("/", indexRouter);
app.use("/lightsideRouter", lightsideRouter);
app.use("/darksideRouter", darksideRouter);
app.get("/download", (req, res) => {
	const filePath = path.join(
		__dirname,
		"public",
		"images",
		"Limited Edition Mint Chip Oreos Front of Package.jpeg"
	); // Path to the image file
	res.download(
		filePath,
		"Limited Edition Mint Chip Oreos Front of Package.jpeg",
		(err) => {
			if (err) {
				console.error("Error downloading file:", err);
				res.status(500).send("Error downloading the file.");
			}
		}
	);
});
app.listen(3000, () => {
	console.log("Express is running on port 3000");
});
