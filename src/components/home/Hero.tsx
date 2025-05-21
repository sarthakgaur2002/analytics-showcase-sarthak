
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Sarthak Gaur
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-primary font-semibold">
            Data Analyst | Business Analytics Professional
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Turning data into actionable business insights
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild>
              <Link to="/#contact" className="flex items-center">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
