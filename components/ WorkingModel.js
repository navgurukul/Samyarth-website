import { Typography, Container,Grid, Divider } from '@mui/material';

const WorkingModel = () => {
    return (
        <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', }} maxWidth="lg">   
            <Typography variant="h4" textAlign={'center'} mb={'32px'} >
                Working Model
                <Divider variant="middle" sx={{ background: '#4A9088',height: '3px',width: '40%', margin: 'auto',}}/>
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='subtitle1'>UTaaS - Underserved Talent As a Service</Typography>
                    <Typography variant='body1'>We provide managed diverse talent that works directly with your team. After working for a year, you retain the right to hire. Delivering projects with low to medium technology complexity for non-profits, governments & socially conscious for-profits</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography variant='subtitle1'>Project Based Delivery</Typography>
                    <Typography variant='body1'>We deliver the project end-to-end on fixed costs or on a per resource per hour/day basis</Typography>
                </Grid>
            </Grid>
      </Container>
    );
}

export default WorkingModel;
