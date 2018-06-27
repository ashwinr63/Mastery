const express = require('express');
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// get request
app.get('/', (req, res) => {

		console.log(req.query);
	// get query - 
	// req.query
	// req.body
	// req.header
	// req.param
	res.send("getting root")
});


app.listen(3000);

