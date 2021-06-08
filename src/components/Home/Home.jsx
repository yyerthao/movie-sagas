import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
            <>
                <h2 className="instruction-text">Please click on one of the following movies for further details.</h2>
                <br></br>
                <br></br>

                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={spacing}>
                            {movies.map((movie, i) => (
                                <Grid key={i} item>
                                    <Paper className={classes.paper}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={movie.poster}
                                                    // title={movie.title}
                                                    onClick={() => { this.getMovieInfo(movie.id) }}
                                                    />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {movie.title}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button 
                                                    size="small" 
                                                    color="primary" 
                                                    Share
                                                    onClick={() => { this.getMovieInfo(movie.id) }}
                                                    >
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ 
    movies: reduxState.movies
});


export default connect(putStateOnProps)(withStyles(styles)(Home));




