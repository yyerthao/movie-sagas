import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Movie from '../Movie/Movie';


function App(){


    return (
      <div className="App">
        <h1 className="h1-header">THE CINEMATIC EXP</h1>
          <br></br>
        <div className="inner-div">
        <Router>
          <Link to="/movie" replace>
            <span className="add-movie-btn">ADD MOVIE</span>
          </Link>
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


export default (App);
