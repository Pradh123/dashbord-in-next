"use client";
import StatCard from "@/components/StatCard";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import TrafficSources from "@/components/TrafficSources";
import TrafficByDevice from "@/components/PieChart";
export default function Dashboard() {

  const stats = [
    { id: 1, title: "Views", value: "7,265", change: "10%", up: true },
    { id: 2, title: "Visits", value: "3,671", change: "0.03%", up: false },
    { id: 3, title: "New Users", value: "156", change: "15.03%", up: true },
    { id: 4, title: "Active Users", value: "2,318", change: "4.08%", up: true },
  ];
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            up={item.up}
            id={item.id}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Users Chart */}
        <div className="lg:col-span-2 bg-gray-50 p-5 rounded-xl  border border-gray-50">
          <LineChart />
        </div>

        {/* Traffic by Device */}
        <BarChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficByDevice />


        <TrafficSources />

      </div>

    </div>
  );
}