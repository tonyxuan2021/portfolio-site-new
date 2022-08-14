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
import { styled } from "@mui/material/styles";

const CustomFooter = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 30,
  },
}));

const CustomGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const CustomAppbar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.secondary.main,
  boxShadow: "none",
  paddingLeft: 70,
  paddingRight: 70,

  [theme.breakpoints.down("sm")]: { paddingTop: 70, paddingBottom: 70 },
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppbar position="static">
        <CustomFooter>
          <CustomGrid item gap={5} sx={{ color: theme.palette.grey.main }}>
            <img src={logo}></img>
            <Typography>HOME</Typography>
            <Typography>PORTFOLIO</Typography>
            <Typography>CONTACT ME</Typography>
          </CustomGrid>
          <Grid item display="flex" gap={2}>
            <GitHubIcon fontSize="large" sx={{ color: "white" }} />
            <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
          </Grid>
        </CustomFooter>
      </CustomAppbar>
    </Box>
  );
}
