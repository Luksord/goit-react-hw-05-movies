import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import css from './Movies.module.css';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.search.value;
    if (query.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    try {
      const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}?language=en-US?api_key=${apiKey}`
      );
      console.log(response.data.results);
      setMovieSearch(response.data.results);
      setSubmitted(true);
      navigate(`/movies`, { replace: true });
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
    form.reset();
  };

  //   useEffect(() => {
  //     const fetchMovie = async query => {
  //       try {
  //         const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
  //         const response = await axios.get(
  //           `https://api.themoviedb.org/3/search/movie?query=${query}?language=en-US?api_key=${apiKey}`
  //         );
  //         console.log(response.data.results);
  //         setMovieSearch(response.data.results);
  //         setSubmitted(true);
  //         navigate(`/movies`, { replace: true });
  //       } catch (error) {
  //         console.error('Error fetching movie:', error);
  //       }
  //       fetchMovie();
  //     };
  //   }, [query]);
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer 9ab98cc995e90e847ed7e427106bcbaf'
  //     }
  //   };
  //   fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search for movies..." />
        <button type="submit">Search</button>
      </form>
      {submitted &&
        (movieSearch.length > 0 ? (
          <ul>
            {movieSearch.map(result => (
              <li key={result.id}>
                <Link to={`/movies/${result.id}`}>{result.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are not matching results.</p>
        ))}
    </div>
  );
};
