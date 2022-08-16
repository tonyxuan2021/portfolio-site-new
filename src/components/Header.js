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
import { Link } from "react-router-dom";

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
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <CustomHeader>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={[styles.flexRow, { justifyContent: "space-between" }]}>
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <Grid
            item
            sx={[styles.flexRow, { display: { xs: "none", sm: "flex" } }]}
            gap={3}
          >
            {navItems.map((item) => {
              return (
                <Link key={item.id} to={`${item.link}`}>
                  <Typography variant="body2" color={item.color}>
                    {item.title}
                  </Typography>
                </Link>
              );
            })}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Qe4lthwjK6yGc-16sPJc8WwKMKdBXkm_/view?usp=sharing"
              style={{
                color: theme.palette.secondary.main,
                fontSize: "0.875rem",
              }}
            >
              RESUME
            </a>
          </Grid>
          <Grid item sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {navItems.map((item) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link to={item.link}>
                      <Typography color={item.color}>{item.title}</Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </CustomHeader>
  );
}

const navItems = [
  {
    id: 1,
    title: "HOME",
    color: theme.palette.primary.main,
    link: "/",
  },
  {
    id: 2,
    title: "PORTFOLIO",
    color: theme.palette.secondary.main,
    link: "/portfolio",
  },
  {
    id: 3,
    title: "CONTACT ME",
    color: theme.palette.secondary.main,
    link: "/contact",
  },
  //   {
  //     id: 4,
  //     title: "RESUME",
  //     color: theme.palette.secondary.main,
  //     link: "https://drive.google.com/file/d/1Qe4lthwjK6yGc-16sPJc8WwKMKdBXkm_/view?usp=sharing",
  //   },
];
