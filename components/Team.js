import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Divider, Grid, Box } from '@mui/material';

const Team = () => {
  const [teamData, setTeamData] = useState({ supporters: [], teamMember: [] });
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          'https://navgurukul.github.io/tarabai-shinde/data/meraki_team.json'
        );
        const team = response.data;
        const supporters = [];
        const teamMember = [];

        Object.values(team).forEach((item) => {
          if (
            item.Association !== 'Not Active' &&
            item.Association !== null &&
            item.Photo !== null &&
            item.Name !== null &&
            item.Designation !== null
          ) {
            if (item.Association === 'Volunteer') {
              supporters.push(item);
            } else {
              teamMember.push(item);
            }
          }
        });

        setTeamData({ supporters, teamMember });
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    fetchTeamData();
  }, []);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: '32px', mb: 15 }} maxWidth="lg">
      <Typography variant="h4" textAlign={'center'} mb={'32px'}>
        The Team
        <Divider
          variant="middle"
          sx={{ background: '#4A9088', height: '3px', width: '40%', margin: 'auto' }}
        />
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {teamData.teamMember.map((teamMember, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box textAlign="center">
              <img
                src={teamMember.Photo.replace('http://', 'https://')}  // Replace 'http://' with 'https://'
                alt={teamMember.Name}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="body1">{teamMember.Name}</Typography>
              <Typography variant="body1" color={'#6D6D6D'}>{teamMember.Designation}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;