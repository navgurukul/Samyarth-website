import React from 'react';
import { Grid, Typography, Container, Box, IconButton, Avatar } from '@mui/material';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";

const Footer = () => {
  const isActive = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`);
  return (
    <div style={{ width: '100%', backgroundColor: '#FFFFFF', padding: '10px', marginTop: '45px' }}>
      <Container>
        <Grid container >
          <Grid item xs={12} md={6} sx={isActive ? { textAlign: 'center' } : null}>
            <Box>
              <Box style={{ marginBottom: '-20px' }}>
                <Image src="/logo.svg" alt="Logo" width={100} height={50} />
              </Box>
              <Box>
                <Typography variant="caption" color={'#949494'}>
                  A cooperative by marginalized women to champion social causes
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} container  justifyContent={isActive ? "center" : "flex-end"}>
            <Box>
              {/* <Box sx={{ display: 'flex', gap: '5px' }}>
                <IconButton aria-label="facebook">
                  <Avatar sx={{ width: 30, height: 30, backgroundColor: '#D9D9D9' }}>
                    <Facebook />
                  </Avatar>
                </IconButton>
                <IconButton aria-label="twitter">
                  <Avatar sx={{ width: '32px', height: '32px', backgroundColor: '#D9D9D9' }}>
                    <Twitter />
                  </Avatar>
                </IconButton>
                <IconButton aria-label="instagram">
                  <Avatar sx={{ width: '32px', height: '32px', backgroundColor: '#D9D9D9' }}>
                    <Instagram />
                  </Avatar>
                </IconButton>
              </Box> */}
              <Box sx={{mt:2}}>
                <Typography variant="body2">
                  vaibhav.m@navgurkul.org
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
