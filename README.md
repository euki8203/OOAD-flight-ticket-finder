## Project Summary:

### Flight Ticket Finder


### Team Members: 
Ashley Kim ashleykim0506@gmail.com

Elizabeth Qiu eqiu21@gmail.com


### Overview: 

For this project we designed and developed a cloud based web application matches the cheapest flight ticket 
with user provided information (such as origin, destination, maximum price, dates of travel, etc.) using data 
from the Skyscanner api. Reference: https://rapidapi.com/blog/skyscanner-api-overview/php/


### Published Website:

https://flight-ticket-finder.herokuapp.com/#/


### Instructions for Running on Local:

1. Get RapidAPI key from https://rapidapi.com/skyscanner/api/skyscanner-flight-search and create a file called constants.js
in the api root folder. Populate constants.js with 

   `module.exports = Object.freeze({ key : {your key} });`

   OR

   request constants.js to ashleykim0506@gmail.com or eqiu21@gmail.com


2. `cd api` if you are in the repository root folder 

3. run `npm install` and `npm start` in the api root folder and go to http://localhost:3100/#/
