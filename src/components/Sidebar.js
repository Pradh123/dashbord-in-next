"use client";

import {
  ChevronRight,
  Home,
  ShoppingCart,
  Folder,
  Settings,
  Globe,
  UserRound,
  BookOpen,
  Users,
  CircleUser,
  X
} from "lucide-react";
import Link from "next/link";

import { useState } from "react";

export default function Sidebar({ sidebarOpen,setSidebarOpen }) {
  const [open, setOpen] = useState({
    dashboards: true,
    pagesUser: true,
    pagesAccount: false,
    pagesCorporate: false,
    pagesBlog: false,
    pagesSocial: false,
  });

  const toggle = (key) => {
    setOpen((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <aside
      className={`
        h-screen w-56 border-r border-border bg-white text-text flex flex-col
        fixed lg:static top-0 left-0 z-40

        /* Mobile Animation */
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

        /* Desktop Always Visible */
        lg:translate-x-0
      `}
    >
      {/* LOGO */}
      <div className=" flex justify-between pt-5 px-5">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <CircleUser className="w-6 h-6 text-black" />
          
          ByeWind
        </h1>
        <X className="w-4 h-4 lg:hidden " onClick={()=>setSidebarOpen(false)}/>
      </div>

      {/* MENU CONTENT */}
      <nav className="flex-1 overflow-y-auto px-4 py-1 thin-scrollbar" style={{
          scrollbarWidth: "none",
        }}>

        {/* Favorites */}
        <div className="flex gap-5">
          <p className="text-gray-400 font-semibold mt-4 mb-2 px-2 rounded hover:bg-gray-100">Favorites</p>
          <p className="text-gray-300 font-semibold mt-4 mb-2 px-2 rounded hover:bg-gray-100">Recently</p>
        </div>

        <div className="space-y-1">
          <a className="flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-100 cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            Overview
          </a>

          <a className="flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-100 cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            Projects
          </a>
        </div>

        {/* Dashboards */}
        <p className="text-gray-400 font-semibold mt-5 mb-2 px-2">Dashboards</p>

        <div className="space-y-1">
          <Link
           href="/"
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="pl-7 flex items-center gap-2 text-sm">
              <Home className="w-4 h-4" /> Overview
            </span>
            
          </Link>
           <Link
            href="/"
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <ShoppingCart className="w-4 h-4" /> eCommerce
            </span>
            
          </Link>
           <Link
           href="/"
            
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <Folder className="w-4 h-4" /> Projects
            </span>
            
          </Link>

          
           
         
        </div>

        {/* Pages */}
        <p className="text-gray-400 font-semibold mt-5 mb-2 px-2">Pages</p>

        {/* User Profile */}
        <div>
          <button
            onClick={() => toggle("pagesUser")}
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <UserRound className="w-4 h-4" /> User Profile
            </span>
            
          </button>

          {open.pagesUser && (
            <div className="pl-9 space-y-1 text-sm">
              <div className="py-1 pl-6 rounded hover:bg-gray-100 px-3">Overview</div>
              <div className="py-1 pl-6 rounded hover:bg-gray-100 px-3">Projects</div>
              <div className="py-1 pl-6 rounded hover:bg-gray-100 px-3">Campaigns</div>
              <div className="py-1 pl-6 rounded hover:bg-gray-100 px-3">Documents</div>
              <div className="py-1 pl-6 rounded hover:bg-gray-100 px-3">Followers</div>
            </div>
          )}
        </div>

        {/* Account */}
        <div>
          <button
            onClick={() => toggle("pagesAccount")}
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <Settings className="w-4 h-4" /> Account
            </span>
           
          </button>
        </div>

        {/* Corporate */}
        <div>
          <button
            onClick={() => toggle("pagesCorporate")}
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <Users className="w-4 h-4" /> Corporate
            </span>
           
          </button>
        </div>

        {/* Blog */}
        <div>
          <button
            onClick={() => toggle("pagesBlog")}
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <BookOpen className="w-4 h-4" /> Blog
            </span>
            
          </button>
        </div>

        {/* Social */}
        <div>
          <button
            onClick={() => toggle("pagesSocial")}
            className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
          >
            <span className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <Globe className="w-4 h-4" /> Social
            </span>
            
          </button>
        </div>

      </nav>
    </aside>
  );
}
