import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import amazon from "../assets/portfolio/amazon.jpg";
import book from "../assets/portfolio/book.jpg";
import dash from "../assets/portfolio/dash.jpg";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const PortfolioWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // marginBottom: 80,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "480px",
    // marginBottom: 100,
  },
}));

const PageWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const PortfolioLeft = styled(Grid)(({ theme }) => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "38vh",
  [theme.breakpoints.up("md")]: {
    marginBottom: 0,
    height: "36vh",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: 0,
    height: "55vh",
  },
}));

const PortfolioRight = styled(Grid)(({ theme }) => ({
  paddingTop: 30,
  marginTop: 30,
  marginBottom: 80,
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
    // minHeight: 400,
    justifyContent: "center",
  },
  [theme.breakpoints.up("lg")]: {
    paddingRight: 100,
  },
}));

const PortfolioDesc = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: 20,
  },
}));

const PortfolioBtn = styled(Button)(({ theme }) => ({
  width: "60%",
  borderRadius: 0,
  color: theme.palette.secondary.main,
  border: `1px solid  ${theme.palette.secondary.main}`,
  padding: 15,
  marginBottom: 30,
  ":hover": {
    bgcolor: theme.palette.primary.main,
    color: "white",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

const PortfolioPage = ({ setShowContact }) => {
  setShowContact(true);
  //   let width = window.innerWidth;
  return (
    <PageWrapper item>
      {projects.map((project) => {
        return (
          <PortfolioWrapper key={project.id} container>
            <PortfolioLeft
              item
              md={5.5}
              sx={{ backgroundImage: `url(${project.image})` }}
              order={project.order}
            ></PortfolioLeft>
            <PortfolioRight item display="flex" gap={3} md={5.5}>
              <Typography variant="h3" fontWeight={700}>
                {project.name}
              </Typography>
              <PortfolioDesc
                color={theme.palette.grey.secondary}
                lineHeight={1.2}
              >
                {project.desc}
              </PortfolioDesc>
              <Link to={`/portfolio/${project.id}`}>
                <PortfolioBtn variant="outlined">
                  <Typography>VIEW PROJECT</Typography>
                </PortfolioBtn>
              </Link>
            </PortfolioRight>
          </PortfolioWrapper>
        );
      })}
    </PageWrapper>
  );
};

const projects = [
  {
    id: 1,
    image: amazon,
    name: "Amazon.com clone",
    desc: "Built clone of Amazon.com in a team of two that allow users to browse products, add items to cart and then to purchase. This project incorporated Redux hooks with Redux Toolkit for frontend data process and storage, it also used Prisma as primary ORM library for CRUD operations with PostgreSQL database.",
    order: 0,
  },
  {
    id: 2,
    image: book,
    name: "The Booktown",
    desc: "This e-commerce, full-stack web application allows the users to search and to purchase their favoriate books.",
    order: 0,
  },
  {
    id: 3,
    image: dash,
    name: "Diamond Admin PRO",
    desc: "This web application is a UI focused, analytics user platform.",
    order: 0,
  },
];

export default PortfolioPage;
