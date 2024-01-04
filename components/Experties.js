import React from 'react';
import { Grid, Typography, Container, Divider } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";

const Experties = () => {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  const expertiseData = [
    {
      imageSrc: "/images/web-development.svg",
      description: 'Website & App Development',
    },
    {
      imageSrc: "/images/currency-exchange.svg",
      description: 'Financial Services',
    },
    {
      imageSrc: "/images/visual-sketching.svg",
      description: 'UX & UI Design',
    },
    {
      imageSrc: "/images/media-content.svg",
      description: 'Curriculum Design',
    },
    {
      imageSrc: "/images/develop.svg",
      description: 'Low Code/No Code Development',
    },
    {
      imageSrc: "/images/operations-management.svg",
      description: 'DevSecOps',
    },
  ];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: '48px',}} maxWidth="lg">
      <Typography variant="h4" textAlign={'center'} mb={'32px'}>
        Our Expertise
        <Divider variant="middle" sx={{ background: '#4A9088', height: '3px', width: '40%', margin: 'auto' }} />
      </Typography>
      <Grid container spacing={2} justifyContent="center" mb={'32px'} style={{overflowX:"scroll", width:"1000px"}} >
        {expertiseData.map((expertise, index) => (
          <Grid item key={index} xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <div style={{ textAlign: 'center', marginTop: '16px', whiteSpace: isActive ? 'nowrap' : 'normal', overflowX: isActive ? 'auto' : 'hidden' }}> */}
              <Image width={64.01} height={64} src={expertise.imageSrc} alt={`Expertise ${index + 1}`} sx={{ gap: '16px' }} />
              <Typography variant="body1" mt={2}>
                {expertise.description}
              </Typography>
            {/* </div> */}
          </Grid>
        ))}
      </Grid>
    </Container>






  //   <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: '48px', }} maxWidth="lg">
  //   <Typography variant="h4" textAlign={'center'} mb={'32px'}>
  //     Our Expertise
  //     <Divider variant="middle" sx={{ background: '#4A9088', height: '3px', width: '40%', margin: 'auto' }} />
  //   </Typography>
  //   <Grid container spacing={2} justifyContent={isActive ? "flex-start" : "center"} mb={'32px'} sx={isActive ? { overflowX: 'scroll' } : {}}>
  //     {expertiseData.map((expertise, index) => (
  //       <Grid item key={index} xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
  //         <div style={{ textAlign: 'center', marginTop: '16px' }}>
  //           <Image width={64.01} height={64} src={expertise.imageSrc} alt={`Expertise ${index + 1}`} sx={{ gap: '16px' }} />
  //           <Typography variant="body1" mt={2}>
  //             {expertise.description}
  //           </Typography>
  //         </div>
  //       </Grid>
  //     ))}
  //   </Grid>
  // </Container>
  );
};

export default Experties;
