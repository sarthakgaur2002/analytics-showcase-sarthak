import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1daUbPOtXHeYpHuZstN57pQdBXlA2M8gd/view?usp=sharing', '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold text-accent">
              Sarthak Gaur
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Projects
              </a>
              <a
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Experience
              </a>
              <a
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Contact
              </a>
              <Button variant="outline" size="sm" className="flex items-center ml-4 border-accent text-accent hover:bg-accent/10" onClick={handleDownloadResume}>
                <Download className="mr-1 h-4 w-4" /> Resume
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-accent hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            <a
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Experience
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Contact
            </a>
            <Button variant="outline" size="sm" className="flex items-center justify-center border-accent text-accent hover:bg-accent/10" onClick={handleDownloadResume}>
              <Download className="mr-1 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
