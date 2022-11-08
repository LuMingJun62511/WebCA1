import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MoviePage = (props) => {
  const  id  = useParams();
  const { data: movie, error: error1, isLoading: isLoading1, isError: isError1 } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const id2 = id.id;
  const {data: actors, error: error2, isLoading: isLoading2, isError: isError2 } = useQuery(
    ["actors", { id: id2 }],
    getMovieCredits
  );

  if (isLoading1) {
    return <Spinner />;
  }
  if (isError1) {
    return <h1>{error1.message}</h1>;
  }
  if (isLoading2) {
    return <Spinner />
  }
  if (isError2) {
    return <h1>{error2.message}</h1>
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} actors={actors}/> 
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;