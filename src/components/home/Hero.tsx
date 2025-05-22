
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1daUbPOtXHeYpHuZstN57pQdBXlA2M8gd/view?usp=sharing', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="text-left md:w-3/5 mt-8 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Sarthak Gaur
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-accent font-semibold">
              Data Analyst | Business Analytics Professional
            </p>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
              Turning data into actionable business insights
            </p>
            <div className="mt-10 flex gap-4">
              <Button 
                className="bg-accent hover:bg-accent/90"
                onClick={scrollToContact}
              >
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center border-accent text-accent hover:bg-accent/10"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-secondary blur-md opacity-50 -z-10 scale-110"></div>
              <Avatar className="h-64 w-64 border-4 border-white shadow-xl">
                <AvatarImage src="/lovable-uploads/3cca0ceb-6523-4e46-9e78-5e7bdc488c50.png" alt="Sarthak Gaur" />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
