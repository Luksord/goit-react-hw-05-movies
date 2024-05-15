import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import css from './Cast.module.css';
import { fetchCast } from 'Api';

export const Cast = () => {
  const [moveCast, setMoveCast] = useState([]);
  const { movieId } = useParams();

  // const fetchCast = async id => {
  //   try {
  //     const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}/credits&language=en-US&api_key=${apiKey}`
  //     );
  //     console.log(response.data);
  //     setMoveCast(response.data);
  //   } catch (error) {
  //     console.error('Error fetching movie cast:', error);
  //   }
  // };

  useEffect(() => {
    if (!movieId) return;
    fetchCast(movieId).then(setMoveCast);
  }, [movieId]);

  return (
    <>
      <ul>
        {moveCast.map(actor => (
          <li key={actor.id}>
            <img
              // className={css.image}
              src={actor.profile_path}
              alt={actor.original_name}
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
