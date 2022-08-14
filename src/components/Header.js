import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";
import { Grid, Menu, MenuItem } from "@mui/material";
import logo from "../assets/logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const styles = {
  flexRow: {
    display: "flex",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
};

const CustomHeader = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: 70,
  paddingRight: 70,
  paddingTop: 30,
  paddingBottom: 30,

  [theme.breakpoints.down("sm")]: {
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

export default function Header() {
  const [menu, setMenu] = useState();

  const handleOpenMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  return (
    <CustomHeader>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={[styles.flexRow, { justifyContent: "space-between" }]}>
          <img src={logo}></img>
          <Grid
            item
            sx={[styles.flexRow, { display: { xs: "none", sm: "flex" } }]}
            gap={3}
          >
            {navItems.map((item) => {
              return (
                <Typography variant="body2" color={item.color}>
                  {item.title}
                </Typography>
              );
            })}
          </Grid>
          <Grid item sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //   onClick={handleOpenMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={menu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(menu)}
              //   onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {navItems.map((item) => (
                <MenuItem key={item} onClick={handleCloseMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </CustomHeader>
  );
}

const navItems = [
  {
    title: "HOME",
    color: theme.palette.primary.main,
  },
  {
    title: "PORTFOLIO",
    color: theme.palette.secondary.main,
  },
  {
    title: "CONTACT ME",
    color: theme.palette.secondary.main,
  },
  {
    title: "RESUME",
    color: theme.palette.secondary.main,
  },
];
