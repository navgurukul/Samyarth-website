import { Typography, Container,Grid, Divider } from '@mui/material';

const WhySamyarth = () => {
    const imageDescriptions = [
        { src: '/growing-money.svg', alt: 'Growing Money', description: 'Competitive and fair pricing structure' },
        { src: '/world.svg', alt: 'World', description: 'Contribute to social good while prioritizing business needs' },
        { src: '/solution.svg', alt: 'Solution', description: 'Ready-made solutions to suit critical needs' },
      ];
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', mt:"32px"}} maxWidth="lg">   
            <Typography variant="h4" textAlign={'center'} mb={'32px'} >
            Why  <span style={{ color: '#4A9088' }}>Samy</span>arth
            <Divider variant="middle" sx={{ background: '#4A9088',height: '3px',width: '40%', margin: 'auto',}}/>
            </Typography>
            <Grid container spacing={2} justifyContent="center">
            {imageDescriptions.map((item, index) => (
                <Grid item key={index} xs={12} sm={4} md={4} >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginBottom:'32px' }}>
                    <img src={item.src} alt={item.alt} style={{ width: '10%', height: 'auto' }} />
                </div>
                <Typography variant="body1">{item.description}</Typography>
                </Grid>
            ))}
            </Grid>
            <Typography variant="body1" textAlign={'center'} mt={'32px'} mb={'32px'} >
                All the proceeds go to the Samyarth team staying true to the spirit of cooperativism further<br /> enabling extremely competitive pricing for the organisations
            
            </Typography>
      </Container>
    );
}

export default WhySamyarth;
