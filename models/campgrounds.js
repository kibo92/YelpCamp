// Schema setup
var mongoose = require("mongoose");

var campgorundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Campground", campgorundSchema);