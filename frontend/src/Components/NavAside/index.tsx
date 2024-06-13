import './style.css';

import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import arrowsImg from '../../assets/images/png/arrows.png';
import backImg from '../../assets/images/png/back.png';
import logoWhite from '../../assets/images/png/logo-white.png';
import imgDash from '../../assets/images/svg/dash.svg';
import imgBoard from '../../assets/images/svg/graph.svg';

interface NavAsideProps {
  closeSidebar: () => void;
}

export function NavAside({ closeSidebar }: NavAsideProps) {
  return (
    <div className="bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:h-full z-[1100] lg:z-auto">
      <Sidebar className=" text-text w-full h-full">
        <Menu className="p-5">
          <MenuItem 
            className="font-bold mb-2 px-0"             
            icon={<img src={logoWhite} className="bg-blue rounded px-0" alt="Logo" />}
          >
            Blue
          </MenuItem>
          <MenuItem className="menuDash mb-2 bg-blue rounded-2xl font-bold text-white hover:bg-blue-dark" icon={<img src={imgDash} alt="Logo" className="flex justify-between pl-3" />}>
            Dashboard
          </MenuItem>
          <MenuItem className="text-gray-400" icon={<img src={imgBoard} alt="Logo" />}>Leaderboard</MenuItem>
        </Menu>
        <div className="background relative flex flex-col items-center text-center p-5 rounded-lg w-full">
          <img src={backImg} alt="Background" className="absolute inset-0 w-full h-full object-cover rounded-md" />
          <div className="relative z-10 w-8 h-8 mb-2">
            <img src={arrowsImg} alt="Icon" className="w-full h-full object-contain" />
          </div>
          <h3 className="relative z-10 text-lg font-bold text-white mb-2">Conheça a Blue</h3>
          <p className="relative z-10 text-sm p-4 text-white mb-4">Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech.</p>
          <button className="relative z-10 px-8 py-2 bg-white font-medium text-blue rounded hover:bg-blue-700 transition duration-300">Conhecer</button>
        </div>
      </Sidebar>
      <button onClick={closeSidebar} className="lg:hidden absolute top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded">X</button>
    </div>
  );
}