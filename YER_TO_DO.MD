### To Do List

1.  Set Up:
    [x] npm install
    [Already pre-installed] npm install redux
    [Already pre-installed] npm install react-redux
    [Already pre-installed] npm install react-router-dom
    [Already pre-installed] npm install redux-logger
    [Already pre-installed] npm install redux-saga
    [x] npm install dotenv
    [x] npm install @material-ui/core

    [x] npm run server 
    [x] npm run client

2. Database:
    [x] create a database named: saga_movies_weekend
    [x] run the queries from database.sql on database created
    [x] create junction table between movies and genres table
        [x] generate some data for the junction table just added

3. Home/List Page 
* This should display ALL of the movies in the movie database. 
    [] movie img poster
        [x] onClick={handleClick}
            [x] this.props.history.push('/details')

4. Details View
* This should show all details including genres, for the selected movie
* HINT: Can make a GET request for a specific movie
    [x] Button: Back to List
        [x] this.props.history.push('/')      / brings user back to List Page
* Base functionality does not require the movie details to load correctly after refresh of the browser

5. Add Movie Page
    [x] input field for movie title
    [x] input field for movie poster image URL
    [x] text area for movie description
    [] a dropdown (for the genres)

    [x] Cancel button
        [] dispatch action type to clear array 
        [x] this.props.history.push('/')

    [x] Save Button
        [x] update title and description in database
            [x] dispatch action type to saga 
        [x] bring user back to home page, should now have new movie after this
            [x] this.props.history.push('/')
* HINT: Look at the /api/movie POST route -- it's been made already
* HINT: You'll want to use the genres that are in the DDB for your dropdown
* HINT: Base does NOT require being able to select more than one genre for a new movie



[] Material UI project
[] Research cards for movie posters on the List Page
[] Research grids for movie posters on the Movie List Page 
[] Comment code
[] Update ReadMe
