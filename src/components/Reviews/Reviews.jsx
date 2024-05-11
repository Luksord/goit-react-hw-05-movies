import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import css from './Reviews.module.css';

export const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async movieId => {
      try {
        const apiKey = '9ab98cc995e90e847ed7e427106bcbaf';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews&language=en-US&api_key=${apiKey}`
        );
        console.log(response.data.results);
        setMovieReview(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
      fetchReview();
    };
  }, [movieId]);

  return (
    <>
      {movieReview.length > 0 ? (
        <ul>
          {movieReview.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'We dont have any reviews for this movie'
      )}
    </>
  );
};
