import { Card, SideNav } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="col-span-9 grid grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
