import './style.css';

import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

import logoWhite from '../../assets/images/png/logo-white.png';
import { NavAside } from '../NavAside';
import { BadgeNotification } from './badge';
import { SearchFilter } from './search';
import { Traductor } from './traductor';
import { User } from './user';

export function Header () {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        className="p-4 flex w-full items-center flex-col lg:flex-row h-fit"
        sx={{
          boxShadow: "none",
          backgroundColor: "var(--white-color)",
          height: "auto",
        }}
      >
        <Toolbar
          className="flex justify-between w-full px-4 md:px-8 lg:space-x-4"
          sx={{ maxWidth: "1440px", width: "100%", margin: "0 auto" }}
        >
          <IconButton onClick={toggleSidebar} sx={{ p: 0, display: { lg: "none" } }}>
            <img src={logoWhite} alt="Logo" className="bg-blue rounded w-8 h-8" />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              color: "var(--text-text)",
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: "700",
              flexGrow: 1,
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            
          </Typography>
          <IconButton
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            sx={{ color: "var(--text-text)", display: { lg: "none" } }}
          >
            <Menu />
          </IconButton>
          
          <Box className="hidden lg:flex justify-center lg:justify-end flex-grow">
          <h1 className='text-text text-2xl font-bold pr-10'>Dashboard</h1>
            <SearchFilter />
          </Box>
          <Box
            className={`lg:flex ${
              isOpen ? "flex" : "hidden"
            } flex-col lg:flex-row lg:justify-evenly w-full lg:w-auto absolute lg:static top-16 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-4`}
          >
            <Box className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <Box className="lg:hidden flex justify-center w-full">
                <SearchFilter />
              </Box>
              <Traductor />
              <BadgeNotification />
              <User />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={`lg:hidden fixed inset-0 z-50 bg-opacity-50 ${isSidebarOpen ? 'block' : 'hidden'}`} style={{ zIndex: 1100 }}>
        <NavAside closeSidebar={toggleSidebar} />
      </div>
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 h-full z-50">
        <NavAside closeSidebar={toggleSidebar} />
      </div>
    </>
  );
}