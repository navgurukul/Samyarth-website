import React from 'react';
import { Grid } from '@mui/material';

function Images() {
  const imageUrls = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3',
    'https://us.123rf.com/450wm/last19/last191804/last19180400184/100595887-photographer-asian-woman-travel-nature-travel-relax-nature-study-in-the-jungle-thailand.jpg?ver=6',
  ];

  return (
    <Grid container justifyContent="center" sx ={{mt: '64px' , mb:"32px"}}>
      {imageUrls.map((imageUrl, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%' }} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Images;
