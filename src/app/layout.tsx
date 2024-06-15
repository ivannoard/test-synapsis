import type { Metadata } from "next";
import MainLayout from "@/layouts/MainLayout";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Synapsis Blog",
  description: "This application is challenge test provided by Synapsis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Toaster position="top-right" />
          <MainLayout>{children}</MainLayout>
        </main>
      </body>
    </html>
  );
}
