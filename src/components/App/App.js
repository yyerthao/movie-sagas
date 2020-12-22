import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Movie from '../Movie/Movie';
// Material UI 
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';


// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
// });


class App extends Component {
      // const { classes } = this.props;


// addMovie = () => {
//   this.props.history.push('/movie');
// }


  // Renders the entire app on the DOM
  render() {
    // const {classes} = this.props;
    return (
      <div className="App">
        <h1>THE CINEMATIC EXP</h1>
      {/* <Button 
          variant="contained" 
          color="primary" 
          onClick={this.addMovie}
          className={classes.button}>
            Add Movie
        </Button> */}

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