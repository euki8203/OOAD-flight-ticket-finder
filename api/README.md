# Instructions


1. run `npm install`

2. run `npm start`

	2-1) If `Error: Cannot find module 'express'`,
		try `npm install express`

3. port is at 3100.

  3-1. Endpoints
    a) findFlight -finds available flight options.
    pass in the parameters or else, it will default it's value. (all values must be string type
    although there is code that handles when the type is not string. * is required.)
    
    
  	"inboundDate": return date. Must be in YYYY-MM-DD format. 
	
	*"country": country of origin.
	
	*"currency": ex.USD.
	
	*"locale": ex.en-US.
	
	*"originPlace": 3 letter code for aiport of origin. ex.DEN-sky.
	
	*"destinationPlace": 3 letter code for destination aiport. ex.SFO-sky.
	
	*"outboundDate": departure date. Must be in YYYY-MM-DD format. `
	
	
4. returns JSON 

  4-1. example JSON 
  
 	{
	    "Routes": [],
	    "Quotes": [
		{
		    "QuoteId": 1,
		    "MinPrice": 192,
		    "Direct": true,
		    "OutboundLeg": {
			"CarrierIds": [
			    851
			],
			"OriginId": 81727,
			"DestinationId": 60987,
			"DepartureDate": "2020-04-05T00:00:00"
		    },
		    "QuoteDateTime": "2020-04-03T05:13:00"
		},
		{
		    "QuoteId": 2,
		    "MinPrice": 159,
		    "Direct": false,
		    "OutboundLeg": {
			"CarrierIds": [
			    851
			],
			"OriginId": 81727,
			"DestinationId": 60987,
			"DepartureDate": "2020-04-06T00:00:00"
		    },
		    "QuoteDateTime": "2020-04-03T10:23:00"
		},
		{
		    "QuoteId": 3,
		    "MinPrice": 192,
		    "Direct": true,
		    "OutboundLeg": {
			"CarrierIds": [
			    851
			],
			"OriginId": 81727,
			"DestinationId": 60987,
			"DepartureDate": "2020-04-06T00:00:00"
		    },
		    "QuoteDateTime": "2020-04-03T10:23:00"
		}
	     ],
	    "Places": [
		{
		    "PlaceId": 60987,
		    "IataCode": "JFK",
		    "Name": "New York John F. Kennedy",
		    "Type": "Station",
		    "SkyscannerCode": "JFK",
		    "CityName": "New York",
		    "CityId": "NYCA",
		    "CountryName": "United States"
		},
		{
		    "PlaceId": 81727,
		    "IataCode": "SFO",
		    "Name": "San Francisco International",
		    "Type": "Station",
		    "SkyscannerCode": "SFO",
		    "CityName": "San Francisco",
		    "CityId": "SFOA",
		    "CountryName": "United States"
		}
	    ],
	    "Carriers": [
		{
		    "CarrierId": 851,
		    "Name": "Alaska Airlines"
		},
		{
		    "CarrierId": 857,
		    "Name": "Finnair"
		},
		{
		    "CarrierId": 870,
		    "Name": "jetBlue"
		},
		{
		    "CarrierId": 1065,
		    "Name": "Frontier Airlines"
		},
		{
		    "CarrierId": 1467,
		    "Name": "Spirit Airlines"
		}
	    ],
	    "Currencies": [
		{
		    "Code": "USD",
		    "Symbol": "$",
		    "ThousandsSeparator": ",",
		    "DecimalSeparator": ".",
		    "SymbolOnLeft": true,
		    "SpaceBetweenAmountAndSymbol": false,
		    "RoundingCoefficient": 0,
		    "DecimalDigits": 2
		}
	    ]
	}


5. Disclaimer: Current API subscription is limited to 10 queries per day.
	    
	
