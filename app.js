var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1376960/pexels-photo-1376960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    //shows all campgrounds 
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    //make new objects
    var newCampground = {name: name, image: image};
    //push new object 
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    //show the form that will send the data to post rout above
    res.render("new.ejs");

});

app.listen(port, function() {
    console.log("The YelpCamp server has started on localport: 3000");
});
