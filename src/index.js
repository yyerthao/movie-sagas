import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga stuff
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
// Import axios
import axios from 'axios';

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
            default:
                return state;
            }
        }

// Used to store genres returned from the server        
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
            // should now have all genre types
            // this allows us to map all types onto
            // drop down menu
        default:
            return state;
    }
}

// Used to store movie details returned from the server
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Starting from Home.jsx, we will dispatch an action type called FETCH_MOVIE
// Our rootSaga or watcherSaga on this page watch for FETCH_MOVIE to come through,
// then it'll run the function attached to it, which is getMovie
// this * SAGA function will make a axios get to our server
// then it'll come back with a response of data from our database,
// and send that through to our SET_MOVIES reducer.
// Essentially, this is why sagas are the middleman, they can communicate to our
// server, then bring back info (or post info to), then it'll communicate that
// to our reducer
// our reducers are what actually stores the data to render to DOM
function* getMovie(){
    console.log('Fetching movie');
    try{
        const response = yield axios.get('/api/movie')
        yield put({type: 'SET_MOVIES', payload: response.data})
    } catch(error){
        console.log('error with movie fetch request', error);
    }
}

// add function to get specific movie with id for genre
function* getDetails(action) {
    console.log('Fetching genre by id');
    try {
        // sending id 
        const response = yield axios.get('/api/movie/' + action.payload)
        yield put({
            type: 'SET_DETAILS',
            payload: response.data
        })
    } catch (error) {
        console.log('error with genre fetch request', error);
    }
}

function* getGenre(){
    console.log('Fetching genre');
    try{
        const response = yield axios.get('/api/genre')
        yield put({type: 'SET_GENRES', payload: response.data})
    } catch(error){
        console.log('error with genre fetch request', error);
    }
}

// put is like dispatching an action type
function* addMovie(action){
    console.log('Adding movie from user');
    try{
        yield axios.post('/api/movie', action.payload);
        console.log('------------------- ', action.payload);
        yield getMovie();

    } catch (error) {
        console.log('error with posting movie request', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('FETCH_MOVIE', getMovie)
yield takeEvery('FETCH_GENRE', getGenre)
yield takeEvery('POST_MOVIE', addMovie)
yield takeEvery('GET_DETAILS', getDetails)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Used to store the movie genres

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
