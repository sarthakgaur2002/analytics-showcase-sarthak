
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-4 w-4 ${!isDarkMode ? "text-accent" : "text-gray-400"}`} />
      <Switch 
        checked={isDarkMode} 
        onCheckedChange={handleToggleTheme}
        className="data-[state=checked]:bg-accent"
      />
      <Moon className={`h-4 w-4 ${isDarkMode ? "text-accent" : "text-gray-400"}`} />
    </div>
  );
};

export default ThemeToggle;
