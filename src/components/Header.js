"use client";

import {
    Menu,
    Search,
    Bell,
    Sun,
    RotateCcw,
    User,
    Star,
    LayoutDashboard
} from "lucide-react";

export default function Header({ setSidebarOpen ,setNotifyOpen}) {
    return (
        <header className="h-16 bg-white border-b border-border py-2 flex items-center px-4 justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 rounded hover:bg-gray-100"
                    onClick={() => setSidebarOpen(prev => !prev)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Breadcrumb */}
                <div className="hidden lg:flex items-center gap-8 text-sm mx-5 text-gray-600">

                    <div className="flex items-center gap-5">
                        <LayoutDashboard className="w-4 h-4" />
                        <Star className="w-4 h-4 text-gray-500" />
                    </div>

                    <div className="flex gap-8 relative">
                        <span className="text-gray-400 hover:translate-x-1 transition-all duration-700 ease-out">Dashboards</span>
                        <span className="font-semibold text-black hover:translate-x-1 transition-all duration-700 ease-out">Default</span>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

                {/* Search Bar */}
                <div className="hidden md:block w-64 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="
                            w-full bg-gray-100 rounded-full px-9 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-primary/40
                        "
                    />
                </div>

                <button className="p-2 rounded hover:bg-gray-100">
                    <Sun className="w-5 h-5" />
                </button>

                <button className="p-2 rounded hover:bg-gray-100">
                    <RotateCcw className="w-5 h-5" />
                </button>

                <button className="relative p-2 hidden lg:block rounded hover:bg-gray-100" onClick={() => setNotifyOpen(prev => !prev)}>
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

            </div>
        </header>
    );
}
