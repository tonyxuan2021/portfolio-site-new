import { Box } from "@mui/material";
import React from "react";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Hero from "../components/Hero";
import { styled } from "@mui/material/styles";

const CustomWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: 100,
  paddingRight: 100,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));

const HomePage = () => {
  return (
    <CustomWrapper>
      <Hero />
      <Content />
    </CustomWrapper>
  );
};

export default HomePage;
