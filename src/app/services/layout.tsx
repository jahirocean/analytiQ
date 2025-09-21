"use client";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/Services/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      <div className="flex max-w-7xl mx-auto pt-25 px-6 py-8">
        <div className="hidden top-18 lg:block h-[calc(100vh-4rem)] border-r sticky  overflow-y-auto">
          <Sidebar />
        </div>

        <div className=" bg-background flex-1">{children}</div>
      </div>
    </div>
  );
}
