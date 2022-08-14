import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/hero.jpg";
import { theme } from "../theme";
import downArrow from "../assets/down-arrows.svg";
import { styled } from "@mui/material/styles";

const HeroImg = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginBottom: 150,
  backgroundImage: `url(${hero})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "70vh",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
  },
}));

const Intro = styled(Grid)(({ theme }) => ({
  width: "40%",
  position: "absolute",
  bottom: 0,
  paddingTop: 60,
  paddingRight: 5,
  background: "white",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
    bottom: -200,
    width: "100%",
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    marginTop: "20px",
  },
}));

const IntroBtn = styled(Button)(({ theme }) => ({
  width: "55%",
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

  [theme.breakpoints.down("sm")]: {
    width: "70%",
    padding: 10,
  },
}));



const Hero = () => {
  return (
    <HeroImg item>
      <Intro item gap={5}>
        <IntroText variant="h3" fontWeight={700}>
          Hey, I'm Tony and I am a full-stack web developer
        </IntroText>
        <IntroBtn variant="contained">
          <img
            className="hero__logo"
            src={downArrow}
            style={{ width: "15px" }}
          ></img>
          <Typography variant="body2" color="white">
            About me
          </Typography>
        </IntroBtn>
      </Intro>
    </HeroImg>
  );
};

export default Hero;
