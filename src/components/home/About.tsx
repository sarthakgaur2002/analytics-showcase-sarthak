
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
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a data-driven Business Analytics Professional with experience at PlanetSpark, Qurex, and Infeedo, 
              focused on turning complex data into actionable insights that drive business outcomes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My expertise lies in automating data pipelines, creating insightful business intelligence dashboards, 
              and implementing marketing analytics solutions that lead to measurable business impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I approach analytics challenges collaboratively, with a results-oriented mindset and 
              a commitment to delivering insights that support strategic decision-making.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
