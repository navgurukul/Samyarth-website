import React from 'react';
import { Typography, Grid, Container } from '@mui/material';

const Client = () => {
  const clientLogos = [
    '/images/logo.svg',
    '/images/CCA_Logo.svg',
    '/images/amazlogo.png',
    '/images/ng.svg'
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#F7F7F7', padding: '80px 0', textAlign: 'center',marginTop:'48px' }}>
      <Typography variant="h4" pt={2} mb={4}>
        Our Clients
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {clientLogos.map((logo, index) => (
            <Grid key={index} item xs={6} sm={3} style={{ margin: '0', padding: '0',  }}>
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                style={{ width: 'auto', height: '48px', objectFit: 'contain' }} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Client;
