import { KeyboardArrowDown } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

import avatarImage from '../../../assets/images/jpg/avatar.jpg';

export function User() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex gap-2 items-center">
      <Avatar
        variant="rounded"
        alt="Elizabete"
        src={avatarImage}
        sx={{ borderRadius: "3px", height: "50px", width: "50px" }}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <h2 className="text-sm text-text font-semibold">Elizabete</h2>
          <IconButton sx={{ p: "0", color: "var(--text-text)" }} onClick={handleMenuOpen}>
            <KeyboardArrowDown />
          </IconButton>
        </div>
        <span className="text-xs font-semibold text-gray-500">
          Desenvolvedor(a)
        </span>
      </div>
      
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
    </div>
  );
}
