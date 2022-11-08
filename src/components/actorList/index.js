import React from "react";
import Typography from "@mui/material/Typography";
import ActorCard from "../actorCard";
import Box from "@mui/material/Box";

const ActorList = ({ actorsCast }) => {
  let actorCards = actorsCast.cast.map((c) => (
    <Box key={c.id} p={1} >
      <ActorCard key={c.id} actor={c} />
    </Box>
  ));

  return (
    <>
      <Typography variant="h5" component="h3">
        Main Characters
      </Typography>
      <Box sx={{ columnSpacing:'40px', display: 'flex', flexDirection: 'row', overflowX:'scroll' }}>{actorCards}</Box>
    </>
  );
};
export default ActorList;