import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './zomato/homePage';
import Lunch from './zomato/Lunch';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/lunch" component={Lunch}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
