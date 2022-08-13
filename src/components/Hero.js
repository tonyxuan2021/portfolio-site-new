import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/hero.jpg";
import { theme } from "../theme";
import downArrow from "../assets/down-arrows.svg";

const styles = {
  flexRow: {
    display: "flex",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
};

const Hero = () => {
  return (
    <Grid item sx={{ position: "relative", mb: 10 }}>
      <img
        style={{ width: "100%", height: "65vh", objectFit: "cover" }}
        src={hero}
      ></img>
      <Grid
        item
        sx={[
          styles.flexColumn,
          {
            width: "30%",
            background: "white",
            position: "absolute",
            bottom: 0,
            pt: 5,
          },
        ]}
        gap={5}
      >
        <Typography variant="h4">
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
          }}
          variant="contained"
        >
          <img src={downArrow} style={{ width: "15px" }}></img>
          <Typography variant="body2">About me</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Hero;
