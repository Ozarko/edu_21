import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";

const Graph = ({ data }) => {
  const [dataArr, setDataArr] = useState(data);

  useEffect(() => {
    setDataArr([...dataArr, ...data]);

    if (dataArr.length >= 10) {
      dataArr.shift();
      setDataArr(dataArr);
    }
  }, [data]);

  return (
    <AreaChart
      width={1100}
      height={250}
      data={dataArr}
      margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="1%" stopColor="#7400b8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#7400b8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="1%" stopColor="#72efdd" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#72efdd" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis type="number" domain={["dataMin - 0.5", "dataMax + 0.5"]} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Купівля"
        stroke="#e9c46a"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="Продаж"
        stroke="#264653"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default Graph;
