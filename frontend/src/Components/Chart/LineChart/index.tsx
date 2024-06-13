import React from 'react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, Legend } from 'recharts';
import { data } from '../../../data/dados';

const LineChartTsx: React.FC = () => {
  return (
    <div className="shadow-md bg-white rounded p-4 flex flex-col h-[300px] w-full lg:w-[300px]">
      <h1 className="text-lg font-bold text-text mb-2">Vidas</h1>
      <ResponsiveContainer width="100%" height={210}>
        <AreaChart
          data={data.datalife}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6698de" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#66de90" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="uv"
            name="Último mês"
            stroke="#1898de"
            fillOpacity={1}
            strokeWidth={3}
            fill="url(#colorUv)"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="pv"
            name="Este mês"
            stroke="#82ca9d"
            fillOpacity={1}
            strokeWidth={3}
            fill="url(#colorPv)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartTsx;
