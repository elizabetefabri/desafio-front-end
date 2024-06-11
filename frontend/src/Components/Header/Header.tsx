import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import avatarImage from "../../assets/images/jpg/avatar.jpg";
import { KeyboardArrowDown, Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";
import './Header.css';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "var(--white-bg)",
        height: "110px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        {/* Esquerda: Logo */}
        <Typography
          variant="h2"
          sx={{
            color: "var(--grey-dark)",
            fontSize: "30px",
            fontWeight: "700",
            flexGrow: 1,
          }}
        >
          Dashboard
        </Typography>

        {/* Search: Pesquisar informações */}

        {/* Tradutor */}

        {/* Botão de Notificações */}
        <Box
          sx={{
            backgroundColor: "#FFFAF1",
            color: "#ffab00",
            // color: "action.active",
            borderRadius: "5px",
            height: "50px",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Badge color="secondary" variant="dot">
            <Notifications />
          </Badge>
        </Box>
        {/* Avatar, Nome e Menu Dropdown */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            ml: 2,
          }}
          onClick={handleMenuOpen}
        >
          <Avatar
            alt="User Avatar"
            src={avatarImage}
            sx={{ borderRadius: "3px", height: "50px", width: "50px" }}
          />
          <Typography
            variant="h5"
            sx={{
              ml: 2,
              color: "var(--grey-dark)",
              fontSize: "14px",
              marginBottom: "20px",
              marginLeft: "10px",
              fontWeight: "600",
            }}
          >
            Elizabete
          </Typography>
          <IconButton
            sx={{ ml: 1, color: "var(--grey-dark)", marginBottom: "20px" }}
          >
            <KeyboardArrowDown />
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Editar seus dados</MenuItem>
          <MenuItem onClick={handleMenuClose}>Painel Administrativo</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
