import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Movie from '../Movie/Movie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Home Cinema</h1>
        <div className="inner-div">

        <Router>
          {/* ADD PAGES! */}
          <br></br>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/movie" component={Movie}></Route>
        </Router>


        </div>
      </div>
    );
  }
}


export default App;
