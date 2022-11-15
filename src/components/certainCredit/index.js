import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CertainCredit = ({ creditsList }) => {
  let credits = creditsList.map((cs) => (
    //根据出演电影id跳电影
    <Link to={`/movies/${cs.id}`} underline="none">
      <Typography key={cs.credit_id} variant="h5" component="h5">
        {cs.title}
      </Typography>
    </Link>
  ))
  return credits;
}
export default CertainCredit;