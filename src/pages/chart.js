import { useState } from "react";
import data from "../data.json";
import Bar from "../pages/bar";
import Footer from "./footer";

export default function MyChart() {
  const chartStyle = {
    background: "hsl(33, 100%, 98%)",
    borderRadius: "10px",
    color: "hsl(25, 47%, 15%)",
  };
  const chartBar = data.map((d) => (
    <Bar amount={d.amount} day={d.day} keys={d.day}></Bar>
  ));
  return (
    <div style={chartStyle} className="p-6">
      <h4 className="font-bold text-xl mb-12">Spending - Last 7 days</h4>
      <div className="flex gap-3 items-end">{chartBar}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
