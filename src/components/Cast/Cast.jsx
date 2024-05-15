// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchCast } from 'Api';
// // import css from './Cast.module.css';

// export const Cast = () => {
//   const [movieCast, setMovieCast] = useState([]);
//   const { movieId } = useParams();

//   // const fetchCast = async id => {
//   //   try {
//   //     const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
//   //     const response = await axios.get(
//   //       `https://api.themoviedb.org/3/movie/${id}/credits&language=en-US&api_key=${apiKey}`
//   //     );
//   //     console.log(response.data);
//   //     setMoveCast(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching movie cast:', error);
//   //   }
//   // };

//   useEffect(() => {
//     if (!movieId) return;
//     fetchCast(movieId).then(setMovieCast);
//   }, [movieId]);

//   return (
//     <>
//       <ul>
//         {movieCast.map(actor => (
//           <li key={actor.id}>
//             <img
//               // className={css.image}
//               src={`https://www.themoviedb.org/t/p/w500/${actor.profile_path}`}
//               alt={actor.original_name}
//             />
//             <h3>{actor.name}</h3>
//             <p>Character: {actor.character}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Api';

import css from './Cast.module.css';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <>
      <ul className={css.wrapper}>
        {movieCast.map(actor => (
          <li key={actor.id} className={css.item}>
            <img
              className={css.image}
              src={`https://www.themoviedb.org/t/p/w500/${actor.profile_path}`}
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
