# Assignment 2 - Web API.

Name: Anthony Lonergan 20089310

## Features. 
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
 + Feature 20 = Pagination added to api side.
 + Feature 21 = Added Delete to users
 + Feature 22 = Added Delete to subs
## Installation Requirements

Nothing extra than what was used in the labs has to be added.

In the main folder terminal use npm start to start up the react app part.
```bat
npm start 
```

Then for the api use an intergrated terminal in movies-api to start the api.
```bat
npm start 
```


## API Configuration
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
| /api/movies/tmdb/movies  |Gets a list of movies | N/A | N/A |
| /api/movies/tmdb/upcoming  | Get a list of Upcoming Movies | N/A | N/A | N/A
| /api/movies/tmdb/topRated  | Get a list of top rated movies | N/A | N/A | N/A
| /api/movies/tmdb/currently  | Get a list of movies currently in cinema | N/A | N/A | N/A
| /api/movies/tmdb/popular  | Get a list of popular movies | N/A | N/A | N/A
| /api/movies/tmdb/TVLatest | Get the latest tv shows | N/A | N/A | N/A
| /api/movies/tmdb/TVToday | Get TV shows on today| N/A | N/A | N/A
| /api/movies/tmdb/TVNow  | Get Tv shows on now | N/A | N/A | N/A
| /api/movies/tmdb/TVPopular  | Get Popular TV Shows | N/A | N/A | N/A
| /api/movies/tmdb/TVTopRated | Get top rated tv shows | N/A | N/A | N/A
| /api/movies/tmdb/Providers  | Get Movie Providers | N/A | N/A | N/A
| /api/movies/tmdb/PopularActors | Get a list of popular actors | N/A | N/A | N/A
| /api/users| Get a User | Post a User | Update a User  | Delete a User
| /api/subs | Get a Subscriber | Post a subscriber | Update a Subscriber | Delete a Subscriber

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

Favorites route is a private route and you have to log in or signup to see the favorites page. All pages need a bearer token to access.
Passport and JWT is used.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. 
All my react abstract calls to my api are shown below. 

All the ones related to movies are displayed on the react app. The rest are set up properly to be used but are not displayed in a page on the react app.

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

 export const getTVLatest = () => {
  return fetch(
    '/api/movies/tmdb/TVLatest',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getTVToday = () => {
  return fetch(
    '/api/movies/tmdb/TVToday',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getTVNow = () => {
  return fetch(
    '/api/movies/tmdb/TVNow',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getTVPopular = () => {
  return fetch(
    '/api/movies/tmdb/TVPopular',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getTVTopRated = () => {
  return fetch(
    '/api/movies/tmdb/TVTopRated',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getProviders = () => {
  return fetch(
    '/api/movies/tmdb/Providers',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getPopularActors = () => {
  return fetch(
    '/api/movies/tmdb/PopularActors',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};
~~~

