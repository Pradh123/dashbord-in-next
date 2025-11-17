"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TrafficByDevice() {
  const [barSize, setBarSize] = useState(40);

  // Auto adjust on mount + resize
  const updateBarSize = () => {
    if (window.innerWidth < 480) setBarSize(25); // very small mobile
    else if (window.innerWidth < 640) setBarSize(35); // normal mobile
    else if (window.innerWidth < 1024) setBarSize(40); // tablet
    else setBarSize(40); // desktop
  };

  useEffect(() => {
    updateBarSize(); // run on mount

    window.addEventListener("resize", updateBarSize);
    return () => window.removeEventListener("resize", updateBarSize);
  }, []);

  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic",
        data: [15000, 30000, 20000, 32000, 12000, 25000],
        backgroundColor: [
          "#9DB8F2",
          "#63E6D0",
          "#000000",
          "#73B6FF",
          "#C39AFD",
          "#7CD97B",
        ],
        borderRadius: 12,
        barThickness: barSize, // 👈 dynamic size
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },
    },

    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#999",
          font: { size: 13 },
        },
      },

      y: {
        min: 0,
        max: 30000,
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#999",
          font: { size: 13 },
          callback: (value) => {
            if (value === 0) return "0";
            if (value === 10000) return "10K";
            if (value === 20000) return "20K";
            if (value === 30000) return "30K";
            return "";
          },
        },
      },
    },
  };

  return (
    <div className="w-full bg-gray-50 border border-gray-50 rounded-3xl p-6 relative">
      <h2 className="text-[14px] font-semibold mb-4 hover:translate-x-1 transition-all duration-700 ease-out">
        Traffic by Device
      </h2>

      <div className="w-full h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
