import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { getCredits } from "../../api/tmdb-api";
import {getMovieReviews} from "../../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../../components/spinner';

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails =({ movie }) => {  
  console.log("本电影的id是");
  console.log(movie.id);
  console.log("本电影的名称是");
  console.log(movie.original_title);
  console.log("本电影的上映时间是");
  console.log(movie.release_date);
  const [drawerOpen, setDrawerOpen] = useState(false);
  //传进来的movie也没问题，是一整个movie的所有信息，有极小可能是movie.id和需要的id不是一个东西，
  // const { data, error, isLoading, isError } = useQuery(
  //   ["movie", { id: movie.id }], 
  //   getMovie
  //   );
  // if (isLoading) {
  //   return <Spinner />
  // }

  // if (isError) {
  //   // return <h1>{error.message}</h1>
  //   console.log(error.message);
  // }
  // console.log("至少运行了");
  // console.log(data);

  //useQuery我确实不知道他有什么问题，这样，我先能取出来，我在去对他进行重构
  

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>


      {/* 要做的国家列表，他和上面的流派列表很像，我大概要抄他的东西 */}
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>


      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;