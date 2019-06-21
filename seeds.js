var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {
        name : "Cloud's Rest", 
        image:"https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Vestibulum iaculis neque odio, quis sodales mi dictum vitae. Proin vitae ornare nisi, sed tempor erat. Nunc fermentum dictum accumsan. Donec mi augue, interdum lobortis porta et, eleifend a justo. Suspendisse varius ex est, nec ornare diam tincidunt at. Aenean quis posuere ex. Praesent nibh dolor, blandit id hendrerit suscipit, tempor eget massa. Nullam maximus volutpat urna. Praesent ut imperdiet lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum pretium augue, ac aliquet ante varius non. Proin eros nibh, posuere in fringilla nec, facilisis nec ante. Nunc libero eros, aliquet ut varius ut, facilisis vel nisl. Fusce ac mauris tincidunt, consectetur ligula nec, auctor leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi volutpat vulputate justo, tincidunt gravida est mollis at."
    },
    {
        name : "Desert Mesa", 
        image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Vestibulum iaculis neque odio, quis sodales mi dictum vitae. Proin vitae ornare nisi, sed tempor erat. Nunc fermentum dictum accumsan. Donec mi augue, interdum lobortis porta et, eleifend a justo. Suspendisse varius ex est, nec ornare diam tincidunt at. Aenean quis posuere ex. Praesent nibh dolor, blandit id hendrerit suscipit, tempor eget massa. Nullam maximus volutpat urna. Praesent ut imperdiet lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum pretium augue, ac aliquet ante varius non. Proin eros nibh, posuere in fringilla nec, facilisis nec ante. Nunc libero eros, aliquet ut varius ut, facilisis vel nisl. Fusce ac mauris tincidunt, consectetur ligula nec, auctor leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi volutpat vulputate justo, tincidunt gravida est mollis at."
    },
    {
        name : "Canyon Floor", 
        image:"https://images.unsplash.com/photo-1482355347028-ff60443f60fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Vestibulum iaculis neque odio, quis sodales mi dictum vitae. Proin vitae ornare nisi, sed tempor erat. Nunc fermentum dictum accumsan. Donec mi augue, interdum lobortis porta et, eleifend a justo. Suspendisse varius ex est, nec ornare diam tincidunt at. Aenean quis posuere ex. Praesent nibh dolor, blandit id hendrerit suscipit, tempor eget massa. Nullam maximus volutpat urna. Praesent ut imperdiet lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum pretium augue, ac aliquet ante varius non. Proin eros nibh, posuere in fringilla nec, facilisis nec ante. Nunc libero eros, aliquet ut varius ut, facilisis vel nisl. Fusce ac mauris tincidunt, consectetur ligula nec, auctor leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi volutpat vulputate justo, tincidunt gravida est mollis at."
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