
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Feb",
    income: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "March",
    income: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "April",
    income: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "May",
    income: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "June",
    income: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" barSize={16} fill="#44b4d2" />
      <Line type="monotone" dataKey="income" stroke="#ff7300" />
    </ComposedChart>
  );
}
