import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

const Contact = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 15 }}
    >
      <Grid item xs={3}>
        <Typography variant="h4" fontWeight={700}>
          Interested in doing a project together?
        </Typography>
      </Grid>

      <Divider style={{ width: "40%" }} />

      <Grid item xs={3}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0,
            color: theme.palette.secondary.main,
            border: `1px solid  ${theme.palette.secondary.main}`,
            width: "50%",
            // p: 1.5,
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
