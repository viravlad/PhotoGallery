import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logoImage/logo.png";
import { Box, Container, List, ListItem, Stack } from "@mui/material";
import styles from "./Navbar.module.scss";
import React from "react";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const pages = ["Home", "Gallery", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let navigate = useNavigate();

  const navigateHandler = (page: string) => {
    if (page === "Home") {
      page = "";
    }
    navigate(`/${page}`);
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <IconButton>
            <img src={logo} alt="logo" className={styles.logo} />
          </IconButton>
          <Box className={styles.mainMenu}>
            {pages.map((page) => (
              <Button
                onClick={() => navigateHandler(page)}
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack className={styles.hamburgerMenuIcon}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
              color="inherit"
            >
              {isMenuOpen ? <Close /> : <MenuIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
        {isMenuOpen ? (
          <List className={styles.hamburgerMenuList}>
            {pages.map((page) => (
              <ListItem
                onClick={() => navigateHandler(page)}
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        ) : (
          ""
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
