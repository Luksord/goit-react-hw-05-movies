import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US?api_key=${apiKey}`
        );
        console.log(response.data);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
      fetchMovieDetails();
    };
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

  return (
    <>
      <div className={css.movieDetailsContainer}>
        <div className={css.imgWrap}>
          {/* <Link to={backLink.current} className={css.link}>
            <button className={css.backBtn}>← Go back</button>
          </Link> */}
          <img
            src={movieDetails.poster_path}
            alt={`${movieDetails.title}`}
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
