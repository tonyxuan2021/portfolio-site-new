import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/portfolio/image-portfolio-manage.jpg";
import amazon from "../assets/portfolio/amazon.jpg";
import book from "../assets/portfolio/book.jpg";
import dash from "../assets/portfolio/dash.jpg";
import { theme } from "../theme";

const PortfolioPage = () => {
  return (
    <Grid item sx={{ pl: 3, pr: 3 }}>
      {projects.map((project) => {
        return (
          <Grid item sx={{ mb: 8 }}>
            <Grid
              item
              sx={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "38vh",
                mb: 5,
              }}
            ></Grid>
            <Grid
              item
              display="flex"
              flexDirection="column"
              gap={3}
              sx={{
                pt: 3,
                pb: 3,
                mt: 3,
                borderTop: "1px solid lightgrey",
                borderBottom: "1px solid lightgrey",
              }}
            >
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
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

const projects = [
  {
    image: amazon,
    name: "Amazon.com clone",
    desc: "Built clone of Amazon.com in a team of two that allow users to browse products, add items to cart and then to purchase. This project incorporated Redux hooks with Redux Toolkit for frontend data process and storage, it also used Prisma as primary ORM library for CRUD operations with PostgreSQL database.",
  },
  {
    image: book,
    name: "The Booktown",
    desc: "This e-commerce, full-stack web application allows the users to search and to purchase their favoriate books.",
  },
  {
    image: dash,
    name: "Diamond Admin PRO",
    desc: "This web application is a UI focused, analytics user platform.",
  },
];

export default PortfolioPage;
