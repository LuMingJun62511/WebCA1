import React from "react";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from '@mui/icons-material/Twitter';

const AccessTwitter = ({ twitter_id }) => {
  const handleJumpToTwitter = (e) => {
    e.preventDefault();
    window.location.href = `https://twitter.com/${twitter_id}`
    // https://twitter.com/therock
  };

  return (
    <IconButton aria-label="Twitter" onClick={handleJumpToTwitter}>
      <TwitterIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AccessTwitter;