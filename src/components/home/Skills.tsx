
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="skills" className="py-16 dark:bg-gray-800 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Tools</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-left">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-primary dark:text-accent border-primary dark:border-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-left">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-primary dark:text-accent border-primary dark:border-accent">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-left">Professional Skills</h3>
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
