import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "../../../data/dados";

export function PerformanceChart() {
    return (
        <div className="shadow-md p-4 rounded h-[300px] w-[450px] bg-white">
          <h1 className="text-lg font-bold text-text mb-4">Rendimento total</h1>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={data.performance}>
              <CartesianGrid horizontal={true} vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={{ strokeWidth: 0 }} />
              <YAxis
                axisLine={false}
                ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
              />
              <Tooltip />
              <Legend iconType="circle" />
              <Bar dataKey="Aguardando" fill="#0095FF" radius={[5, 5, 0, 0]} />
              <Bar dataKey="Implantadas" fill="#00E096" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    