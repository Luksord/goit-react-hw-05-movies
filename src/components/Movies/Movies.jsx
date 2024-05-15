import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
import css from './Movies.module.css';
import { fetchMovies } from 'Api';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const location = useLocation();

  // const fetchMovies = async query => {
  //   try {
  //     const apiKey = '57132a11d2cf13904ec624572d403c9d';
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/search/movie?query=${query}?language=en-US?api_key=${apiKey}`
  //     );
  //     console.log(response.data.results);
  //     setMovieSearch(response.data.results);
  //     setSubmitted(true);
  //     navigate(`/movies`, { replace: true });
  //   } catch (error) {
  //     console.error('Error fetching movies:', error);
  //   }
  // };

  const handleSearch = async event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    try {
      const movies = await fetchMovies(searchQuery);
      setSearchResults(movies);
      setSearched(true);
    } catch (error) {
      console.error('Error searching movies:', error);
      setSearchResults([]);
      setSearched(true);
    }
  };

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const query = form.elements.search.value;
  //   setQuery(query);
  //   await fetchMovies(query);
  //   form.reset();
  //   // const query = form.elements.search.value;
  //   // if (query.trim() === '') {
  //   //   alert('Please enter a search query');
  //   //   return;
  //   // }
  //   // try {
  //   //   const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
  //   //   const response = await axios.get(
  //   //     `https://api.themoviedb.org/3/search/movie?query=${query}?language=en-US?api_key=${apiKey}`
  //   //   );
  //   //   console.log(response.data.results);
  //   //   setMovieSearch(response.data.results);
  //   //   setSubmitted(true);
  //   //   navigate(`/movies`, { replace: true });
  //   // } catch (error) {
  //   //   console.error('Error fetching movie:', error);
  //   // }
  // };

  // useEffect(() => {
  // if (query.trim() === '') {
  //   alert('Please enter a search query');
  //   return;
  // }
  //   fetchMovies(quary).then(setMovieSearch);
  //   setSubmitted(true);
  //   navigate(`/movies`, { replace: true });
  // }, [quary]);

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

  return (
    <div>
      <form className={css.formContainer} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search for movies..."
          onChange={event => setSearchQuery(event.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {searched &&
        (searchResults.length > 0 ? (
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>
                <Link
                  key={result.id}
                  to={`/movies/${result.id}`}
                  state={{ from: location }}
                >
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are not matching results.</p>
        ))}
    </div>
  );
};
