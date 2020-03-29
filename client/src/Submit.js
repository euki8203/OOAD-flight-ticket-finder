import React, { Component } from "react";
 
class Submit extends Component {
  render() {
    return (
      <div>
        <div class="input">
          <div class="cont">
              <label for="departure">Departure</label>
              <input type="date" id="departure" name="departure"/>
          </div>
          <div class="cont">
              <label for="arrival">Arrival</label>
              <input type="date" id="arrival" name="arrival"/>
          </div>
          <div class="cont">
              <label for="number">Price</label>
              <input type="number" name="price" class="inputbox" placeholder="Price..."/>
          </div>
        </div>
      <div>
          <a class="select_button" href="#">Submit</a>
      </div>
      

      </div>
      
    );
  }
}
 
export default Submit;