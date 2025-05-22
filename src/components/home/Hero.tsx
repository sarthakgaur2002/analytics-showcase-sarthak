
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background visualization elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract data chart lines */}
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[1px] bg-accent/20 animate-pulse"></div>
        <div className="absolute top-[15%] left-[5%] w-[45%] h-[1px] bg-accent/15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[20%] left-[5%] w-[35%] h-[1px] bg-accent/20 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-[25%] left-[5%] w-[50%] h-[1px] bg-accent/10 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Data nodes */}
        <div className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="absolute top-[15%] left-[5%] w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="absolute top-[20%] left-[5%] w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="absolute top-[25%] left-[5%] w-2 h-2 rounded-full bg-accent/40"></div>
        
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating data circles */}
        <div className="absolute top-[70%] right-[10%] w-16 h-16 rounded-full border border-accent/20 opacity-20 animate-pulse"></div>
        <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full border border-secondary/20 opacity-10 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[50%] right-[20%] w-12 h-12 rounded-full border border-primary/20 opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Data visualization bars */}
        <div className="absolute bottom-[10%] left-[60%] flex items-end space-x-1">
          <div className="w-1 h-8 bg-accent/10 rounded-t"></div>
          <div className="w-1 h-12 bg-accent/15 rounded-t"></div>
          <div className="w-1 h-6 bg-accent/10 rounded-t"></div>
          <div className="w-1 h-16 bg-accent/20 rounded-t"></div>
          <div className="w-1 h-10 bg-accent/15 rounded-t"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
