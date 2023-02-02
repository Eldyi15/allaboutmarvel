import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/header.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { List } from "@mui/material";
const Header = () => {
  const [isDrawerOpen, setDrawer] = useState(false);
  const navList = [
    { title: "Home", route: "/home" },
    { title: "Characters", route: "/characters" },
    { title: "Comics", route: "/comics" },
  ];

  return (
    <div>
      <div className="header">
        <AppBar position="static" className="app-bar">
          <Toolbar className="tool-bar">
            <Typography
              variant="h6"
              component="div"
              // sx={{ flexGrow: 1 }}
              className="logo"
            >
              ALL ABOUT MARVEL
            </Typography>
            <div className="links">
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
              <Link style={{ textDecoration: "none" }} to="/characters">
                Characters
              </Link>
              <Link style={{ textDecoration: "none" }} to="/comics">
                Comics
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className="menu-bar-header">
        <AppBar
          style={{ width: isDrawerOpen ? "70%" : "100%" }}
          position="fixed"
          open={isDrawerOpen}
        >
          <Toolbar className="tool-bar">
            <IconButton
              size="larger"
              edge="start"
              aria-label="menu"
              className="menu-icon"
              onClick={() => setDrawer(!isDrawerOpen)}
            >
              {!isDrawerOpen ? <MenuIcon></MenuIcon> : null}
            </IconButton>
            <Typography
              style={{
                display: isDrawerOpen ? "none" : "",
                verticalAlign: "center",
              }}
              className="logo"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              ALL ABOUT MARVEL
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          classes={{ paper: { marginTop: "64px !important" } }}
        >
          <div className="logo-menu">
            ALL ABOUT MARVEL{" "}
            <span>
              <IconButton
                size="larger"
                edge="start"
                aria-label="menu"
                className="menu-icon"
                onClick={() => setDrawer(!isDrawerOpen)}
              >
                <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
              </IconButton>
            </span>
          </div>
          <div className="list">
            {navList.map((list) => (
              <List key={list.title}>
                <Link style={{ textDecoration: "none" }} to={list.route}>
                  {list.title}
                </Link>
              </List>
            ))}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
