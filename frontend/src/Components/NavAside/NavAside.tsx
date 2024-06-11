import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography } from '@mui/material';
import { Dashboard, EmojiEvents } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import LogoImage from "../../assets/images/png/logo-white.png";
import './navAside.css';


const AsideNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={handleToggle} className='abrirIndex'>
        <img src={LogoImage} alt="Logo" className="w-10 h-10 bg-[var(--blue-color)] rounded p-1" />
      </IconButton>

      {open && (
        <aside className="fixed top-0 left-0 w-[345px] h-screen bg-[var(--background-color)] flex flex-col shadow-lg z-50">
          <Box className="flex justify-between items-center p-4 bg-[var(--blue-color)]">
            <img src={LogoImage} alt="Logo" className="w-12 h-12 bg-[var(--blue-color)] rounded-full p-1" />
            <Typography variant="h6" className="text-white ml-2">Blue</Typography>
            <IconButton onClick={handleToggle} className="text-white">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem button className="bg-[var(--blue-color)] text-white my-2">
              <ListItemIcon>
                <Dashboard className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button className="bg-white text-[var(--grey-dark)] my-2">
              <ListItemIcon>
                <EmojiEvents className="text-[var(--grey-dark)]" />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
          </List>
        </aside>
      )}
    </div>
  );
};

export default AsideNav;
