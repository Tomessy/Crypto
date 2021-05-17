const express = require("express");
// const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
//const routes = require("./routes");

const app = express();


// app.use(helmet());

// Setup morgan which gives us HTTP request logging.
//morgan.token("all", ":status :method :url reqAuth :req[Authorization]");

app.use(morgan("dev"));

// Sets up request body JSON parsing
app.use(express.json());

// Add api routes.
//app.use("/api", routes);


// // Tells express about the build folder
app.use(express.static(path.join(__dirname, "../client/build")));

// // Tells express about the build folder
// app.use(express.static(path.join(__dirname, "../client/projects/crypto/build")));

// // Tells express about the build folder
// app.use(express.static(path.join(__dirname, "../client/projects/webflix/build")));

// react html
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// // react html
// app.get("/crypto", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../client/projects/crypto/build/index.html"));
// });

// // react html
// app.get("/webflix*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../client/projects/webflix/build/index.html"));
// });

// Sends a 404 error if no end points match the end points.
app.use((req, res) => {
	res.status(404).json({
		message: "Route Not Found From API/index.js",
	});
});

// Sets the PORT variable to either the port it is hosted on through Heroku OR port 500
const PORT = process.env.PORT || 5000;

// Starts listening on the PORT variable
app.listen(PORT, () => {
	console.log(`The application is running on ${PORT}`);
});
