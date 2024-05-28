import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/nav-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../context/themeSlice";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const pages = ["Home", "About", "Portfolio", "Blog"];

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  let theme = useSelector((s) => s.theme.value);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className="navbar" sx={{ boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img width={200} src={logo} alt="" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="menu" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                gap: 20,
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                className="nav__link"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#1C1E53",
                  display: "block",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            sx={{ my: 2, color: "#1C1E53" }}
            className="contact__btn"
            variant="outlined"
          >
            Contact Me
          </Button>
          <Button className="mode" onClick={() => dispatch(toggleMode())}>
            {theme ? (
              <IoSunnyOutline className="light__icon" />
            ) : (
              <IoMoonOutline className="dark__icon" />
            )}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
