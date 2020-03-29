import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div className="header">
          <h2> OOAD Final Project</h2>
          <h3> Ashley Kim & Elizabeth Qiu</h3>
          <p>
            This app matches users with flights using data from the Skyscanner api.
          </p>
          <img alt="Plane logo" src="./plane_logo.png"
          width="300" height="300"/>
        </div>
    );
  }
}
 
export default Home;