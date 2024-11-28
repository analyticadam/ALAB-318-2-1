const express = require("express");
const indexRouter = require("./routes/index.js");
const lightsideRouter = require("./routes/lightside.js");
const darksideRouter = require("./routes/darkside.js");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/lightsideRouter", lightsideRouter);
app.use("/darksideRouter", darksideRouter);

app.listen(3000, () => {
	console.log("Express is running on port 3000");
});
