import { Chart } from "react-google-charts";
import { data, Region } from "../../../data/dados";

const MapChart = () => {
  return (
    <div className="shadow-md bg-white rounded p-4 flex flex-col h-[300px] w-full lg:w-[300px]">
      <h1 className="text-lg font-bold text-text mb-2">
        Mapeamento de vendas por UF
      </h1>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data.mapa[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        width={"100%"}
        height={"100%"}
        chartType="GeoChart"
        data={data.mapa}
        options={Region}
      />
    </div>
  );
};

export default MapChart;
