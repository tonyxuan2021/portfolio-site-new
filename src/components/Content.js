import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import photo from "../assets/Xuan Ye.jpg";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";

const ProfileImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "70vh",
  [theme.breakpoints.down("md")]: {
    height: "45vh",
  },
}));

const AboutMeText = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  variant: "body1",
  lineHeight: 2,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.2,
  },
}));

const AboutMeWrap = styled(Grid)(({ theme }) => ({
  height: "100%",
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 15,
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const PortfolioBtn = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  color: theme.palette.secondary.main,
  border: `1px solid  ${theme.palette.secondary.main}`,
  width: "50%",
  padding: 15,
  ":hover": {
    bgcolor: theme.palette.primary.main,
    color: "white",
  },
  [theme.breakpoints.down("md")]: {
    padding: 20,
    justifyContent: "center",
    width: "70%",
    padding: 10,
  },
}));

const Content = () => {
  return (
    <Grid container display="flex" gap={8} alignItems="center" sx={{ mb: 15 }}>
      <Grid item md={5} xs={4.5}>
        <Grid item>
          <ProfileImg
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={photo}
          ></ProfileImg>
        </Grid>
      </Grid>
      <AboutMeWrap item md={5} xs={6}>
        <Typography variant="h4" fontWeight={700}>
          About Me
        </Typography>
        <AboutMeText>
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
        </AboutMeText>
        <PortfolioBtn variant="outlined">
          <Typography variant="body2">GO TO PORTFOLIO</Typography>
        </PortfolioBtn>
      </AboutMeWrap>
    </Grid>
  );
};

export default Content;
