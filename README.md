# OOAD-flight-ticket-finder


## Project Summary:

### Best Flight Ticket Matcher


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


### UMLActivity Diagram


### Architecture Diagram


### UI Mockups/ Sketches


### User Interactions/ UML Sequence Diagram

View flights

  View all flights

   User struct will be created and FlightOptions will be updated (with default None for all arguments). Then the application will access the DB to fetch the according data and display it via the cloud. Once the process is terminated, it can loop back to the initial page and prompt the user to enter user information again. 

Enter user information (constraints)

  View results (flight options)

   User struct will be created and FlightOptions will be updated with the arguments. Then the application will access the DB to fetch the corresponding data and display it via the cloud. Once the process is terminated, it can loop back to the initial page and prompt the user to enter user information again. 

  Notified by the application if option does not exist

   User struct will be created and FlightOptions will be updated with the arguments. Then the application will access the DB to fetch the according data. When the data that meets the user required fields does not exist, function notifyUser() will be called which displays a notification on site and let user know that a flight option that meets the category does not exist. Once the process is terminated, it can loop back to the initial page and prompt the user to enter user information again. 

  Sort flight options
  
   Once the flight options are displayed, the user can sort the flight options by calling the sort(key) function. Key includes increasingPrice and decreasingPrice. Once the flight options are sorted, it will call the display method which will display the options on the UI via cloud.
   
   Fliter flight options
   
   Once the flight options are displayed, the user can filter the flight options by calling the updateFilter(key, value) function. Key includes categories like price and direct. Value is the value you would like to replace for the key. (ex. updateFilter(minPrice, 150) will change the minPrice to 150. Once the flight options are filtered by changing the values of the variables in the FlightOptions Struct and fetching from the database again, it will call the display method which will display the options on the UI via cloud.



### UML Class Diagram:

Pattern Use: Singleton - database, Strategy - sort behavior, Factory - flight options







### 
