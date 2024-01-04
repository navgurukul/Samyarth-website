import React from 'react'
import { Typography,Container, Divider } from '@mui/material';

function About() {
  return (
    <Container   sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', mt:5}} maxWidth="md">   
      <Typography variant="h4" textAlign={'center'} mb={'32px'} >
        About <span style={{ color: '#4A9088' }}>Samy</span>arth
        <Divider variant="middle" sx={{ background: '#4A9088',height: '3px',width: '40%', margin: 'auto',}}/>
      </Typography>
      <Typography variant='body1'>Samyarth is a combination of Samyak (wholesome/right) + Arth (meaning/finance) and includes in its name Samarth (being able). The cooperative works with for-profits, governments and nonprofits across diverse offerings. While the current focus is on technology services (web development, app development, low-code/no-code, etc.), it is building capacity to deliver financial, educational services, etc.</Typography>
    </Container>
  )
}

export default About