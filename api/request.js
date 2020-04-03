const express = require('express');
const app = express();
var constants = require('./constants');
const fetch = require("node-fetch");


app.post('/findFlight', function(req, res) {
	const { inboundDate, country, currency, locale, originPlace,
			destinationPlace, outboundDate}  = req.query;

	returnDate = (inboundDate == undefined) ?  new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0,10) : inboundDate.toString()
	bodyCountry = (country == undefined) ? "US" : country.toString()
	bodyCurrency = (currency == undefined) ? "USD" : currency.toString()
	bodyLocale = (locale == undefined) ? "en-US" : locale.toString()
	bodyOriginPlace = (originPlace == undefined) ? "DEN-sky" : originPlace.toString()
	bodyDestinationPlace = (destinationPlace == undefined) ? "SFO-sky" : destinationPlace.toString()
	departureDate = (outboundDate == undefined) ? new Date().toISOString().slice(0,10) : outboundDate.toString()

	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+bodyCountry+"/"+bodyCurrency+
		"/"+bodyLocale+"/"+bodyOriginPlace+"/"+bodyDestinationPlace+"/"+departureDate+"?inboundpartialdate="+returnDate, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": constants.key
	}
	})
	.then((response) => { 
	    response.json().then((data) => {res.send(data)})
    })

});

module.exports = app;