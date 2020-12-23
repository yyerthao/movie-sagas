import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';



class Home extends Component {
    // this will fetch our movie data from DB 
    componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIE'});
    }

    // this function will dispatch our movie data to details reducer 
    // to store all the movie data into an array
    getMovieInfo = (movie) => {
    console.log('Getting movie details')
    this.props.dispatch({type: 'SET_DETAILS', payload: movie})
    this.props.history.push('/details')
    }

    render() {
        const {movies} = this.props;
        return (
            <>
                <h2 className="instruction-text">Please click on one of the following movies for further details.</h2>
                <h2 className="instruction-text, h2-margin">Also, because 2020...free popcorn for everyone.</h2>
                {/* Mapping out our movies reducer, which has all of our 
                pre-set movies from our database */}
                {movies.map ((movie, i) => {
                    return(
                        <div className="img-div" key={i}>
                            <h4>{movie.title}</h4>
                            <img 
                                src={movie.poster} 
                                alt="Poster"
                                onClick={() => this.getMovieInfo(movie)}>
                            </img>
                        </div>
                    )
                })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ 
movies: reduxState.movies

});
export default connect(putStateOnProps)(Home);