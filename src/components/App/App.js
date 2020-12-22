import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Movie from '../Movie/Movie';
// Material UI 
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';




class App extends Component {


// addMovie = () => {
//   this.props.history.push('/movie');
// }


  // Renders the entire app on the DOM
  render() {

    return (
      <div className="App">
        <h1>THE CINEMATIC EXP</h1>


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
}


export default (App);
// withStyles(styles)