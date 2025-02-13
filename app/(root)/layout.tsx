import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import AppSideBar from "@/components/navigation/sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="flex flex-row">
        <AppSideBar />
        <section className="h-screen basis-full bg-white px-6 pb-6 pt-36 max-md:pb-14 sm:basis-5/6 sm:px-14">
          {children}
        </section>
      </div>
    </main>
  );
}
