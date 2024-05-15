import axios from 'axios';

// const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';   <<old key
// const apiKey = '57132a11d2cf13904ec624572d403c9d';
// const apiKey = 'd33b1ea5c36bf52f0f9bd815b8fbc228';   <<Ivan's key
// const apiKey = '83fe4e9d01861b0f36bfa49639461a22';   <<nadal nie dziłą

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ZlNGU5ZDAxODYxYjBmMzZiZmE0OTYzOTQ2MWEyMiIsInN1YiI6IjY2NDUyYzg1YWJlNzU2M2IxNTkxYWViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yVZ0bj6UmmlZ0RhAV3-Ahnd6vo7YWCs0rm4digLi9CY',
  },
};
// fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US?`,
      options
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

export const fetchMovies = async searchQuery => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US?`,
      options
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
  }
};
