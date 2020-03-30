const express = require('express');
const app = express();
var constants = require('./constants');
const requestHandler = require('./requestHandler.js')
const { sendJsonResponse } = require('./responseHelper.js');
const fetch = require("node-fetch");


app.get("/orders", (req, res, next) => {
    res.json(["Orange","Apple","Watermellon"]);
});

app.post('/findFlight', requestHandler(async (req) => {
	const { inboundDate, cabinClass, children, infants, country, currency, locale, originPlace,
			destinationPlace, outboundDate, adults}  = req.query;

	bodyInboundDate = (inboundDate == undefined) ?  new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0,10) : inboundDate.toString()
	bodyCabinClass = (cabinClass == undefined) ? "business" : cabinClass.toString()
	bodycChildren = (children == undefined) ? "0" : children.toString()
	bodyInfants = (infants == undefined) ? "0" : infants.toString()
	bodyCountry = (country == undefined) ? "US" : country.toString()
	bodyCurrency = (currency == undefined) ? "USD" : currency.toString()
	bodyLocale = (locale == undefined) ? "en-US" : locale.toString()
	bodyOriginPlace = (originPlace == undefined) ? "DEN-sky" : originPlace.toString()
	bodyDestinationPlace = (destinationPlace == undefined) ? "SFO-sky" : destinationPlace.toString()
	bodyOutBoundDate = (outboundDate == undefined) ? new Date().toISOString().slice(0,10) : outboundDate.toString()
	bodyAdults = (adults == undefined) ? "1" : adults.toString()

	let ret = null;

	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0", {
		"method": "POST",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": constants.key,
			"content-type": "application/x-www-form-urlencoded"
		},
		"body": {
			"inboundDate": bodyInboundDate,
			"cabinClass": bodyCabinClass,
			"children": bodycChildren,
			"infants": bodyInfants,
			"country": bodyCountry,
			"currency": bodyCurrency,
			"locale": bodyLocale,
			"originPlace": bodyOriginPlace,
			"destinationPlace": bodyDestinationPlace,
			"outboundDate": bodyOutBoundDate,
			"adults": bodyAdults
		}
	})
	.then(response => {
		console.log(response);
		ret = response;
	})
	.catch(err => {
		console.log(err);
	});

  	return sendJsonResponse(ret);
}));

module.exports = app;