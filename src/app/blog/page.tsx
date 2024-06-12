import { Card } from "@/components";
import React from "react";

function page() {
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
