import { Navbar, SideNav } from "@/components";
import React, { Children } from "react";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="p-10 bg-red-500 grid grid-cols-12 gap-4 w-full">
        {children}
        <div className="col-span-3">
          <SideNav />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
