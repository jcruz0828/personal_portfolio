"use client";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProject";
import Education from "@/components/ui/Education";
import Certificates from "@/components/ui/Certificates";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Head from "next/head";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      

      <div className="max-w-7xl w-full mt-[125px] ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Education />
        <Certificates />
        <Experience/>
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
