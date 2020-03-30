# Instructions

1. run `npm install`

2. run `npm start`

3. port is at 3100.
  3-1. Endpoints
    a) findFlight -finds available flight options.
    pass in the parameters or else, it will default it's value. (all values must be string type
    although there is code that handles when the type is not string. * is required.)
      "inboundDate": return date. Must be in YYYY-MM-DD format. 
		  "cabinClass": ex.business.
		  "children": number of children.
			"infants": number of infants.
			*"country": country of origin.
			*"currency": ex.USD.
			*"locale": ex.en-US.
			*"originPlace": 3 letter code for aiport of origin. ex.DEN-sky
			*"destinationPlace": 3 letter code for destination aiport. ex.SFO-sky
			*"outboundDate": departure date. Must be in YYYY-MM-DD format. 
			*"adults": number of adults.
