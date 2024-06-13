import React from "react";

interface GraphBarProps {
  percentageData: number;
  graphBarColor: string;
  graphBarBackground: string;
}

const GraphBar: React.FC<GraphBarProps> = ({
  percentageData,
  graphBarColor,
  graphBarBackground,
}) => {
  return (
    <div className={`w-full h-1 rounded-lg ${graphBarBackground}`}>
      <div
        className={`h-full rounded-lg ${graphBarColor}`}
        style={{ width: `${percentageData}%` }}
      ></div>
    </div>
  );
};

export default GraphBar;
