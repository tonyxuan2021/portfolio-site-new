import { Box } from "@mui/material";
import React from "react";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Hero from "../components/Hero";
import { styled } from "@mui/material/styles";

const CustomWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  [theme.breakpoints.up("md")]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const HomePage = ({ setShowContact }) => {
  setShowContact(true);
  return (
    <CustomWrapper>
      <Hero />
      <Content />
    </CustomWrapper>
  );
};

export default HomePage;
