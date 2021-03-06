var express = require("express"),
	app 	= express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/about", function(req,res) {
	res.render("about");
});

app.get("/portfolio", function(req,res) {
	res.render("portfolio");
});

app.get("/contact", function(req,res) {
	res.render("contact");
});

app.listen(3000, function() {
	console.log("Running app on localhost:3000");
});