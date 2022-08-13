import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";
import logo from "../assets/logobtm.svg";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: theme.palette.secondary.main,
          boxShadow: "none",
          pl: 7,
          pr: 7,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid
            item
            display="flex"
            alignItems="center"
            gap={5}
            sx={{ color: theme.palette.grey.main }}
          >
            <img src={logo}></img>
            <Typography>HOME</Typography>
            <Typography>PORTFOLIO</Typography>
            <Typography>CONTACT ME</Typography>
          </Grid>
          <Grid item display="flex" gap={2}>
            <GitHubIcon />
            <LinkedInIcon />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
