import React, { Component } from "react";

 // TO DO: css. make it look pretty
 // TO DO: link OutboundLeg.CarrierIds to logos of the airline
 // TO DO: get currency symbol

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

  renderFlights(){
    return this.state.flights.Quotes.map(el => (
      <li key={el.QuoteId}>
      "Price: ",{el.MinPrice}, "Carrier: ",{el.OutboundLeg.CarrierIds}
       </li>
    ))
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