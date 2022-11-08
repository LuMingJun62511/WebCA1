import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActorCredits from '../actorCredits/';

const ActorDetailRight = ({ actorDetails, actorCredits }) => {
  return (
    <Paper>
      <Typography component="p" sx ={{fontSize:30}} >
        {actorDetails.name}
      </Typography>
      <Typography component="p">
        Personal Introduction
      </Typography>

      <Typography component="p">
        {actorDetails.biography}
      </Typography>

      <Grid>
        <ActorCredits actorCreditsCast = {actorCredits.cast}/>
      </Grid>
    </Paper>
  );
};
export default ActorDetailRight;

