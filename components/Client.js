import React from "react";
import { Typography, Grid, Container, Divider } from "@mui/material";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isActive ? 1 : 2, // Show one image at a time for smaller screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: breakpoints.values.sm,
        settings: {
          slidesToShow: 1, // Show one image at a time for smaller screens
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#F7F7F7",
        padding: isActive ? "0px 10px" : "80px 300px",
        textAlign: "center",
        marginTop: "48px",
      }}
    >
      <Typography variant="h4" pt={2} mb={"32px"}>
        Our Clients
        <Divider
          variant="middle"
          sx={{
            background: "#4A9088",
            height: "3px",
            width: isActive ? "25%" : "9%",
            margin: "auto",
          }}
        />
      </Typography>
      <Container maxWidth="md" mt={!isActive&&"48px"}>
        <Slider {...settings}>
          {clientLogos.map((logo, index) => (
            <div key={index} style={{ margin: "0", padding: "0" }}>
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                style={{
                  width: "auto",
                  height: "48px", // Set your fixed height here
                  objectFit: "cover", // Maintain aspect ratio
                  margin: "auto"
                }}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Client;
