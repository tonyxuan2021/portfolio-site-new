import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { styled } from "@mui/material/styles";

const DividerStyle = styled(Divider)(({ theme }) => ({
  width: "55%",
  [theme.breakpoints.down("md")]: {
    width: "20%",
  },
}));

const Contact = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 15 }}
    >
      <Grid item md={3} xs={6}>
        <Typography variant="h4" fontWeight={700}>
          Interested in doing a project together?
        </Typography>
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
    </Grid>
  );
};

export default Contact;
