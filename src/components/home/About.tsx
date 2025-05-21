
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "SQL", "Power BI", "Python", "Google Sheets", "Excel", 
    "Data Analysis", "Data Visualization", "Automation", 
    "Reporting", "Dashboard Development", "Data Pipelines"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-gray-700 mb-4">
                I'm a data-driven Business Analytics Professional with experience at PlanetSpark, Qurex, and Infeedo, 
                focused on turning complex data into actionable insights that drive business outcomes.
              </p>
              <p className="text-gray-700 mb-4">
                My expertise lies in automating data pipelines, creating insightful business intelligence dashboards, 
                and implementing marketing analytics solutions that lead to measurable business impact.
              </p>
              <p className="text-gray-700">
                I approach analytics challenges collaboratively, with a results-oriented mindset and 
                a commitment to delivering insights that support strategic decision-making.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-gray-50 text-primary border-primary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Education</h4>
                <p className="text-gray-700">
                  <span className="font-semibold">B.Tech in Electronics & Communication</span>
                  <br />
                  Guru Tegh Bahadur Institute of Technology
                  <br />
                  2020-2024 • CGPA: 9.0/10
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
