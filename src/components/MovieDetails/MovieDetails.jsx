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
    fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

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

// import { Suspense, useRef } from 'react';
// import { useState, useEffect } from 'react';
// import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
// import css from './MovieDetails.module.css';
// import { fetchMovieDetails } from 'Api';

// export const MovieDetails = () => {
//   const [movie, setMovie] = useState(null);
//   const { movieId } = useParams();
//   const location = useLocation();
//   const backLink = useRef(location.state?.from ?? '/');

//   useEffect(() => {
//     fetchMovieDetails(movieId).then(setMovie);
//   }, [movieId]);

//   if (!movie) {
//     return;
//   }

//   function formatAsPercent(num) {
//     return new Intl.NumberFormat('default', {
//       style: 'percent',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(num / 10);
//   }

//   return (
//     <>
//       <div className={css.wrapper}>
//         <div>
//           <Link to={backLink.current} className={css.link}>
//             <button className={css.backBtn}>← Go back</button>
//           </Link>
//           <img
//             src={
//               movie.poster_path
//                 ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
//                 : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
//             }
//             alt={`${movie.title}`}
//           />
//         </div>
//         <div className={css.details}>
//           <h2>
//             {movie.title} ({movie.release_date.slice(0, 4)})
//           </h2>
//           <p>User score: {formatAsPercent(movie.vote_average)}</p>
//           <h3>Overview</h3>
//           <p>{movie.overview}</p>
//           <h3>Genres</h3>
//           <p>{movie.genres.map(genre => genre.name).join(' / ')}</p>
//         </div>
//       </div>

//       <div className={css.additional}>
//         <h2>Additional information</h2>
//         <ul>
//           <li>
//             <Link to={'cast'}>Cast</Link>
//           </li>
//           <li>
//             <Link to={'reviews'}>Reviews</Link>
//           </li>
//         </ul>
//       </div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };
