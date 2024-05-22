import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layouts/Sidebar/index";
import Header from "@/components/layouts/Header";
import { Toaster } from "@/components/ui/toaster";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
