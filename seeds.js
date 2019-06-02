var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {
        name : "Cloud's Rest", 
        image:"https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Blah blah blah"
    },
    {
        name : "Desert Mesa", 
        image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Blah blah blah"
    },
    {
        name : "Canyon Floor", 
        image:"https://images.unsplash.com/photo-1482355347028-ff60443f60fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Blah blah blah"
    },
];

function seedDB() {
    //Remove all campgrounds
    Campground.deleteMany({}, function(err) {
        if(err){
            console.log(err);
        } else {
            console.log("Removed campgrounds!");
        }
        //My test of removing comments
        Comment.deleteMany({}, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("Removed comments!");
            }
        })

        //Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground!");
                    //Create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    
    //Add a few comments

};

module.exports = seedDB;