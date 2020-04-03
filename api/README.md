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
  
  	  ` "QuoteId": 1,
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
            "QuoteDateTime": "2020-04-03T05:13:00"`
	    
	    
	
