import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Movie from '../Movie/Movie';

class App extends Component {
  // Renders the entire app on the DOM



  render() {
    return (
      <div className="App">
        <h1>List Of Movies</h1>
        <Router>
          <Link to="/details" replace>Details</Link>
          <br></br>
          <Link to="/movie" replace>Add Movie</Link>
          {/* ADD PAGES! */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/movie" component={Movie}></Route>
        </Router>


        {/* <p>Empty Page</p> */}
      </div>
    );
  }
}


export default App;
