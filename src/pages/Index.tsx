
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </MainLayout>
  );
};

export default Index;
