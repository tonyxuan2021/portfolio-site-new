import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";

const DividerStyle = styled(Divider)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const WrapperStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
  alignItems: "center",
  marginBottom: 100,
  paddingLeft: 100,
  paddingRight: 100,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
}));

const Contact = () => {
  return (
    <WrapperStyle>
      <Grid item md={3} sm={6}>
        <ContactText variant="h4" fontWeight={700}>
          Interested in doing a project together?
        </ContactText>
      </Grid>
      <DividerStyle />
      <Grid item>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0,
            color: theme.palette.secondary.main,
            border: `1px solid  ${theme.palette.secondary.main}`,
            width: "100%",
            p: 1.2,
            ":hover": {
              bgcolor: theme.palette.primary.main,
              color: "white",
            },
          }}
        >
          contect me
        </Button>
      </Grid>
    </WrapperStyle>
  );
};

export default Contact;
