import React from "react";
import { useParams } from 'react-router-dom';
import { getActorDetails } from '../api/tmdb-api'
import { getExternalID } from '../api/tmdb-api'
import { getActorCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import Box from "@mui/material/Box";
import ActorDetailLeft from '../components/actorDetailLeft/'
import ActorDetailRight from '../components/actorDetailRight/'


const ActorDetailsPage = (props) => {
  const id = useParams();

  const { data: actorDetails, error: error1, isLoading: isLoading1, isError: isError1 } = useQuery(
    ["actorDetails", id],
    getActorDetails
  );

  const { data: externalID, error: error2, isLoading: isLoading2, isError: isError2 } = useQuery(
    ["externalID", id],
    getExternalID
  );

  const { data: actorCredits, error: error3, isLoading: isLoading3, isError: isError3 } = useQuery(
    ["actorCredits", id],
    getActorCredits
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
  if (isLoading3) {
    return <Spinner />
  }
  if (isError3) {
    return <h1>{error3.message}</h1>
  }

  return (
    <Box sx={{display: 'flex',spacing: 8, mx: 10,}}>
      <ActorDetailLeft actorDetails={actorDetails} externalID={externalID} ></ActorDetailLeft>
      <ActorDetailRight actorDetails={actorDetails} actorCredits={actorCredits}></ActorDetailRight>
    </Box>
  );
};

export default ActorDetailsPage;