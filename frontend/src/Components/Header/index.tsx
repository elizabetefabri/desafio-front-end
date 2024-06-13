import { Close, Menu } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';

import logoWhite from '../../assets/images/png/logo-white.png';

import { BadgeNotification } from './badge';
import { SearchFilter } from './search';
import { Traductor } from './traductor';
import { User } from './user';
import { useState } from 'react';
import { NavAside } from '../NavAside';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'blue' }}>
        <Toolbar sx={{ bgcolor: 'white', height: '80px', padding: '0 8px', justifyContent: 'space-between' }}> 
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={toggleSidebar}
            sx={{ marginRight: 2, padding: '12px', display: { lg: 'none' } }}
          >
            <img src={logoWhite} alt="Logo" className="bg-blue rounded w-8 h-8" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}>
            Dashboard
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>
            <SearchFilter />
            <Traductor />
            <BadgeNotification />
            <User />
          </Box>
          <IconButton
            onClick={toggleMobileMenu}
            sx={{ padding: '12px', display: { xs: 'flex', lg: 'none' } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={isSidebarOpen} onClose={toggleSidebar} variant="temporary" ModalProps={{ keepMounted: true }}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={toggleSidebar} sx={{ padding: '12px' }}> 
            <Close />
          </IconButton>
          <NavAside closeSidebar={toggleSidebar} />
        </Box>
      </Drawer>

      <Drawer anchor="right" open={isMobileMenuOpen} onClose={toggleMobileMenu} variant="temporary" ModalProps={{ keepMounted: true }}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={toggleMobileMenu} sx={{ padding: '12px' }}> 
            <Close />
          </IconButton>
          <SearchFilter />
          <Traductor />
          <BadgeNotification />
          <User />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
