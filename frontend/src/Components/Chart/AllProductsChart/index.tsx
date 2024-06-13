import React from "react";
import { AllProductsData } from "../../../data/dados";
import { GraphPercentage } from "./percentage";



export const AllProductsChart: React.FC = () => {
  return (
    <div className="shadow-md mt-6 p-4 rounded h-[300px] w-[550px] bg-white">
      <div className="flex w-full mb-2 text-13 font-bold">
        <h1 className="text-lg font-bold text-text mb-4">Todos Produtos</h1>
      </div>
      <div className="w-full h-[90] overflow-x-auto">
        <table className="w-full table-auto border-collapse text-[10px]">
          <thead>
            <tr>
              {AllProductsData.data.datasets.map((dataset) => (
                <th
                  key={dataset.label}
                  className="px-4 py-2 font-normal text-[#94A3B8] text-left"
                >
                  {dataset.label}
                </th>
              ))}
            </tr>
          </thead>
          {AllProductsData.data.datasets.map((dataset, index) => (
            <tbody key={index}>
              <tr>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200 text-[#3F3F3F]`}
                >
                  {dataset.index}
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200 uppercase text-[#3F3F3F]`}
                >
                  {dataset.product}
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200`}
                >
                  <GraphPercentage
                    percentageData={dataset.percentage}
                    borderColor={dataset.graphPercentageBorder}
                    background={dataset.graphPercentageBackground}
                    textColor={dataset.percentageTextColor}
                  />
                </td>
                <td
                  className={`px-4 ${dataset.customPadding} border-t border-gray-200`}
                >
                  <GraphPercentage
                    percentageData={dataset.percentage}
                    borderColor={dataset.graphPercentageBorder}
                    background={dataset.graphPercentageBackground}
                    textColor={dataset.percentageTextColor}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
