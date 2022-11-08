import React from "react";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';

const AccessInstagram = ({ instagram_id }) => {
  const handleJumpToInstagram = (e) => {
    e.preventDefault();
    window.location.href = `https://instagram.com/${instagram_id}/`
    // https://instagram.com/therock/
  };

  return (
    <IconButton aria-label="Instagram" onClick={handleJumpToInstagram}>
      <InstagramIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AccessInstagram;