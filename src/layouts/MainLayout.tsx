import { HeaderLayout, Navbar, SideNav } from "@/components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {/* {children} */}
      <div className="p-5">
        <HeaderLayout />
        <div className="grid grid-cols-12 gap-4">
          {children}
          <SideNav />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
