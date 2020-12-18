### To Do List

1.  Set Up:
    [] npm install
    [] npm run server 
    [] npm run client

2. Database:
    [] create a database named: saga_movies_weekend
    [] run the queries from database.sql on database created
    [] create junction table between movies and genres table
        [] generate some data for the junction table just added

3. List Page 
* This should display ALL of the movies in the movie database. 
    [] movie img poster
        [] onClick={handleClick}
            [] this.props.history.push('/details')

4. Details View
* This should show all details including genres, for the selected movie
* HINT: Can make a GET request for a specific movie
    [] Button: Back to List
        [] this.props.history.push('/')      / brings user back to List Page
* Base functionality does not require the movie details to load correctly after refresh of the browser

5. Add Movie Page
    [] input field for movie title
    [] input field for movie poster image URL
    [] text area for movie description
    [] a dropdown (for the genres)

    [] Cancel button
        [] dispatch action type to clear array 
        [] this.props.history.push('/')

    [] Save Button
        [] update title and description in database
            [] dispatch action type to saga 
        [] bring user back to home page, should now have new movie after this
            [] this.props.history.push('/')
* HINT: Look at the /api/movie POST route -- it's been made already
* HINT: You'll want to use the genres that are in the DDB for your dropdown
* HINT: Base does NOT require being able to select more than one genre for a new movie



[] Material UI project
[] Research cards for movie posters on the List Page
[] Research grids for movie posters on the Movie List Page 
[] Comment code
[] Update ReadMe
