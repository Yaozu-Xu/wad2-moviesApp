const baseUrl = 'https://wad-assignment2-yaozuxu.netlify.app/.netlify/functions/api'

export const getMovies = () => {
    return fetch(
      `${baseUrl}/movies`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `${baseUrl}/movies/${id}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpComingMovies = (page=1) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    )
    .then(res => res.json())
    .then(json => json.results);
  }

  export const getTrendings = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then(res => res.json())
    .then(json => json.results)
  }

  export const getMovieStars = (page=1) => {
    return fetch(
      `${baseUrl}/stars`
    )
    .then(res => res.json())
    .then(json => json.results)
  } 

  export const getStarDetail = (id) => {
    return fetch(
      `${baseUrl}/stars/${id}`
    )
    .then(res => res.json())
  } 