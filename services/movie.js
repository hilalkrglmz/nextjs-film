const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2IzODk0Nzc1ODg5YTg2ZmY1YjU5YzM1ZWRiNjc2MCIsInN1YiI6IjY1NzVhZWUzNGJmYTU0MDEzODdmOTU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ehJ6p6VSk0dLwvt1NErmmfRrWClmcZEGKFOz0W5ykU'
    }
  };
  
  const fetchMovieApi = async (pathname,query = "") => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/${pathname}?${query}`, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching popular movies", error);
    }
  
  }

  const getSingleCategory=async (genreId) => {
  
    return fetchMovieApi('discover/movie','with_genre${genreId}')

}

const getCategories = async () => {
  return fetchMovieApi('genre/movie/list','page=1')
}

const getPopularMovies = async () => {
  return fetchMovieApi('movie/popular','page=1')
}
const getTopRatedMovies = async () => {
  return fetchMovieApi('movie/top_rated','page=1')
}


const getMovie = async (movieId) => {

    return fetchMovieApi(`movie/${movieId}`)
  
  }
  

  export { fetchMovieApi, options,getSingleCategory,getCategories,getPopularMovies,getTopRatedMovies, getMovie } 