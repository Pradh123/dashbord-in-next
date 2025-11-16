import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TrafficByLocation() {

    const total = 52.1 + 22.8 + 13.9 + 11.2;

    const data = {
        labels: ["United States", "Canada", "Mexico", "Other"],
        datasets: [
            {
                data: [52.1, 22.8, 13.9, 11.2],
                backgroundColor: ["#000000", "#8ebeff", "#9be7c3", "#c6d6ff"],
                borderColor: "#ffffff",
                borderWidth: 4,
                offset: [6, 6, 6, 6],
                hoverOffset: 14,
            },
        ],
    };

    const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",  // ⬅️ increased width
    plugins: {
        legend: { display: false },
    },
    animation: {
        duration: 800,
        easing: "easeOutQuart",
    },
    elements: {
        arc: {
            borderRadius: 6, // rounded segments
        },
    },
};


    const legendItems = [
        { color: "bg-black", label: "United States", value: "52.1%" },
        { color: "bg-[#8ebeff]", label: "Canada", value: "22.8%" },
        { color: "bg-[#9be7c3]", label: "Mexico", value: "13.9%" },
        { color: "bg-[#c6d6ff]", label: "Other", value: "11.2%" },
    ];

    return (
        <div className="w-full bg-gray-50 border border-gray-50 rounded-3xl p-6 relative">
            <h2 className="text-[14px] font-semibold ">
                Traffic by Location
            </h2>

            <div className="flex items-center h-full justify-around lg:justify-center gap-10 flex-wrap relative">

                {/* ===== Doughnut Chart ===== */}
                <div className="relative w-36 h-36 flex items-center justify-start">
                    <Doughnut data={data} options={options} />

                    {/* Center percentage strictly vertically aligned */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="relative text-[22px] font-semibold text-gray-900">
                            {total.toFixed(0)}%
                        </span>
                        <span className="text-xs text-gray-500">
                            Total Traffic
                        </span>
                    </div>
                </div>

                {/* ===== Custom Legend ===== */}
                <div className="flex flex-col gap-3 text-sm">
                    {legendItems.map((item, i) => (
                        <div
                            key={i}
                            className="
                                flex items-center gap-2 cursor-pointer group
                                justify-between
                                transition-all duration-200
                            "
                        >
                            {/* Dot */}
                            <div className="flex gap-1 items-center">
                            <span
                                className={`w-2 h-2 rounded-full ${item.color}
                                    group-hover:scale-110 transition-transform`}
                            ></span>

                            {/* Text — no dot, no dash, translateX animation */}

                            <span
                                className="
                                    text-gray-600 group-hover:text-black 
                                    transition-all duration-300 
                                    group-hover:translate-x-1
                                "
                            >
                                {item.label} 
                            </span>
                            </div>

                            <div className="pl-6">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
