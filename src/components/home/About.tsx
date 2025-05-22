
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, LineChart, BarChart, PieChart, TrendingUp, Database, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-gray-900 bg-white relative">
      {/* Enhanced visual background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-[20%] right-[5%] w-32 h-32 rounded-full border border-accent/10 opacity-20"></div>
        <div className="absolute bottom-[15%] left-[5%] w-24 h-24 rounded-full border border-accent/10 opacity-10"></div>
        <div className="absolute top-[10%] left-[10%] w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        
        {/* Data visualization icons */}
        <BarChart className="absolute bottom-[10%] left-[15%] h-16 w-16 text-accent/5" />
        <LineChart className="absolute top-[15%] right-[10%] h-14 w-14 text-accent/5" />
        <PieChart className="absolute bottom-[20%] right-[20%] h-12 w-12 text-accent/5" />
        <TrendingUp className="absolute top-[40%] left-[5%] h-10 w-10 text-accent/5" />
        <Database className="absolute bottom-[30%] right-[5%] h-12 w-12 text-accent/5" />
        <Code className="absolute top-[20%] left-[20%] h-10 w-10 text-accent/5" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Animated gradient */}
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
          {/* Decorative chart icon */}
          <div className="absolute -right-5 -bottom-5 opacity-5">
            <ChartBar size={120} />
          </div>
          
          {/* Enhanced visual elements */}
          <div className="absolute top-5 right-5 flex gap-2">
            <div className="w-2 h-8 bg-accent/10 rounded-t"></div>
            <div className="w-2 h-6 bg-accent/10 rounded-t"></div>
            <div className="w-2 h-10 bg-accent/10 rounded-t"></div>
          </div>
          
          <CardContent className="pt-6 text-left">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a Business Analytics Professional with 1+ years of experience at PlanetSpark, Qurex, and Infeedo, where I specialize in transforming raw data into business growth stories.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 dark:text-white">My expertise includes:</h3>
            
            <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>3+ automated data pipelines built end-to-end</li>
              <li>10+ impactful business intelligence dashboards created</li>
              <li>250+ marketing metrics analyzed to drive results</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300">
              I thrive in collaborative teams, using data-driven insights to empower decision-makers and achieve measurable outcomes. 
              My focus: making complex data simple, actionable, and a real driver of success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
