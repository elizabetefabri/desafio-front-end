
import { LineChart } from "recharts";
import { AllProductsChart } from "../../Components/Chart/AllProductsChart";
import { PerformanceChart } from "../../Components/Chart/PerformanceChart";
import { PlatFormChart } from "../../Components/Chart/PlatformChart";
import { Card } from "../../Components/Chart/SalesChart";
import { Chart } from "../../Components/Chart/LifeChart";

export function Home() {
  return (
    <div className="md:grid h-screen md:grid-cols-[14rem_1fr] flex flex-col">
      <div className="flex flex-col md:flex-row w-screen">
        
        <div className="flex w-screen flex-col">
          {/* <Header /> */}
          <main className="flex pt-16 p-5 flex-col gap-2">
            <section className="mt-10 flex flex-col xl:flex-row gap-2 lg:ml-60">
              <div className="flex-1 xl:w-[60%]">
                <Card />
              </div>
              <div className="flex-1 xl:w-[40%]">
                <PlatFormChart />
              </div>
            </section>
            {/* Segundo container de cards */}
            <section className="flex justify-start w-full lg:ml-60  mt-4">
              <div className="w-full lg:w-auto">
                <PerformanceChart />
                <AllProductsChart />
              </div>
            </section>

            {/* Terceiro container de cards */}
            <section className="flex justify-start w-full lg:ml-60  mt-4">
              <div className="w-full lg:w-auto">
                <LineChart />
                <Chart />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
