import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
import css from './MovieDetails.module.css';
import { fetchMovieDetails } from 'Api';
import { Router } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  // const fetchMovieDetails = async id => {
  //   try {
  //     const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}?language=en-US?api_key=${apiKey}`
  //     );
  //     console.log(response.data);
  //     setMovieDetails(response.data);
  //   } catch (error) {
  //     console.error('Error fetching movie details:', error);
  //   }
  // };

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer 9ab98cc995e90e847ed7e427106bcbaf'
  //     }
  //   };
  //   fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  // const MovieDetails = () => {
  //   const [movie, setMovie] = useState();
  //   let location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/';
  //   const showFetchedDetailsMovie = async id => {
  //     try {
  //       const fetchedDetailsMovie = await fetchDetailsMovie(id);
  //       setMovie(fetchedDetailsMovie);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const { movieId } = useParams();
  // useEffect(() => {
  //   showFetchedDetailsMovie(movieId);
  // }, [movieId]);

  const BackButton = () => {
    return (
      <button type="button" className={css.button} onClick={goBack}>
        ← Go back
      </button>
    );
  };

  function goBack(event) {
    event.preventDefault();
    Router.back();
    // navigate('/');
  }

  return (
    <>
      <div className={css.movieDetailsContainer}>
        <div className={css.imgWrap}>
          <BackButton />
          <img
            src={movieDetails.poster_path}
            alt={movieDetails.title}
            className={css.MovieImg}
          />
        </div>
        <div className={css.movieInformation}>
          <h1>
            {movieDetails.title} {movieDetails.release_date}
          </h1>
          <p>User score: {movieDetails.vote_average}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <div className={css.additionalInformation}>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
