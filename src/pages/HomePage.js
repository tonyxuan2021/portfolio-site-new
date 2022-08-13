import { Box } from "@mui/material";
import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <Box sx={{ pl: 10, pr: 10 }}>
      <Hero />
      <Content />
    </Box>
  );
};

export default HomePage;
