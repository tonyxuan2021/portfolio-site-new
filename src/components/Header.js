import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { theme } from "../theme";
import { Grid } from "@mui/material";
import logo from "../assets/logo.svg";

const styles = {
  flexRow: {
    display: "flex",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
};

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, pl: 7, pr: 7, pt: 3, pb: 3 }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={[styles.flexRow, { justifyContent: "space-between" }]}>
          <img src={logo}></img>
          <Grid item sx={styles.flexRow} gap={3}>
            <Typography variant="body2" color={theme.palette.primary.main}>
              HOME
            </Typography>
            <Typography variant="body2" color={theme.palette.secondary.main}>
              PORTFOLIO
            </Typography>
            <Typography variant="body2" color={theme.palette.secondary.main}>
              CONTACT ME
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
