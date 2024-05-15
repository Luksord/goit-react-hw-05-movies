import axios from 'axios';

// const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';   <<old key
const apiKey = '57132a11d2cf13904ec624572d403c9d';
// const apiKey = 'd33b1ea5c36bf52f0f9bd815b8fbc228';   <<Ivan's key

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWI5OGNjOTk1ZTkwZTg0N2VkN2U0MjcxMDZiY2JhZiIsInN1YiI6IjY2M2E5NWE0Mjc4MDA5MjcxYjVkZGVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xG4YTZpkqtUdEEIWdcqUEthtzjGlJjSNN3BLQGa_jz8',
//   },
// };
// fetch(
//   'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
//   options
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.error(error));

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=${apiKey}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

export const fetchMovies = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}?language=en-US?api_key=${apiKey}`
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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US?api_key=${apiKey}`
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
      `https://api.themoviedb.org/3/movie/${movieId}/credits&language=en-US&api_key=${apiKey}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
  }
};

export const fetchReview = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews&language=en-US&api_key=${apiKey}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
  }
};
