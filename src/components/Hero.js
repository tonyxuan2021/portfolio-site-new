import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/hero.jpg";
import { theme } from "../theme";
import downArrow from "../assets/down-arrows.svg";
import { styled } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const HeroImg = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginBottom: 150,
  backgroundImage: `url(${hero})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "42vh",
  [theme.breakpoints.up("sm")]: {
    height: "55vh",
    marginBottom: 250,
  },
  [theme.breakpoints.up("md")]: {
    height: "70vh",
    marginBottom: 100,
  },
}));

const Intro = styled(Grid)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  paddingTop: 0,
  bottom: -200,
  paddingRight: 5,
  background: "white",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    width: "70%",
    bottom: 0,
    paddingTop: 60,
  },
  [theme.breakpoints.up("lg")]: {
    width: "40%",
    bottom: 0,
    paddingTop: 60,
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: "38px",
  marginTop: "20px",
  lineHeight: 1.2,

  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "38px",
  //     marginTop: "20px",
  //     lineHeight: 1.2,
  //   },
}));

const IntroBtn = styled(Button)(({ theme }) => ({
  width: "70%",
  borderRadius: 0,
  background: theme.palette.darkblue.main,
  padding: 15,
  paddingLeft: 30,
  paddingRight: 30,
  display: "flex",
  justifyContent: "space-between",
  ":hover": {
    bgcolor: theme.palette.primary.main,
    color: "white",
  },

  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

const Hero = () => {
  return (
    <HeroImg item>
      <Intro item gap={5}>
        <IntroText fontWeight={700}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome!")
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  "My name is Tony and I am a full-stack web developer."
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString("Have you checked my portfolio projects?")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Ready to hire me?")
                .pauseFor(2000)
                .deleteAll()
                .typeString(";)")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </IntroText>

        <a href="#about">
          <IntroBtn variant="contained" id="about">
            <img
              className="hero__logo"
              src={downArrow}
              style={{ width: "15px" }}
            ></img>
            <Typography
              fontFamily="sans-serif !important"
              variant="body2"
              color="white"
              sx={{ opacity: 0.75 }}
            >
              About me
            </Typography>
          </IntroBtn>
        </a>
      </Intro>
    </HeroImg>
  );
};

export default Hero;
