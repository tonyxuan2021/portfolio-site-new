import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import photo from "../assets/Xuan Ye.jpg";
import { theme } from "../theme";

const Content = () => {
  return (
    <Grid
      container
      display="flex"
    //   justifyContent="space-between"
    gap={8}
      alignItems="center"
      sx={{ height: "70vh" }}
    >
      <Grid item xs={5.5}>
        <Grid item>
          <img
            style={{
              width: "100%",
              height: "70vh",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={photo}
          ></img>
        </Grid>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          height: "100%",
          borderTop: "1px solid lightgrey",
          orderBottom: "1px solid lightgrey",
          p: 3,
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography variant="h4" fontWeight={700}>
          About Me
        </Typography>
        <Typography textAlign="justify" variant="body1" lineHeight={2}>
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
        <Button
          sx={{
            borderRadius: 0,
            color: theme.palette.secondary.main,
            border: `1px solid  ${theme.palette.secondary.main}`,
            width: "60%",
            p:2
          }}
          variant="outlined"
        >
          <Typography variant="body2">GO TO PORTFOLIO</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Content;
