import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import css from './Cast.module.css';

export const Cast = () => {
  const [moveCast, setMoveCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async movieId => {
      try {
        const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits&language=en-US&api_key=${apiKey}`
        );
        console.log(response.data.cast);
        setMoveCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
      fetchCast();
    };
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
