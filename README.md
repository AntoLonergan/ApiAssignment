# Assignment 2 - Web API.

Name: Anthony Lonergan

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - Login and Signup pages implemented in react to view protected routes.
 + Feature 2 - Discover movies updated to work with TMDB and fully intergrated with react.
 + Feature 3 = Top Rated Movies made to work with TMDB and fully intergrated with react.
 + Feature 4 = Movies Currently in Cinema made to work with TMDB and fully intergrated with react.
 + Feature 5 = Popular Movies made to work with TMDB and fully intergrated with react.
 + Feature 6 = Latest TV shows made to work with TMDB in the api , abstract calls from react completed.
 + Feature 7 = TV shows airing today to work with TMDB in the api , abstract calls from react completed.
 + Feature 8 = TV shows airing right now to work with TMDB in the api , abstract calls from react completed.
 + Feature 9 = Popular TV shows to work with TMDB in the api , abstract calls from react completed.
 + Feature 10 = Top Rated TV shows to work with TMDB in the api , abstract calls from react completed.
 + Feature 11 =  Network Providers to work with TMDB in the api , abstract calls from react completed.
 + Feature 12 = Popular Actors to work with TMDB in the api , abstract calls from react completed.
 + Feature 13 = Users are able to be got saved to mogoose.
 + Feature 14 = Can Post new users to the api and mongoose.
 + Feature 15 = Can Update the users that are saved with mongoose.
 + Feature 16 = Subs can be got saved to mongoose.
 + Feature 17 = Can post new subs to the api and mongoose.
 + Feature 18 = Can Update the subs that are saved with mongoose.
 + Feature 19 = Changed settings so that seed information stays constant and will not reset every time.
## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

followed by installation

```bat
git install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

ENV for api part
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
REACT_APP_TMDB_KEY=TMDB Key
NODE_ENV=development
```

ENV for react part
```bat
REACT_APP_TMDB_KEY=TMDB Key
FAST_REFRESH=false
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies/tmdb/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

  export const getUpcomingMovies = () => {
    return fetch(
      '/api/movies/tmdb/upcoming',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json());
 };

  export const getPopularMovies = () => {
    return fetch(
      '/api/movies/tmdb/popular',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json());
 };

  export const getTopMovies = () => {
    return fetch(
      '/api/movies/tmdb/topRated',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json());
 };

  export const getCurrent = () => {
    return fetch(
      '/api/movies/tmdb/currently',{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
   ).then(res => res.json());
 };

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  
