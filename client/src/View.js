import React, { Component } from "react";

class View extends Component {
	constructor(props) {
    super(props);

    this.state = {
      origin: undefined,
      destination: undefined,
      destinationCountry: undefined,
      price: undefined,
      depatureDate: undefined,
      returnDate: undefined,
      isLoading: true,
      flights: []
    };
    this.sort = undefined;
  }

  async componentDidMount(){
  	try{
      await fetch(`findFlight?inboundDate=${this.state.returnDate}&originPlace=${this.state.origin}&destinationPlace=${this.state.destination}&outboundDate=${this.state.depatureDate}&country=${this.state.destinationCountry}`, {mode: 'no-cors'})
      .then(response => 
          response.json().then(data => ({
              data: data,
              status: response.status,
          })
      ).then(res => {
          this.setState({ 
            flights: res.data,
            isLoading: false
          })
          //console.log(this.state.flights)
    }));
    }catch (e) {
      alert(e);
    }

  }

  replaceCarrier(ID) {
    if (ID == "881"){
      return "British Airways";
    }
    else if (ID == "851"){
      return "Alaska";
    }
    else if (ID == "1793"){
      return "United";
    }
    else if (ID == "1065"){
      return "Frontier";
    }
    else if (ID == "1126"){
      return "Gulf Air";
    }
    else if (ID == "1467"){
      return "Spirit";
    }
    else {
      return ID;
    }
  }

  getCarrierLogo(ID) {
    if (ID == "881"){
      return "./british_logo.png";
    }
    else if (ID == "851"){
      return "./alaska_logo.png";
    }
    else if (ID == "1793"){
      return "united_logo.png";
    }
    else if (ID == "1065"){
      return "frontier_logo.png";
    }
    else if (ID == "1467"){
      return "spirit_logo.png";
    }
    else {
      return "./plane_logo.png";
    }
  }

  sortFlights(sortBehavior) {
    if (sortBehavior == "price"){
      this.state.flights.Quotes.sort(function(a,b) { return parseInt(a.MinPrice)-parseInt(b.MinPrice)});
    }
    else if (sortBehavior == "time"){
      this.state.flights.Quotes.sort(function(a,b) {
        var date1 = new Date(a.OutboundLeg.DepartureDate);
        var date2 = new Date(b.OutboundLeg.DepartureDate);
        return date1-date2;
      });
    }

  }

  convertDate(date) {
    var newdate = new Date(date);
    return newdate.getFullYear()+'-' + (newdate.getMonth()+1) + '-'+newdate.getDate();
  }


  renderFlights() {
    
    return(
    <div>
      <div class="dropdown">
        <label for="sort">Sort by: </label>
        <select id="sort"value={this.state.selectSort} 
        onChange={this.handleSort} >
          <option value="price">Price</option>
          <option value="time">Time</option>
        </select>
        {this.sortFlights(this.sort.value)}
      </div>
      <div class="quote-container">
      {this.state.flights.Quotes.map(el => (
        <li key={el.QuoteId} class= "quote">
        <div>
          <img src={this.getCarrierLogo(el.OutboundLeg.CarrierIds)}
          width="50" height="50"/>
        </div>
        <h2>{this.replaceCarrier(el.OutboundLeg.CarrierIds)} &nbsp;</h2>
        <h3>DEN to SFO &nbsp;</h3>
        <p>
        Price: {this.state.flights.Currencies[0].Symbol}{el.MinPrice} &nbsp;
        Departure Date: {this.convertDate(el.OutboundLeg.DepartureDate)}
        </p>
        <br></br>
        </li>
      ))}
      </div>
    </div>)
  }

  render() {
    return (
    <div className= "center">
    {this.state.isLoading === false ? this.renderFlights() : "Loading"}
    </div>
    );
  }
}
 
export default View;