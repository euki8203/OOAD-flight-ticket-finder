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
            width="50" height="50"/>
            <h1> Flight Ticket Finder</h1>
            <Link to="/" class="select_button">About</Link>
            <Link to="/View" class="select_button">View All Flight Options</Link>
            <Link to="/Submit" class="select_button">Enter Flight Information</Link>
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
