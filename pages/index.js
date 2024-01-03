import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import Header from '@/components/Header';
import styles from '../styles/Home.module.css';
import Footer from '@/components/Footer';
import Images from '@/components/Images';
import About from '@/components/About';
import Client from '@/components/Client';
import Experties from '@/components/Experties';
import Team from '@/components/Team';
import WhySamyarth from '@/components/WhySamyarth';
import WorkingModel from '@/components/ WorkingModel';
import Link from 'next/link';

const Home = () => { 
  return (
    <>
    <Header />
    <Container   sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center',pt:'48px'}} maxWidth="lg">   
      <Typography variant="h3" textAlign={'center'} mb={'32px'} >
        <span style={{ color: '#4A9088' }}>Samy</span>arth is a cooperative of marginalized women, support businesses to be what they can be, with technical and content services
      </Typography>
      <Link href="https://rd93uhm9wse.typeform.com/to/heMHX7HJ"  target="_blank"  passHref className={`text ${styles.text}`}>
        <Button variant="contained" color="primary" >  
          Collaborate With Us  
        </Button>
      </Link>
    </Container>
    <Images />
    <About />
    <Client />
    <WhySamyarth />
    <WorkingModel />
    <Experties />
    <Team />
    <Footer />
    </>
  );
};

export default Home;



