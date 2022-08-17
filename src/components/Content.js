import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import photo from "../assets/Xuan Ye.jpg";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ProfileImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "40vh",
  [theme.breakpoints.up("md")]: {
    height: "58vh",
  },
}));

const ImgWrap = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 140,
  },
}));

const AboutMeText = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  fontSize: 18,
  lineHeight: 2,
  [theme.breakpoints.up("sm")]: {
    lineHeight: 1.2,
  },
  [theme.breakpoints.up("md")]: {
    lineHeight: 1.4,
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
  gap: 40,
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

const PortfolioBtn = styled(Button)(({ theme }) => ({
  padding: 15,
  justifyContent: "center",
  width: "70%",
  [theme.breakpoints.up("md")]: {
    padding: 20,
    justifyContent: "center",
    width: "70%",
    padding: 10,
  },
}));

const Content = () => {
  return (
    <Grid
      container
      display="flex"
      gap={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item md={5} sm={4.5} xs={12}>
        <ImgWrap item>
          <ProfileImg
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={photo}
          ></ProfileImg>
        </ImgWrap>
      </Grid>
      <AboutMeWrap
        item
        md={6}
        sm={6}
        xs={12}
        // display="flex"
        // flexDirection="column"
        // gap={}
      >
        <Typography variant="h3" fontWeight={700}>
          About Me
        </Typography>
        <AboutMeText color={theme.palette.secondary.main}>
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
        <Link to="/portfolio">
          <PortfolioBtn
            variant="outlined"
            sx={{
              borderRadius: 0,
              color: theme.palette.secondary.main,
              border: `1px solid  ${theme.palette.secondary.main}`,
              ":hover": {
                bgcolor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            <Typography variant="body2">GO TO PORTFOLIO</Typography>
          </PortfolioBtn>
        </Link>
      </AboutMeWrap>
    </Grid>
  );
};

export default Content;
