import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './zomato/homePage';
import Lunch from './zomato/Lunch';
import Particular from './zomato/Particular';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path={["/Lunch", "/Dinner", "/Breakfast", "/Cafes", "/Delivery"]}  component={Lunch}/> 
        <Route path="/particular" component={Particular}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
