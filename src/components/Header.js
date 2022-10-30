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
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 30,
  paddingBottom: 30,

  [theme.breakpoints.up("md")]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [theme.breakpoints.up("lg")]: {
    paddingLeft: 80,
    paddingRight: 80,
  },
}));

const NavText = styled(Typography)(({ theme }) => ({
  ":hover": {
    color: theme.palette.primary.main,
    // color: "white",
  },
}));

export default function Header() {
  const [fontColor, setFontColor] = useState(theme.palette.secondary.main);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleColorChange = () => {
    setFontColor(
      fontColor === theme.palette.secondary.main
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    );
  };

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
                  <NavText
                    // onClick={handleColorChange}
                    variant="body2"
                    color={theme.palette.secondary.main}
                  >
                    {item.title}
                  </NavText>
                </Link>
              );
            })}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1l22KqBFb1feGBJHvLHmqxfHglhdjEcIW/view?usp=sharing"
            >
              <NavText variant="body2" color={theme.palette.secondary.main}>
                RESUME
              </NavText>
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
                      <Typography color={theme.palette.secondary.main}>
                        {item.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                );
              })}
              <MenuItem>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1FsDZHqJTnFzvrICqTFg5nB8nqctZ4dPg/view?usp=sharing"
                  style={{
                    color: theme.palette.secondary.main,
                    fontSize: "1rem",
                  }}
                >
                  RESUME
                </a>
              </MenuItem>
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
    // color: theme.palette.primary.main,
    link: "/",
  },
  {
    id: 2,
    title: "PORTFOLIO",
    // color: theme.palette.secondary.main,
    link: "/portfolio",
  },
  {
    id: 3,
    title: "CONTACT ME",
    // color: theme.palette.secondary.main,
    link: "/contact",
  },
  //   {
  //     id: 4,
  //     title: "RESUME",
  //     color: theme.palette.secondary.main,
  //     link: "https://drive.google.com/file/d/1Qe4lthwjK6yGc-16sPJc8WwKMKdBXkm_/view?usp=sharing",
  //   },
];
