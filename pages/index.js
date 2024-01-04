import React from "react";
import { Typography, Button, Container, Stack } from "@mui/material";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer";
import Images from "@/components/Images";
import About from "@/components/About";
import Client from "@/components/Client";
import Experties from "@/components/Experties";
import Team from "@/components/Team";
import WhySamyarth from "@/components/WhySamyarth";
import WorkingModel from "@/components/ WorkingModel";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";

const Home = () => {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign={isActive ? "left" : "center"}>
          <span style={{ color: "#4A9088" }}>Samy</span>arth is a cooperative of
          marginalized women, support businesses to be what they can be, with
          technical and content services
        </Typography>
        <Stack sx={{ mt: 4 }} alignItems="center">
          <Link
            href="https://rd93uhm9wse.typeform.com/to/heMHX7HJ"
            target="_blank"
            passHref
            className={`text ${styles.text}`}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: isActive ? "340px" : "280px" }}
            >
              Collaborate With Us
            </Button>
          </Link>
        </Stack>
      </Container>
      <div
        style={{
          width: "100%",
          // marginTop: "-0.1rem",
        }}
      >
        <Images />
      </div>

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
