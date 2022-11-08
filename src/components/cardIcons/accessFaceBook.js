import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';

const AccessFaceBook = ({ facebook_id }) => {
  const handleJumpToFaceBook = (e) => {
    e.preventDefault();
    window.location.href = `https://www.facebook.com/${facebook_id}`
    // https://www.facebook.com/DwayneJohnson
  };

  return (
    <IconButton aria-label="Facebook" onClick={handleJumpToFaceBook}>
      <FacebookIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AccessFaceBook;

//主要就一个作用，接受到传进来的网址，然后跳转出去
//当然，做到这里我就明白为什么要用Context了，因为一层一层的传参数，现在我对参数已经有点忘记他长什么样子了