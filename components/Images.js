import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";

function Images() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  const imageUrls = [
    '/images/learning1.jpg',
    '/images/learning2.jpg',
    '/images/learning3.jpeg',
    '/images/learning4.jpg',
  ];

  return (
    <Grid container justifyContent="center" sx ={{mt: '64px' , mb:"32px"}}>
      {imageUrls.map((imageUrl, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Image src={imageUrl} alt={`Image ${index + 1}`} width={!isActive?458:410} height={500}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Images;
