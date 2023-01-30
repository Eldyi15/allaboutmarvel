import React from "react";
import { Link } from "react-router-dom";
import "./../styles/header.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="app-bar">
          <Toolbar className="tool-bar">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
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
      </Box>
    </div>
  );
};

export default Header;
