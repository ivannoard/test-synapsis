"use client";
import React from "react";
import Card from "../Card";
import { DataType } from "@/utils/typeinterface";

type Props = {
  data: DataType[];
};

function Home({ data }: Props) {
  const [dataHome, setDataHome] = React.useState(data);

  // async function getData() {
  //   try {
  //     const response = await axios.get("/api/post?page=2");
  //     if (response.status === 200) {
  //       setData(response.data.data);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  // React.useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <div className="mt-4 col-span-12 lg:col-span-9">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data &&
            data.map((item: DataType) => <Card key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
