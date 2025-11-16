import React from 'react'
import { Bug, UserPlus, Heart, X } from "lucide-react";
const Notification = () => {
    const notifications = [
        {
            id: 1,
            icon: Bug,
            title: "You fixed a bug.",
            subtitle: "Just now",
            color: "text-green-600",
            bg: "bg-[#E6F1FD]",
        },
        {
            id: 2,
            icon: UserPlus,
            title: "New user registered.",
            subtitle: "5 minutes ago",
            color: "text-blue-600",
            bg: "bg-[#EDEEFC]",
        },
        {
            id: 3,
            icon: Bug,
            title: "You fixed a bug.",
            subtitle: "12 hours ago",
            color: "text-green-600",
            bg: "bg-[#E6F1FD]",
        },
        {
            id: 4,
            icon: Heart,
            title: "Andi Lane subscribed to you.",
            subtitle: "Today, 11:59 AM",
            color: "text-pink-600",
            bg: "bg-[#EDEEFC]",
        },
    ];
    return (
        <>
            <div className="flex items-center justify-between px-4 pb-2">
                <h2 className="text-md font-semibold text-gray-900">Notifications</h2>

            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-4 pb-2 space-y-3 thin-scrollbar">
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className={`flex gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative group`}
                    >
                        <div className="flex-shrink-0">
                            <div className={`p-2 rounded-md ${n.bg}`}>
                                <n.icon className={`w-5 h-5 ${n.color}`} />
                            </div>
                        </div>
                        <div className=" min-w-0 flex-1 group-hover:translate-x-1 transition-all duration-700 ease-out">
                            <p className="text-sm font-medium text-gray-900 truncate">{n.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{n.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Notification