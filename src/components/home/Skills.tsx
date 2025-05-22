
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Code, Database, LineChart } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "SQL", "Power BI", "Python", "Google Sheets", "Excel", 
    "Data Analysis", "Data Visualization", "Automation", 
    "Reporting", "Dashboard Development", "Data Pipelines",
    "Pandas", "Seaborn", "Matplotlib", "R", "Scripts"
  ];

  const tools = [
    "Power Query Editor", "MySQL", "Microsoft Office Suite", 
    "Google Analytics", "JIRA", "Metabase", "Confluence", 
    "Salesforce Analytics", "Google Looker Studio", "Rattle"
  ];

  const softSkills = [
    "Data-driven Decision Making", "Technical Documentation", 
    "API Integration", "Project Management", "Data Modeling",
    "Customer Relationship Management", "Team Collaboration",
    "Problem Solving", "Communication"
  ];

  return (
    <section id="skills" className="py-16 dark:bg-gray-800 bg-gray-50 relative">
      {/* Visual background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Data flow paths */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,30 Q30,5 50,30 T90,30" stroke="currentColor" fill="none" className="text-accent" />
          <path d="M10,50 Q30,25 50,50 T90,50" stroke="currentColor" fill="none" className="text-accent" strokeDasharray="5,5" />
          <path d="M10,70 Q30,45 50,70 T90,70" stroke="currentColor" fill="none" className="text-accent" strokeDasharray="1,3" />
        </svg>
        
        {/* Data nodes */}
        <div className="absolute left-1/4 top-1/4 w-2 h-2 bg-accent/20 rounded-full"></div>
        <div className="absolute left-2/4 top-2/4 w-2 h-2 bg-accent/20 rounded-full"></div>
        <div className="absolute left-3/4 top-1/2 w-2 h-2 bg-accent/20 rounded-full"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50/80 dark:from-gray-800/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50/80 dark:from-gray-800/80 to-transparent"></div>
        
        {/* Animated elements */}
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full border border-accent/10 opacity-10 animate-pulse"></div>
        <div className="absolute top-[10%] left-[20%] w-40 h-40 rounded-full border border-accent/5 opacity-5 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Tools</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
            {/* Visual icon */}
            <div className="absolute -bottom-4 -right-4 opacity-5">
              <LineChart size={80} />
            </div>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4 gap-3">
                <div className="bg-accent/10 p-2 rounded-md">
                  <Code className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white text-left">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-primary dark:text-accent border-primary dark:border-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
            {/* Visual icon */}
            <div className="absolute -bottom-4 -right-4 opacity-5">
              <Database size={80} />
            </div>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4 gap-3">
                <div className="bg-accent/10 p-2 rounded-md">
                  <Database className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white text-left">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-primary dark:text-accent border-primary dark:border-accent">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
            {/* Visual icon */}
            <div className="absolute -bottom-4 -right-4 opacity-5">
              <BarChart size={80} />
            </div>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4 gap-3">
                <div className="bg-accent/10 p-2 rounded-md">
                  <BarChart className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white text-left">Professional Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-primary dark:text-accent border-primary dark:border-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
