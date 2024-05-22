import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layouts/Sidebar/index";
import Header from "@/components/layouts/Header";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = getServerSession(authOptions);

  if (session !== null) {
    return redirect('/');
  }

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
