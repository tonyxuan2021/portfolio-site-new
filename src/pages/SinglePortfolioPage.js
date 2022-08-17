import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import amzHero from "../assets/portfolio/amazon/amazonHero.png";
import bktHero from "../assets/portfolio/book/bkthero.png";
import dsbHero from "../assets/portfolio/dash/dsbhero.png";
import { useParams } from "react-router-dom";
import Link from "@mui/material/Link";

import { theme } from "../theme";
import amz1 from "../assets/portfolio/amazon/amazoncart.png";
import amz2 from "../assets/portfolio/amazon/amazoncheckout.png";
import amz3 from "../assets/portfolio/amazon/amazonorder.png";
import bkt1 from "../assets/portfolio/book/bktsearch.png";
import bkt2 from "../assets/portfolio/book/bktsignin.png";
import bkt3 from "../assets/portfolio/book/bktdash.png";
import dsb1 from "../assets/portfolio/dash/dsbprofile.png";
import dsb2 from "../assets/portfolio/dash/dsbsignin.png";
import dsb3 from "../assets/portfolio/dash/dsbprice.png";
import dsb4 from "../assets/portfolio/dash/dsbwidget.png";
import dsb5 from "../assets/portfolio/dash/dsbproduct.png";
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
  gap: 30,
  marginTop: 40,
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  paddingTop: 30,
  paddingBottom: 30,
}));

const HeroImg = styled(Grid)(({ theme }) => ({
  backgroundSize: "cover",
  height: "25vh",
  //   marginBottom: 40,

  [theme.breakpoints.up("md")]: {
    height: "30vh",
    marginBottom: 0,
    marginTop: 40,
  },
  [theme.breakpoints.up("lg")]: {
    height: "90vh",
    marginBottom: 40,
  },
}));

const ProjectIntroMobile = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
}));

const ProjectIntroTablet = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    marginTop: 40,
    paddingTop: 40,
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

const SingleFlexWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "column",
  },
}));

const SinglePortfolioPage = ({ setShowContact }) => {
  setShowContact(true);
  const { id } = useParams();

  const [index, setIndex] = useState(parseInt(id) - 1);
  console.log(index);

  const checkNumber = (number) => {
    if (number > projects.length - 1) {
      return 0;
    }
    if (number < 0) {
      return projects.length - 1;
    }
    return number;
  };

  const nextProject = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    window.scroll(0, 0);
  };

  const lastProject = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    window.scroll(0, 0);
  };

  const { title, backgroundtext, intro, demoimg, hero, tech, link, github } =
    projects[index];

  return (
    <SingleWrapper Container>
      <HeroImg item sx={{ backgroundImage: `url(${hero})` }}></HeroImg>
      <SingleFlexWrapper container item display="flex">
        <SingleLeftWrapper item display="flex" md={6} lg={8}>
          <Typography variant="h3" fontWeight={700}>
            {title}
          </Typography>
          <ProjectIntroMobile variant="h6">{intro}</ProjectIntroMobile>
          <Typography
            fontWeight={700}
            color={theme.palette.primary.main}
            variant="h6"
          >
            {tech}
          </Typography>
          <Link target="_blank" href={link}>
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
          </Link>
        </SingleLeftWrapper>
        <Grid item md={5} lg={0}>
          <ProjectIntroTablet variant="h6">{intro}</ProjectIntroTablet>
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
        <Typography variant="h6">{backgroundtext}</Typography>
        <Typography variant="h4">Static Previews</Typography>
        {demoimg.map((img, index) => {
          return (
            <img
              style={{
                maxWidth: "800px",
                maxHeight: "450px",
                objectFit: "cover",
              }}
              src={img}
              key={index}
            ></img>
          );
        })}
      </Grid>

      <Grid
        container
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
        <Grid
          item
          display="flex"
          flexDirection="column"
          onClick={lastProject}
          sx={{ cursor: "pointer" }}
          xs={5}
        >
          <ChevronLeftIcon />
          {/* <Typography variant="h5">Fylo</Typography> */}
          <Typography variant="body1">Previous Project</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="end"
          onClick={nextProject}
          sx={{ cursor: "pointer" }}
          xs={5}
        >
          <ChevronRightIcon />
          {/* <Typography variant="h5">Bookmark</Typography> */}
          <Typography variant="body1" y>
            Next Project
          </Typography>
        </Grid>
      </Grid>
    </SingleWrapper>
  );
};

const projects = [
  {
    id: 1,
    title: "Amazon.com clone",
    hero: amzHero,
    intro:
      "This project is a clone of Amazon.com. The project is built in a team of two, and it allow users to browse products, add items to cart and then to purchase. This project incorporated Redux hooks with Redux Toolkit for frontend data process and storage, it also used Prisma as primary ORM library for CRUD operations with PostgreSQL database.",
    tech: "React / Redux & Redux Toolkit / Node / Express / PostgreSQL / Prisma / MUI / Git / Agile",
    backgroundtext:
      "This project was built after I graduted from the Bootcamp. From the Bootcamp, I was introduced to various frequently used React hooks, including UseState and UseEffect. However, I wanted to build a e-commerce website and after the research, I learnt that Redux can be used to better handle the global state management. Creating this project has helped me refine my knowledge on full-stack application workflow, and to solve real-world coding problems. I've also learned to work with Prisma at backend, as well as getting more comforatble using Material UI framework.",
    demoimg: [amz1, amz2, amz3],
    link: "https://amazon-clone-josh-tony.herokuapp.com/",
    github: "https://github.com/JoshL579/amazon-clone",
  },
  {
    id: 2,
    title: "The Booktown",
    hero: bktHero,
    intro:
      "This project is an e-commerce book selling site. It is a full stack application that attracts book buyers from the world to purchase their favorite books, and eventually receive these books in shipment. This project incoporated Google Book API to allow users to fetch book data by querying specific book name; It also used Stripe API to mimic the checkout process. Another great feature about this application is that the users are allowed to register and signin to gain access their personal dashboard info.",
    tech: "React / Context API / Node / Express / MySQL / KnexJs / Git / SASS",
    backgroundtext:
      "This is the individual capstone project I build within the Bootcamp. My original idea was to build an e-commerce booking selling site, where users can add their favoriate books to cart, and finally being able to checkout. The biggest challenge I faced was to undertand how Context API works in React, so that the cart info will be accessible to the global state system, and therefore being able to sync with the order deatils that users select. In this project, I learnt the concept of context API, and also practiced the workflow of authorization and authentication.",
    demoimg: [bkt1, bkt2, bkt3],
    link: "https://book-town.herokuapp.com/",
    github: "https://github.com/JoshL579/amazon-clone",
  },
  {
    id: 3,
    title: "Diamond Admin PRO System",
    hero: dsbHero,
    intro:
      "This project is a frontend focused dashboard flatform web application. The purpose of this project is to test the skills I have recently acquired, which is to practice the MUI library. In this project, I specially learnt how Grid element plays an important role in buidling responsive screen size. I also practiced to use other external visualization libraries like: react-calendar, react-chartjs-2, react-simple-maps, and etc.",
    tech: "React / MUI / external React libraries / React-router / Git",
    backgroundtext:
      "This project was built to showcase my frontend skills, especially on the use of MUI library. The purpose of this project was mainly to practice the MUI workflow, as MUI is widely used by the industry nowadays. In this project, I learnt the implenting of MUI will accelerate the web application building process. The library also includes incredibly useful components such as Textfield, Ratings, Pagination, tabs ,and etc. I will continue using MUI to build other projects.",
    demoimg: [dsb1, dsb2, dsb3, dsb4, dsb5],
    link: "https://dashboard-diamond-admin.herokuapp.com/",
    github: "https://github.com/JoshL579/amazon-clone",
  },
];

export default SinglePortfolioPage;
