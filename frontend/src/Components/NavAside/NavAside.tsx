import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import logoWhite from '../../assets/images/png/logo-white.png';
import backImg from '../../assets/images/png/back.png';
import arrowsImg from '../../assets/images/png/arrows.png';
import imgDash from '../../assets/images/svg/dash.svg';
import imgBoard from '../../assets/images/svg/graph.svg';

 
import './navAside.css'

export function NavAside(){
  return (
    <Sidebar className="bg-white  text-text ">
      <Menu className="p-5" iconShape="round flex-grow">
        <MenuItem icon={<img src={logoWhite} className="bg-blue rounded" alt="Logo" />}>Blue</MenuItem>
        <div className="menuItem__Dashboard pr-4 pl-4">
          <MenuItem className="menuDash bg-blue duration-300 ease-in-out hover:scale-105 rounded-2xl bold text-white" icon={<img src={imgDash} alt="Logo" />}>Dashboard</MenuItem>
        </div>
        <MenuItem icon={<img src={imgBoard}  alt="Logo" />}>Leaderboard</MenuItem>
             
      </Menu>
      
      <div className="background relative flex flex-col items-center text-center p-5  rounded-lg  w-full">
          <img src={backImg} alt="Background" className="absolute inset-0 w-full h-full object-cover rounded-md" />
          <div className="relative z-10 w-8 h-8 mb-2">
            <img src={arrowsImg} alt="Icon" className="w-full h-full object-contain" />
          </div>
          <h3 className="relative z-10 text-lg font-bold text-white mb-2">Conheça a Blue</h3>
          <p className="relative z-10 text-sm p-2  text-white mb-4">Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech.</p>
          <button className="relative z-10 px-8 py-2 bg-white font-medium text-blue rounded hover:bg-blue-700 transition duration-300">Conhecer</button>
        </div>
    </Sidebar>
  );
}