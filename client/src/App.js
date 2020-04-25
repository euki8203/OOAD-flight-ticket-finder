import React, { Component } from 'react';
import './App.css';
import { Route, Link, HashRouter, Switch } from "react-router-dom";
import Home from "./Home";
import View from "./View";
import Submit from "./Submit";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="header">
            <img alt="Plane logo" src="./plane_logo.png"
            width="70" height="70"/>
            <h1> Flight Ticket Finder</h1>
            <Link to="/" className="select_button">About</Link>
            <Link to="/View" className="select_button">View Flight Options</Link>
            <Link to="/Submit" className="select_button">Enter Flight Information</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/View" component={View}/>
            <Route path="/Submit" component={Submit}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
