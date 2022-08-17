import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const DividerStyle = styled(Divider)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    width: "20%",
    display: "block",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));

const WrapperStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 60,
  gap: 30,

  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    flexDirection: "row",
    padding: 30,
    paddingTop: 80,
    paddingBottom: 80,
  },

  [theme.breakpoints.up("lg")]: {
    padding: 100,
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 30,
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
}));

const Contact = () => {
  return (
    <WrapperStyle container item>
      <Grid item md={4} sm={6} lg={3}>
        <ContactText variant="h4" fontWeight={700}>
          Interested in doing a project together?
        </ContactText>
      </Grid>
      <DividerStyle />
      <Grid item>
        <Link to="/contact">
          <Button
            variant="outlined"
            sx={{
              borderRadius: 0,
              color: theme.palette.secondary.main,
              border: `1px solid  ${theme.palette.secondary.main}`,
              width: "100%",
              p: 1.2,
              pl: 3,
              pr: 3,
              ":hover": {
                bgcolor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            contact me
          </Button>
        </Link>
      </Grid>
    </WrapperStyle>
  );
};

export default Contact;
