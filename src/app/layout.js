"use client";

import { useState } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import ActivityItem from "@/components/ActivityItem";
import Contacts from "@/components/ContactItem";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(true);

  return (
    <html lang="en">
      <body className=" text-gray-900">
        <div className="flex h-screen overflow-hidden">

          {/* Left Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main Content Area */}
          <div
            className={`
              flex-1 flex flex-col overflow-hidden transition-all duration-300
              ${sidebarOpen ? "md:ml-64" : "ml-0"}
              ${notifyOpen ? "lg:mr-72" : "lg:mr-0"}
            `}
          >
            {/* Header */}
            <Header setSidebarOpen={setSidebarOpen} setNotifyOpen={setNotifyOpen} />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 thin-scrollbar" style={{
              scrollbarWidth: "none",
            }}>
              {children}
            </main>
            
          </div>

          {/* ===== Right Notification Sidebar (Desktop Only) ===== */}
          <aside
            className={`
              hidden lg:block fixed right-0 border-l border-border top-0 h-full w-72 bg-white 
              p-4 overflow-y-auto thin-scrollbar transition-transform duration-300 z-40
              ${notifyOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <Notification />
            <ActivityItem />
            <Contacts />
          </aside>

          {/* ===== Bottom Notification Drawer (Mobile & Tablet) ===== */}


        </div>
      </body>
    </html>
  );
}