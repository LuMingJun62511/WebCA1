import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png'
import Paper from "@mui/material/Paper";
import AccessFaceBook from "../cardIcons/accessFaceBook";
import AccessInstagram from "../cardIcons/accessInstagram";
import AccessTwitter from "../cardIcons/accessTwitter";

const ActorDetailLeft = ({ actorDetails, externalID }) => {
  return (
    <Paper sx={{ elevation:0, width: 300, height: '100%',mr: 2 }}>
      <Card>
        <CardMedia
          sx={{ height: 450, width: 300 }}
          image={
            actorDetails.profile_path
              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${actorDetails.profile_path}`
              : img
          }
        />
        <CardActions disableSpacing>
          {externalID.facebook_id? <AccessFaceBook facebook_id = {externalID.facebook_id}></AccessFaceBook>:"" }
          {externalID.instagram_id? <AccessInstagram instagram_id = {externalID.instagram_id}></AccessInstagram> :"" }
          {externalID.twitter_id? <AccessTwitter twitter_id = {externalID.twitter_id}></AccessTwitter> :"" }
        </CardActions>
      </Card>

      <Typography component="p" sx={{}} >
        Known for department
      </Typography>

      <Typography component="p">
        {actorDetails.known_for_department}
      </Typography>

      <Typography component="p">
        Gender
      </Typography>

      <Typography component="p">
        {actorDetails.gender === 1 ? "female" : "male"}
      </Typography>

      <Typography component="p">
        Birthday
      </Typography>

      <Typography component="p">
        {actorDetails.birthday}
      </Typography>

      <Typography component="p">
        Place of birth
      </Typography>

      <Typography component="p">
        {actorDetails.place_of_birth}
      </Typography>

      <Typography component="p">
        Also know as
      </Typography>
      {actorDetails.also_known_as.map((aka) => {
        return(
        <Typography key={aka} sx={{}} >
          {aka}
        </Typography>
        )
      })}
    </Paper>
  );
};
export default ActorDetailLeft;