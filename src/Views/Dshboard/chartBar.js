
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    users: 4000,
    income: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    users: 3000,
    income: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    users: 2000,
    income: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    users: 2780,
    income: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    users: 1890,
    income: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    users: 2390,
    income: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    users: 3490,
    income: 4300,
    amt: 2100
  }
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" fill="#44b4d2" />
      <Bar dataKey="users" fill="#82ca9d" />
    </BarChart>
  );
}

