# OOAD-flight-ticket-finder


## Project Summary:

### Name: Best Flight Ticket Matcher


### Team Members: 
Ashley Kim ashleykim0506@gmail.com
Elizabeth Qiu


### Overview: 

For this project we will design and develop a cloud based web application which will match the cheapest flight ticket with the user provided information (such as price range, date of travel, number of baggage, and etc.) using the data from the Skyscanner api. Reference: https://rapidapi.com/blog/skyscanner-api-overview/php/


### Project Requirements:

The web application must have a basic UI that is easy to navigate.  

The user must be able to interactively use the web application. 

The application must deliver a flight option(s) that meets users requirement(s).

The response time of the web application must be reasonable. 


### Users and Tasks (Use Cases):

The number of concurrent users will depend on the capacity of the web server and the number of allowed responses/queries of the Skyscanner flight api. 

To use the interactive application, users must provide one or more information (such as price range, date of travel, whether the flight is direct or not, and etc.) to view the flight options.

If the flight option with the user provided data does not exist (ex. selected date is not within 6 months from the current date), the application must let the user know.

Any combination of the categories must be possible. (ex. Flight ticket from DEN to LAX on March 7th, less than $200 that departs before 10am.)

If the user wishes to view all flight options, the application will display all flight options.

The user must be able to filter the flight options based on the starting location and destination, date of departure and arrival, price range, and number of stops.

The user must be able to sort the flight options by the price.

