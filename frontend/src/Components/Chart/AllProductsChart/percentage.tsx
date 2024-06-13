import React from "react";

interface GraphPercentageProps {
  percentageData: number;
  borderColor: string;
  background: string;
  textColor: string;
}

export const GraphPercentage: React.FC<GraphPercentageProps> = ({
  percentageData,
  borderColor,
  background,
  textColor,
}) => {
  return (
    <div className="flex items-center w-full">
      <div
        className={`flex items-center justify-center w-[55px] h-5 border-2 ${background} ${borderColor} rounded-lg text-[10px] ${textColor}`}
      >
        <span>{percentageData}%</span>
      </div>
    </div>
  );
};
