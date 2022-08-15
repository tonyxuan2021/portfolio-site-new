import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import hero from "../assets/single/image-manage-hero.jpg";
import { useParams } from "react-router-dom";
import { theme } from "../theme";
import pic1 from "../assets/single/image-manage-preview-1@2x.jpg";
import pic2 from "../assets/single/image-manage-preview-2@2x.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SingleWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  [theme.breakpoints.up("md")]: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const SingleLeftWrapper = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  gap: 50,
  marginTop: 40,
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  paddingTop: 30,
  paddingBottom: 30,
}));

const HeroImg = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${hero})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "20vh",
  marginBottom: 40,

  [theme.breakpoints.up("md")]: {
    height: "30vh",
    marginBottom: 0,
    marginTop: 40,
  },
}));

const ProjectIntroMobile = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const ProjectIntroTablet = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    marginTop: 40,
    paddingTop: 40,
  },
}));

const SingleFlexWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
  },
}));

const SinglePortfolioPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <SingleWrapper Container>
      <HeroImg item></HeroImg>
      <SingleFlexWrapper container item display="flex">
        <SingleLeftWrapper item display="flex" md={6}>
          <Typography variant="h3" fontWeight={700}>
            Manage
          </Typography>
          <ProjectIntroMobile variant="h6">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </ProjectIntroMobile>
          <Typography
            fontWeight={700}
            color={theme.palette.primary.main}
            variant="h6"
          >
            Interaction Design / Front End Development HTML / CSS / JS
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 0,
              color: theme.palette.secondary.main,
              border: `1px solid  ${theme.palette.secondary.main}`,
              width: "50%",
              padding: 1.5,
              ":hover": {
                bgcolor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            <Typography>VISIT WEBSITE</Typography>
          </Button>
        </SingleLeftWrapper>
        <Grid item md={5}>
          <ProjectIntroTablet variant="h6">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </ProjectIntroTablet>
        </Grid>
      </SingleFlexWrapper>
      <Grid
        item
        sx={{ pt: 4, mb: 4 }}
        display="flex"
        flexDirection="column"
        gap={5}
      >
        <Typography variant="h4">Project Background</Typography>
        <Typography>
          Project Background This project was a front-end challenge from
          Frontend Mentor. It’s a platform that enables you to practice building
          websites to a design and project brief. Each challenge includes mobile
          and desktop designs to show how the website should look at different
          screen sizes. Creating these projects has helped me refine my workflow
          and solve real-world coding problems. I’ve learned something new with
          each project, helping me to improve and adapt my style.
        </Typography>
        <Typography variant="h4">Static Previews</Typography>
        <img src={pic1}></img>
        <img src={pic2}></img>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="space-between"
        sx={{
          mb: 4,
          borderTop: "1px solid lightgrey",
          borderBottom: "1px solid lightgrey",
          p: 2,
        }}
      >
        <Grid item display="flex" flexDirection="column">
          <ChevronLeftIcon />
          <Typography variant="h5">Fylo</Typography>
          <Typography>Previous Project</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item display="flex" flexDirection="column" alignItems="end">
          <ChevronRightIcon />
          <Typography variant="h5">Bookmark</Typography>
          <Typography>Next Project</Typography>
        </Grid>
      </Grid>
    </SingleWrapper>
  );
};

export default SinglePortfolioPage;
