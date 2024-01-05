import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const isActive = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`);
  const clientLogos = [
    "/images/meraki-logo.png",
    "/images/c4ca.png",
    "/images/amazlogo.png",
    "/images/ng.svg",
  ];

  if (isActive) {
    // If it's a mobile view, render an auto-slider with centering
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
      centerMode: true,
      centerPadding: "10%", // Adjust the padding as needed
    };

    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#F7F7F7",
          padding: "0px 10px",
          textAlign: "center",
          marginTop: "48px",
        }}
      >
        <Typography variant="h4" pt={2} mb={4}>
          Our Clients
        </Typography>
        <Container maxWidth="xl">
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={index} style={{ margin: "0", padding: "0" }}>
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                
                  style={{
                    width: index == 0 ? "45%" : "75%",
                  }}
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    );
  }

  // If it's not a mobile view, render the grid
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F7F7F7",
          padding: "80px 300px",
          textAlign: "center",
          marginTop: "48px",
        }}
      >
        <Typography variant="h4" pt={2} mb={4}>
          Our Clients
        </Typography>
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            {clientLogos.map((logo, index) => (
              <Grid key={index} item xs={4} sm={3} md={3}>
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  style={{
                    width: index == 0 ? "45%" : "65%",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Client;
