var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
	run: String,
	pushups: String,
	crunches: String
});

module.exports = mongoose.model('Activity', activitySchema);
