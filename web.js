var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Using Node.js for Mocking Apex Web Services');
});

var port = process.env.PORT || 3001;

app.listen(port, function(){
  console.log("Express server listening on port %d", app.address().port);

});

// gets all stories
app.get('/stories', function(req, res){

	var stories = new Array();
	for (i=0; i<5; i++) {
		var story = new Object();
		story.Id = Math.floor(Math.random()*101);
		story.name = "Add a js method for story";
		story.devLoe = Math.floor(Math.random()*11);
		stories.push(story)
	}
	var storyJSON = JSON.stringify(stories);

	res.send(storyJSON);

});

// get a specific story
app.get('/stories/:story_id', function(req, res){

	var story = {"Id": req.params.story_id, "name": "Add a method for a specific story", "devLoe": 4};
	var storyJSON = JSON.stringify(story);

	res.send(storyJSON);

});