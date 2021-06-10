import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import {Grid, Image} from 'semantic-ui-react'
import './Home.css';


const styles = theme => ({
    root: {
        // flexGrow: ,
    },
    paper: {
        height: 520,
        width: 350,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 345,
        minWidth: 275,
    },
    media: {
        height: 520,
    },

});

class Home extends Component {

    state = {
        spacing: '16',
    };

    // this will fetch our movie data from DB 
    componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIE'});
    }

    // this function will dispatch our movie data to details reducer 
    // to store all the movie data into an array
    getMovieInfo = (id) => {
    console.log('Getting id details')
    this.props.dispatch({type: 'GET_DETAILS', payload: id})
    this.props.history.push('/details')
    }

    render() {
        const {classes, movies} = this.props;
        const { spacing } = this.state;

        return (
            <div>
                <Grid>
                    {movies.map((movie, i) => (
                        <Grid.Row columns={3} key={i}>
                            <Grid.Column>
                                <Image src={movie.poster} 
                                    onClick={() => { this.getMovieInfo(movie.id)}}/>
                                    {/* <h4>{movie.title}</h4> */}
                            </Grid.Column>
                        </Grid.Row>
                    ))}    
                </Grid>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ 
    movies: reduxState.movies
});


export default connect(putStateOnProps)(withStyles(styles)(Home));




