const express = require("express");
const indexRouter = require("./routes/index.js");
const lightsideRouter = require("./routes/lightside.js");
const darksideRouter = require("./routes/darkside.js");
const path = require("path"); // For serving static files and downloads

const app = express();

// Set up view engine to use EJS for rendering views
app.set("views", "views");
app.set("view engine", "ejs");

// Middleware: Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware: Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware: Log all incoming requests
app.use((req, res, next) => {
	console.log(`New request: ${req.method} ${req.url}`);
	next();
});

// Route definitions
app.use("/", indexRouter); // Homepage
app.use("/lightsideRouter", lightsideRouter); // Light Side
app.use("/darksideRouter", darksideRouter); // Dark Side

// Route: File download example
app.get("/download", (req, res) => {
	const filePath = path.join(
		__dirname,
		"public",
		"images",
		"lightside_lightsaber.jpg"
	);
	res.download(filePath, "lightside_lightsaber.jpg", (err) => {
		if (err) {
			console.error("Error downloading file:", err);
			res.status(500).send("Error downloading the file.");
		}
	});
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Express is running on port ${PORT}`);
});
