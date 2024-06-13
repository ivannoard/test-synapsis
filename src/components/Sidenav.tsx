"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Sidenav() {
  const router = usePathname();

  return (
    <>
      {router.split("/")[2] === undefined && router !== "/user" && (
        <div className="col-span-3 relative hidden lg:block">
          <div className="bg-white rounded-md w-full shadow-md p-3 sticky top-24">
            <div className="pb-2 border-b-2">
              <h3 className="font-semibold">Tentang Synapsis</h3>
            </div>
            <p className="mt-2 text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              asperiores sit eos veniam facere deserunt, molestiae animi autem
              omnis dolores?
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidenav;
