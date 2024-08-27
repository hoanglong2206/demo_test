"use client";
import { Footer, Header, SidebarNav } from "@/components";
import { useState } from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="h-full flex flex-col min-h-screen">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-grow">
        <SidebarNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BrowseLayout;
