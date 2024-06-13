import { FormControl, MenuItem, Select, IconButton } from '@mui/material';
import { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import imgBandeira from '../../../assets/images/png/eua-icon.png';
import './style.css';

export function Traductor() {
    const [language] = useState('PT(BR)');

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setLanguage(event.target.value as string);
//     // npm install i18next react-i18next i18next-browser-languagedetector

//     // criar um arquivo de tradução
//   };

  return (
    <FormControl className="w-32 flex flex-col items-center text-center" variant="outlined" sx={{ m: 1, minWidth: 120 }}>
      <Select className='flex  items-center text-center'
        value={language}
        // onChange={handleChange}
        displayEmpty
        IconComponent={() => (
          <IconButton sx={{ p: "0", color: "var(--text-text)" }}>
            <KeyboardArrowDown />
          </IconButton>
        )}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
        }}
      >
        <MenuItem value="PT(BR)" sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={imgBandeira} className="rounded w-6 h-6 mr-2" alt="Bandeira EUA" />
          PT(BR)
        </MenuItem>
        <MenuItem value="EN" sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={imgBandeira} className="rounded w-6 h-6 mr-2" alt="Bandeira EUA" />
          EN
        </MenuItem>
      </Select>
    </FormControl>
  );
}
