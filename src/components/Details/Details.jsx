import React, { Component } from 'react';
import './Details.css'
;import { connect } from 'react-redux';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});


class Details extends Component {

// will render user's movie they've chosen from home page right away
componentDidMount(){
    this.props.dispatch({ type: 'FETCH_GENRE'})
}

// function to bring user back to home
goHome = () => {
    console.log('Inside goHome function');
    this.props.history.push('/');
}


// function to 
getdetailInfo = (details) => {
    console.log('Movie detail')
    this.props.dispatch({ type: 'SET_DETAILS', payload: details.id})
}


    render() {
        const {classes, details} = this.props;
        return (
            <>
            {/* Utilizie JSON.stringify to ensure array is retrieved correctly */}
            {/* {JSON.stringify(details)} */}

            <br></br>
            <Button 
                variant="contained" color="primary" 
                className={classes.button}
                onClick={this.goHome}>Back to Home
            </Button>
            <br></br>
            <h2>{details.title}</h2>
            <img 
                src={details.poster} 
                alt="Poster">
            </img>
            <h4>
            {/* INCLUDE GENRE */}
                {/* details.genre would NOT render anything as the details 
                array has no key of genre....  */}
            Genre: {details.name}
            </h4>
            <p>
                {details.description}
            </p>
            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({ 
details: reduxState.details,
});
export default connect(putStateOnProps)(withStyles(styles)(Details));
