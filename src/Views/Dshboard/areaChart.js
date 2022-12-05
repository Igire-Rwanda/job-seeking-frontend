
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Mon",
    Visitors: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Tue",
    Visitors: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Wed",
    Visitors: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Thu",
    Visitors: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Fri",
    Visitors: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Sat",
    Visitors: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Sun",
    Visitors: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function App() {
  return (
    <AreaChart
      width={420}
      height={360}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Visitors" stroke="#8884d8" fill="#63c49a" />
    </AreaChart>
  );
}
