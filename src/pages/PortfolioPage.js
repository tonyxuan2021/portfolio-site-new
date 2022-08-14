import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/portfolio/image-portfolio-manage.jpg";
import amazon from "../assets/portfolio/amazon.jpg";
import book from "../assets/portfolio/book.jpg";
import dash from "../assets/portfolio/dash.jpg";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";

const PortfolioWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: 80,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 100,
  },
}));

const PageWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  [theme.breakpoints.up("md")]: {
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
    height: "32vh",
  },
}));

const PortfolioRight = styled(Grid)(({ theme }) => ({
  paddingTop: 30,
  paddingBottom: 30,
  marginTop: 30,
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    paddingTop: 50,
    paddingBottom: 50,
    minHeight: 536,
    justifyContent: "center",
  },
}));

const PortfolioPage = () => {
  return (
    <PageWrapper item>
      {projects.map((project) => {
        return (
          <PortfolioWrapper container>
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
              <Typography
                variant="body1"
                color={theme.palette.grey.secondary}
                lineHeight={2}
              >
                {project.desc}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  width: "60%",
                  borderRadius: 0,
                  color: theme.palette.secondary.main,
                  border: `1px solid  ${theme.palette.secondary.main}`,
                  padding: 1.5,
                  ":hover": {
                    bgcolor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                <Typography>VIEW PROJECT</Typography>
              </Button>
            </PortfolioRight>
          </PortfolioWrapper>
        );
      })}
    </PageWrapper>
  );
};

const projects = [
  {
    image: amazon,
    name: "Amazon.com clone",
    desc: "Built clone of Amazon.com in a team of two that allow users to browse products, add items to cart and then to purchase. This project incorporated Redux hooks with Redux Toolkit for frontend data process and storage, it also used Prisma as primary ORM library for CRUD operations with PostgreSQL database.",
    order: 0,
  },
  {
    image: book,
    name: "The Booktown",
    desc: "This e-commerce, full-stack web application allows the users to search and to purchase their favoriate books.",
    order: 1,
  },
  {
    image: dash,
    name: "Diamond Admin PRO",
    desc: "This web application is a UI focused, analytics user platform.",
    order: 0,
  },
];

export default PortfolioPage;
