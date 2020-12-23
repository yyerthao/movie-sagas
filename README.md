![REPO SIZE](https://img.shields.io/github/repo-size/yyerthao/movie-sagas.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/yyerthao/movie-sagas.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/yyerthao/movie-sagas.svg?style=social)

# MOVIE SAGA

## Description

_Duration: 35 hours

Create an application where user can select movie from movie list upon opening landing page on web browser. After clicking on specified movie, user will be directed to a new view with details of the movie selected. User will also have option to add their own personal choice of movie, URL, description, and genre.  


### Prerequisites
* Node.js
* Postico (optional for DB)
* Postman (optional for server testing)


### Screenshots

* Landing View
![Landing Page](./Screenshots/Landing.png)

* Details View
![Details View](./Screenshots/Details.png)

* Add Movie View
![Add Movie View](./Screenshots/AddMovieView.png)




## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!


## Usage

1. Open browser
2. Click on movie of choice
3. Add Movie 
    (include title, 
                description, 
                    valid URL, 
                        and select genre)
4. Submit, return to landing page

## Built With

* HTML5
* CSS
* JavaScript
* React
* Redux
* Material UI
* Sagas


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Additionally, I'd like to thank Cassen Gerber, James Posey, and Malik Elate from the Vatti cohort of Prime Digital Academy for their guidance and code reviews.

## Support
If you have suggestions or issues, please email me at [maivyerthao@gmail.com] 