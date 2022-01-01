export const getMovies = () => {
  return fetch(
     '/api/movies/tmdb/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

/*export const getMovie = id => {
  return fetch(
    `/api/movies/tmdb/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};*/
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
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

 

  export const getLatest = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getSocials = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
    

  export const getSimilarMovies = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };