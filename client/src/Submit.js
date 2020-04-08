import React, { Component } from "react";
 
class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: undefined,
      destination: undefined,
      destinationCountry:undefined,
      price: undefined,
      depatureDate: undefined,
      returnDate: undefined,
      isLoading: true,
      flights: []
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });

    //console.log(event.target.id,": ", event.target.value)
  }

  async handleClick() {
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
          console.log(this.state.flights)
          //  TO DO: redirect to a different page with the value passed as props
    }));
    }catch (e) {
      alert(e);
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>Origin</label>
              <input type="text" id="origin" name="origin" value={this.state.origin} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Destination</label>
              <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Destination Country</label>
              <input type="text" id="destinationCountry" name="destinationCountry" value={this.state.destinationCountry} onChange={this.handleChange}/>
        </form>
        <form>
              <label>Price</label>
              <input type="number" id="price" name="price" className="inputbox" placeholder="Price..." value={this.state.price} onChange={this.handleChange}/>
        </form>
        <form>
              <label>Departure Date</label>
              <input type="date" id="depatureDate" name="depatureDate" value={this.state.depatureDate} onChange={this.handleChange}/>
        </form>
        <form>
              <label>Return Date</label>
              <input type="date" id="returnDate" name="returnDate" value={this.state.returnDate} onChange={this.handleChange}/>
         </form>
      <div>
          <button onClick={() => {this.handleClick()}}>
              Submit
          </button>
      </div>
      </div>
      
    );
  }
}
 
export default Submit;