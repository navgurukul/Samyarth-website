import React, { useState, useEffect } from 'react';
import { Typography, IconButton, Grid, Box } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Client = () => {
  const clientLogos = [
    '/images/logo.svg',
    '/images/CCA_Logo.svg',
    '/images/amazlogo.png',
    '/images/ng.svg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogos.length) % clientLogos.length);
  };

  return (
    <div style={{ width:'1,728px', height:'331px', backgroundColor: '#F7F7F7', padding: '80px, 0px, 80px, 0px', textAlign: 'center', marginTop:'32px', }}>
      <Typography variant="h4" pt={'32px'} mb={'32px'}>
        Our Clients
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <IconButton onClick={handlePrev} aria-label="Previous">
          <KeyboardArrowLeftIcon sx={{  fontSize: 40 }} />
        </IconButton>
        <img src={clientLogos[currentIndex]} alt={`Client Logo ${currentIndex + 1}`} />
        <IconButton onClick={handleNext} aria-label="Next">
          <ChevronRightIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Client;

