
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
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
