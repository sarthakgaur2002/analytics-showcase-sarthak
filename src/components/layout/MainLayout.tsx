
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
    
    // Apply dark mode class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:text-gray-100">
      <Navbar />
      <main id="home" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
