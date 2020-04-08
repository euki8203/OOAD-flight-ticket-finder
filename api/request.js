const express = require('express');
const app = express();
var constants = require('./constants');
const fetch = require("node-fetch");


app.get('/findFlight', function(req, res) {
	console.log("in function")
	const { inboundDate, originPlace, destinationPlace, outboundDate, country}  = req.query;
	let currency = "USD";
	let locale = "en-US";

	console.log("inboundDate: ", inboundDate)
	console.log("originPlace: ", originPlace)
	console.log("destinationPlace: ", destinationPlace)
	console.log("outboundDate: ", outboundDate)
	console.log("country: ", country)


	returnDate = (inboundDate == undefined) ?  new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0,10) : inboundDate.toString()
	bodyCountry = (country == undefined) ? "US" : country.toString()
	bodyOriginPlace = (originPlace == undefined) ? "DEN-sky" : originPlace.toString()
	bodyDestinationPlace = (destinationPlace == undefined) ? "SFO-sky" : destinationPlace.toString()
	departureDate = (outboundDate == undefined) ? new Date().toISOString().slice(0,10) : outboundDate.toString()

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