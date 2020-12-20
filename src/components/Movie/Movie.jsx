import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movie.css';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});


class Movie extends Component {



// local state to store information from user's movie

state = {
    title: '',
    poster: '',
    description: '',
    genre: ''
}   

// must utilizie componentDidMount to fetch all genres
// in order to map out all genres for drop down menu
componentDidMount(){
    this.props.dispatch({type: 'FETCH_GENRE'});
}

// function to bring user back to home
// goHome = () => {
//     console.log('Inside goHome button')
//     this.props.history.push('/');
// }

//  handleChange function to handle all input changes 
handleChange = (event, input) => {
    this.setState({
        ...this.state, // spread
        [input]: event.target.value 
        // brackets enables input to act like a variable to store value
    })
}


// brings user back to landing page, home
cancelSubmit = () => {
    this.props.history.push('/');
// would we dispatch to a reducer to clear array? 
}


// function to collect all details from user and save to DB
submitMovie = () => {
    this.props.dispatch({type: 'POST_MOVIE', payload: this.state});
    this.setState({
        title: '',
        poster: '',
        description: '',
        genre: ''
    })
    // after clicking on button 'Save', go back to main to see if movie was uploaded to list
    this.props.history.push('/');
}


    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* Utilizing json stringify to render to dom exactly what
                is being sent back from database */}
                    {/* {JSON.stringify(this.props.reduxState.genres)}; */}
               
                <br></br>

                {/* applying handleTitle function to input form */}

                <TextField 
                    id="outlined-name"
                    label="NAME"
                    className={classes.textField}
                    value={this.state.title}
                    margin="normal"
                    variant="outlined"
                    onChange={(event)=> this.handleChange(event, 'title')}>
                    <br></br>
                    <br></br>
                </TextField>

                <TextField 
                    id="outlined-name"
                    label="URL"
                    className={classes.textField}
                    value={this.state.poster}
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.handleChange(event, 'poster')}>
                </TextField>

                <TextField 
                    id="outlined-multiline-static"
                    label="DESCRIPTION"
                    multiline
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={(event)=> this.handleChange(event, 'description')}>
                </TextField>
                    <br></br>
                    <br></br>
                <div>
                    {/* START OF DROP DOWN CODES */}
                    <FormControl>
                        <InputLabel>
                            Genre
                        </InputLabel>
                        <Select 
                            value={this.state.genre} 
                            onChange={(event) => this.handleChange(event, 'genre')}>
                        {/* MAPPING OUT ARRAY OF GENRES REDUCER */}
                            {this.props.reduxState.genres.map((genre, i) =>
                                <MenuItem key={i} value={genre.id}>
                                    {genre.name}
                                </MenuItem>)}
                        </Select>


                    </FormControl>
                </div>


                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button} 
                    onClick={this.cancelSubmit}>
                        Cancel
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.button} 
                    onClick={this.submitMovie}>
                        Add Movie
                </Button>

                {/* <select 
                    value={this.state.genre} 
                    onChange={(event)=> this.handleChange(event, 'genre')}>
                </select> */}




            </div>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });
export default connect(putStateOnProps)(withStyles(styles)(Movie));
