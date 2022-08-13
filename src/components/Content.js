import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import photo from "../assets/Xuan Ye.jpg";

const Content = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={5}>
        <img
          style={{ width: "100%", maxHeight: "65vh", objectFit: "cover" }}
          src={photo}
        ></img>
      </Grid>
      <Grid item xs={5} sx={{ p: 8 }}>
        <Typography variant="h4">About me</Typography>
        <Typography textAlign="justify">
          {/* Welcome! My name is Tony Ye, I am a Web Development Bootcamp graduate
          loacted in Vancouver, Canada, and I am currently making a career
          transition from an accountant to a full stack web developer. Beside
          coding, I enjoy gardening and playing with my pets. If you are a
          business looking to hire, contact me here. */}
          I've enjoyed my 5-year career as an accountant. I am wired to help
          others, and to provide prudential consultation to solve complex
          financial issues. Now, I am exited to pivot my career from the world
          of accounting to web development. I believe that my wealth experience
          in researching, communication, and combined with working as a team
          would make me a valuable asset to any technology-based companies. I
          try my best to stay-up-to-date on current trending technologies, and I
          am also interested in leaning Java to expand my back-end tech
          knowledge. I love coding and I look forward to connecting with you
          about how we can work together!
        </Typography>
        <Button>
          <Typography sx={{ color: "black", background: "pink" }} variant="contained">
            GO TO PORTFOLIO
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Content;
