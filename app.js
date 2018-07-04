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

app.listen(3000, () => console.log('Example app listening on port 3000!'))