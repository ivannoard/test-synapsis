import { CardUserProfile } from "@/components";
import React from "react";

function page() {
  return (
    <>
      <div className="col-span-12 flex justify-center">
        <div className="lg:w-9/12 mx-auto">
          <div className="image">
            <div className="w-full h-[450px] rounded-md bg-blue-500"></div>
          </div>
          <div className="lg:w-10/12 mx-auto mt-4">
            <CardUserProfile size="lg" />
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                numquam doloremque ducimus iste ab tempore in, soluta nesciunt
                enim debitis consectetur, provident officiis vitae? Reiciendis
                corrupti eligendi voluptate sunt hic neque, commodi mollitia
                iusto! Laudantium natus illo consectetur fugiat, maiores tempora
                ratione at expedita perferendis illum sunt iusto velit laborum!
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                numquam doloremque ducimus iste ab tempore in, soluta nesciunt
                enim debitis consectetur, provident officiis vitae? Reiciendis
                corrupti eligendi voluptate sunt hic neque, commodi mollitia
                iusto! Laudantium natus illo consectetur fugiat, maiores tempora
                ratione at expedita perferendis illum sunt iusto velit laborum!
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                numquam doloremque ducimus iste ab tempore in, soluta nesciunt
                enim debitis consectetur, provident officiis vitae? Reiciendis
                corrupti eligendi voluptate sunt hic neque, commodi mollitia
                iusto! Laudantium natus illo consectetur fugiat, maiores tempora
                ratione at expedita perferendis illum sunt iusto velit laborum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
