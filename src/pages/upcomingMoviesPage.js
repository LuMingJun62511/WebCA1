//import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylist from '../components/cardIcons/addToPlaylist'

//00
//其实这一页任务很简单，就是类似主页，只不过换了一个取数据的途径
//it seems I have done exercise3 in exercise1
const UpcomingMoviesPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylist movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;
