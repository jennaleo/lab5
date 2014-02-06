var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.query.name;
	var descrip = req.query.description;
		// 'name' : name,
		// 'description' : descrip,
		// 'imageURL' : "http://lorempixel.com/400/400/people"
		
	var json = {
			"name": name,
			"description": descrip,
			"imageURL": "http://lorempixel.com/400/400/people"
		}
	data["friends"].push(json);
	console.log("ajsldkfjasdklf");
	res.render('add', data);
	
};
