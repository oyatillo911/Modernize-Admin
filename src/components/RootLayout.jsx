import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]  ">
      
      <Navbar />

      
      <div className="flex">
        <Sidebar />

        
        <main className="flex-1 p-[40px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}