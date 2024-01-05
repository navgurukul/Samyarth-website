import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Divider, Grid, Box } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";


const Team = () => {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
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
            item.SamyarthTeam !== null &&
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

        // Shuffle the teamMember array
        const shuffledTeamMember = shuffleArray(teamMember);

        setTeamData({ supporters, teamMember: shuffledTeamMember });
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []); // Empty dependency array to simulate component mount

  // Fisher-Yates (Knuth) shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "48px",
      }}
    >
    <Typography variant="h4" textAlign={"center"} mb={"32px"}>
      The Team
      <Divider
        variant="middle"
        sx={{
          background: "#4A9088",
          height: "3px",
          width: "40%",
          margin: "auto",
        }}
      />
    </Typography>
    {isActive ? (
        <Container
          sx={{
            display: "flex",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
      
          {teamData.teamMember.map((teamMember, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 34px", // Adjust margin as needed
              }}
            >
              <Image src={teamMember.Photo.replace(/^http:\/\//i, 'https://')} alt={teamMember.Name} width={100} height={100} style={{ borderRadius: '50%' }} />
              <Typography variant="Subtitle1"  mt={2} textAlign="center" >{teamMember.Name}</Typography>
              <Typography variant="body1" color={'#6D6D6D'}  mt={2} textAlign="center">{teamMember.Designation}</Typography>
           </div>
          ))}
      
        </Container>): (<Grid container spacing={2} justifyContent="center" alignItems="center">
          {teamData.teamMember.map((teamMember, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box textAlign="center">
                <Image src={teamMember.Photo.replace(/^http:\/\//i, 'https://')} alt={teamMember.Name} width={100} height={100} style={{ borderRadius: '50%' }} />
              </Box>
              <Box textAlign="center">
                <Typography variant="body1">{teamMember.Name}</Typography>
                <Typography variant="body1" color={'#6D6D6D'}>{teamMember.Designation}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>)}
    </Container>
  );
};

export default Team;
