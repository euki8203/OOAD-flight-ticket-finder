import React, { Component } from "react";
import { Link } from "react-router-dom";
 
/*  
 * Submit page for user submitted information
 */
class Submit extends Component {
  constructor(props) {
    super(props);
    // Submit State for State pattern
    this.state = {
      origin: undefined,
      destination: undefined,
      destinationCountry:undefined,
      price: undefined,
      depatureDate: undefined,
      returnDate: undefined,
      isLoading: true,
      flights: [],
      // Defining sort behavior at run time for Strategy pattern
      // initialize with default value price
      sortBehavior: "price"
    };
  }

  // Changing the state based on user input
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });

    // console.log(event.target.id,": ", event.target.value)
  }

  // Once the user clicks submit on their information
  async handleClick() {
    try{
      await fetch(`findFlight?inboundDate=${this.state.returnDate}&originPlace=${this.state.origin}&destinationPlace=${this.state.destination}&outboundDate=${this.state.depatureDate}&country=${this.state.destinationCountry}`, {mode: 'no-cors'})
      .then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status,
          })
      ).then(res => {
          // Define state here with api request, default undefined values handled in Request.js
          this.setState({ 
            flights: res.data,
            isLoading: false
          })
          // console.log(this.state.flights)
    }));
    }catch (e) {
      alert(e);
    }
  }

  // Helper function to generate a min date to prevent users from selecting dates in the past
  minDate(){
    var someDate = new Date();
    var numberOfDaysToAdd = 1;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
    return someDate.toISOString().split("T")[0];
  }

  // Generates the html to be displayed
  render() {
    return (
      <div className="submit">
        <form>
          <label>Origin (ex. DEN, DFW) </label>
              <input type="text" id="origin" name="origin" value={this.state.origin} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Destination (ex. SFO, ORD) </label>
              <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Destination Country (ex. US) </label>
              <input type="text" id="destinationCountry" name="destinationCountry" value={this.state.destinationCountry} onChange={this.handleChange}/>
        </form>
        <form>
              <label>Maximum Price </label>
              <input type="number" id="price" name="price" placeholder="Price..." value={this.state.price} onChange={this.handleChange}/>
        </form>
        <form>
              <p> Departure Dates </p>
              <label> From </label>
              <input type="date" min={new Date().toISOString().split("T")[0]} id="depatureDate" name="depatureDate" value={this.state.depatureDate} onChange={this.handleChange}/>
        </form>
        <form>
              <label>To </label>
              <input type="date" min={this.minDate()} id="returnDate" name="returnDate" value={this.state.returnDate} onChange={this.handleChange}/>
         </form>
         <form>
          <label> Sort by: </label>
          {/* Strategy pattern here for defining sort behavior during run time */}
          <select id="sortBehavior" value = {this.state.sortBehavior} onChange={this.handleChange}>
            <option value="price">Price</option>
            <option value="time">Time</option>
          </select>
        </form>
      <div>
        <Link to={{ 
            pathname: '/View', 
            state: this.state
          }}>
          <button className="select_button">
              Submit
          </button>
          </Link>
      </div>
      </div>
      
    );
  }
}
 
export default Submit;