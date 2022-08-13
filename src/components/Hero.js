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
  //   [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("sm")]: {
    position: "static",
    width: "100%",
  },
}));

const Hero = () => {
  return (
    <HeroImg item>
      <Intro item gap={5}>
        <Typography variant="h3" fontWeight={600}>
          Hey, I'm Tony and I am a full-stack web developer
        </Typography>
        <Button
          sx={{
            width: "55%",
            borderRadius: 0,
            background: theme.palette.darkblue.main,
            p: 1.5,
            pl: 3,
            pr: 3,
            display: "flex",
            justifyContent: "space-between",
            ":hover": {
              bgcolor: theme.palette.primary.main,
              color: "white",
            },
          }}
          variant="contained"
        >
          <img
            className="hero__logo"
            src={downArrow}
            style={{ width: "15px" }}
          ></img>
          <Typography variant="body2" color="white">
            About me
          </Typography>
        </Button>
      </Intro>
    </HeroImg>
  );
};

export default Hero;
