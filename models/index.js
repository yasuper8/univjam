var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/univjam_test");

var Playlist = require('./playlist');

module.exports.Playlist = Playlist;
module.exports.Song = require('./song');
