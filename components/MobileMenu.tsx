"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setisSidebarOpen(!isSidebarOpen)}>
        {/* Logo 3 ขีด */}
        <AlignLeft className="text-white hover:text-pink-300 hoverEffect md:hidden hover:cursor-pointer " />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setisSidebarOpen(false)}
        />
      </div>
    </>
  );
};
export default MobileMenu;
