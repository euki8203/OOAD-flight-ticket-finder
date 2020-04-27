const express = require('express');
const app = express();
var constants = require('./constants');
const fetch = require("node-fetch");
var path = require('path')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/findFlight', function(req, res) {
	const { inboundDate, originPlace, destinationPlace, outboundDate, country}  = req.query;
	let currency = "USD";
	let locale = "en-US";

	returnDate = (inboundDate === 'undefined') ?  new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000).toISOString().slice(0,10) : inboundDate.toString()
	bodyCountry = (country === 'undefined') ? "US" : country.toString()
	bodyOriginPlace = (originPlace === 'undefined') ? "DEN" : originPlace.toString()
	bodyDestinationPlace = (destinationPlace === 'undefined') ? "SFO" : destinationPlace.toString()
	departureDate = (outboundDate === 'undefined') ? new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).toISOString().slice(0,10) : outboundDate.toString()

	//console.log(returnDate, bodyCountry, bodyOriginPlace, bodyDestinationPlace, departureDate)

	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+bodyCountry+"/"+currency+
		"/"+locale+"/"+bodyOriginPlace+"/"+bodyDestinationPlace+"/"+departureDate+"?inboundpartialdate="+returnDate, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": constants.key
	}
	})
	.then((response) => { 
	    response.json().then((data) => {
	    	console.log(data)
	    	res.send(data)
	    })
    })

});

module.exports = app;