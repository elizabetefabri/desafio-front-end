import './style.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from '../../../data/dados';  

export function PlatFormChart(){
  return (
    <div className="shadow-md rounded p-2 bg-white h-[250px] w-[550px]">
      <div>
        <h1 className="text-text font-bold pl-5">Plataformas</h1>
      </div>
    <ResponsiveContainer width="100%" height={210}>
      <LineChart data={data.dados}>
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="month" axisLine={{ strokeWidth: 0 }} tickLine={false} />
        <YAxis
          axisLine={false}
          ticks={[0, 100, 200, 300, 400]}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Legend iconType="square" iconSize={10} />
        <Line
          type="monotone"
          dataKey="TD Consultoria"
          stroke="#9C27B0"
          strokeWidth={5}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="RIKO Plataforma"
          stroke="#F44336"
          fontSize={"8px"}
          strokeWidth={5}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Blue Serviços"
          stroke="#4CAF50"
          strokeWidth={5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}
