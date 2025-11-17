"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

export default function LineChart() {
  const chartRef = useRef(null);

  const toggleDataset = (datasetIndex) => {
    const chart = chartRef.current;
    if (!chart) return;

    const meta = chart.getDatasetMeta(datasetIndex);
    meta.hidden = meta.hidden === null ? true : !meta.hidden;
    chart.update();
  };

  // Gradient fill
  const gradientFill = (context) => {
    const chart = context.chart;

    if (!chart.chartArea) return "rgba(0,0,0,0.05)";

    const { ctx, chartArea: { top, bottom } } = chart;
    const gradient = ctx.createLinearGradient(0, top, 0, bottom);

    gradient.addColorStop(0, "rgba(0,0,0,0.12)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    return gradient;
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const data = {
    labels,
    datasets: [
      {
        label: "This year",
        data: [12000, 10000, 15000, 2500, 30000, 22000, 24000],
        borderColor: "#000",
        backgroundColor: gradientFill,
        borderWidth: 2,
        fill: true,
        tension: 0.5,
        pointRadius: 0,
      },
      {
        label: "Last year",
        data: [5000, 14000, 20000, 10000, 15000, 18000, 28000],
        borderColor: "#A7C8FF",
        borderWidth: 2,
        borderDash: [6, 6],
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  // Updated options (Y-axis + tooltip)
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },

      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const v = tooltipItem.raw;
            return v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v;
          },
        },
      },
    },

    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#777" },
      },
      y: {
        min: 0,
        max: 30000,
        ticks: {
          color: "#777",
          stepSize: 10000,
          callback: (v) => `${v / 1000}K`,
        },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full bg-gray-50 rounded-3xl p-6">
      {/* Tabs + Legend (same UI) */}
      <div className="flex flex-col sm:flex-row  gap-2 mb-4">
        <div className=" flex items-center gap-3">
          <span className="font-semibold text-black text-[14px] pb-1">
            Total Users
          </span>
          <span className="text-gray-500 hover:text-black text-[14px] cursor-pointer">
            Total Projects
          </span>
          <span className="text-gray-500 hover:text-black text-[14px] cursor-pointer">
            Operating Status
          </span>
        </div>
        <div className="h-6 hidden sm:block w-px bg-gray-300 mx-2"></div>

        {/* CLICKABLE custom legend */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <button
            onClick={() => toggleDataset(0)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-black"></span> This year
          </button>

          <button
            onClick={() => toggleDataset(1)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-blue-300"></span> Last year
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-[full] h-44 pm:h-72">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}
