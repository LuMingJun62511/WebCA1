import React from "react";
import People from "../peopleCard";
import Grid from "@mui/material/Grid";

const PeopleList = ({peoples}) => {
  let peopleCards = peoples.map((p) => (    
    <Grid key={p.id} item xs={60} sm={30} md={20} lg={15} xl={12}>
      <People key={p.id} people={p} />
    </Grid>
  ));
  return peopleCards;
};
export default PeopleList;

//在这个里面，我完成了对人的取值，后面的action等进一步做的时候再添加