import { useState } from 'react';

import AllProductsChart from '../../Components/Chart/AllProductsChart';
import LineChartTsx from '../../Components/Chart/LineChart';
import { PerformanceChart } from '../../Components/Chart/PerformanceChart';
import { PlatFormChart } from '../../Components/Chart/PlatformChart';
import { Card } from '../../Components/Chart/SalesChart';
import { NavAside } from '../../Components/NavAside';
import './home.css';

export function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="md:grid h-screen md:grid-cols-[14rem_1fr] flex flex-col">
      <div className="flex flex-col md:flex-row w-screen">
        
        <div className="hidden md:flex w-full flex-col">
          <NavAside closeSidebar={toggleSidebar} />
        </div>
        
        <main className="flex p-5 flex-col gap-2">
          <section className="mobile flex flex-col xl:flex-row gap-2">
            <div className="">
              <Card />
            </div>
            <div className="">
              <PlatFormChart />
            </div>
          </section>
          
          <section className="mobile flex flex-col xl:flex-row gap-2">
            <div className="">
              <PerformanceChart />
            </div>
            <div className="">
              <LineChartTsx />
            </div>
            <div className="">
              <LineChartTsx />
            </div>
          </section>

          <section className="mobile flex flex-col xl:flex-row gap-2">
            <div className="">
              <AllProductsChart />
            </div>
            <div className="">
              <LineChartTsx />
            </div>
            <div className="">
              <LineChartTsx />
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
