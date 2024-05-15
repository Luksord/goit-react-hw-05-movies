import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
import { fetchTrending } from 'Api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  // useEffect(() => {
  //   const fetchTrending = async () => {
  //     try {
  //       const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=${apiKey}`
  //       );
  //       console.log(response.data.results);
  //       setTrendingMovies(response.data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchTrending();
  // }, []);

  useEffect(() => {
    fetchTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// useEffect(() => {
//   if (query === '') return;
//   const fetchImages = async () => {
//     setLoader(true); // Włączenie ikonki ładowania
//     try {
//       const baseUrl = 'https://pixabay.com/api/';
//       const apiKey = '42459296-f3a6b1338d11ae21b8ba0dee6';
//       const searchParams = new URLSearchParams({
//         q: query,
//         page: page,
//         key: apiKey,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 20,
//         safesearch: true,
//       });
//       const response = await axios.get(`${baseUrl}?${searchParams}`);
//       console.log(response.data);
//       const newImages = response.data.hits;
//       if (newImages.length === 0) {
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       } else {
//         // setImages(newImages);    // <-- Wyświetla tylko rezultat query, po wcisnięciu load more nadpisuje stare obrazki nowymi
//         setImages(prevImages => [...prevImages, ...newImages]); // <-- Nowo dodane obrazki wyświetlają się pod starymi, włącznie z tymi z świeżego query
//         // setPreviousImages(prevImages => [...prevImages, ...newImages]); // Aktualizacja poprzednich wyników
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoader(false); // Wyłączenie ikonki ładowania
//     }
//   };
//   if (page === 1) {
//     // <-- Czyści poprzednią galerię jeśli pobierana jest pierwsza strona wyników
//     setImages([]);
//   }
//   fetchImages();
// }, [query, page]);
