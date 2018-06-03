//Creating an object and array which will be used in Facebook Exercise.

//Create object with username and password properties

var user = {
	username: "nori22",
	password: "nori22"

}

// creating array that contains the objects made aboive

var database = [
	{
		username: "nori22",
		password: "nori22"
	},
	{
		username: "dori22",
		password: "dori22"
	},
	{
		username: "sarri22",
		password: "sarri22"
	}
];

var newsfeed = [ 
	{
		username: "Nash",
		timeline: "The wake of Monday and returns of Tuesday"
	},
	{
		username: "Holly",
		timeline: "Went to Market on Wednesday and Salon on Thursday"
	},
	{
		username: "Brent",
		timeline: "Great game on Friday and falling ill on Saturday"
	}

];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");


function isUserValid (username, password) {
	for(var i = 0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}


function signOn(username,password) {
	console.log(isUserValid(username, password));
	// for(var i = 0 ; i < database.length; i++) {
	// 	if(database[i].username === username && 
	// 		database[i].password === password) {
	// 		console.log(newsfeed);
	// 	} else {
	// 		console.log("Sorry, Wrong Credentials!");
	// 	}
	// }
	// if (user === database[0].username && pass === database[0].password)
	// {
	// 	console.log(newsfeed);
	// } else {
	// 	alert("Sorry , Wrong Credentials");
	// }
}

signOn(userNamePrompt, passwordPrompt);

