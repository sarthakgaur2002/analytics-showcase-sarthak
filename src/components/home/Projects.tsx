
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBar, FileText, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Marketing Dashboard & Analytics",
      company: "PlanetSpark",
      description: "Analyzed marketing data across 250+ metrics from 7-8 sources, integrating Metabase SQL and APIs to build a comprehensive Power BI dashboard.",
      outcome: "Led to the discontinuation of 100+ ads and 20 underperforming campaigns, saving approximately $1M.",
      tools: ["Power BI", "SQL", "Metabase", "APIs", "Data Analysis"],
      icon: <ChartBar className="h-8 w-8 text-accent" />,
    },
    {
      id: 2,
      title: "Google Play Store Apps Analysis",
      description: "Implemented a Python-based data pipeline with rigorous cleaning, deduplication, and outlier removal processes.",
      outcome: "Reduced data errors by 25% and leveraged statistical analysis and visualization (Seaborn, Matplotlib) to identify key trends in app ratings and reviews.",
      tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Cleaning"],
      icon: <FileText className="h-8 w-8 text-accent" />,
    },
    {
      id: 3,
      title: "Adventure Works Retail Dashboard",
      description: "Optimized data quality by cleaning and transforming datasets in Power BI, ensuring accurate and reliable reporting.",
      outcome: "Designed and developed a comprehensive data model and dashboard, enabling real-time insights and supporting informed decision-making.",
      tools: ["Power BI", "Data Modeling", "Data Transformation", "Dashboarding"],
      icon: <ChartBar className="h-8 w-8 text-accent" />,
    },
    {
      id: 4,
      title: "Crypto Currency Analysis",
      description: "Engineered robust data pipelines using Python and SQL to aggregate, clean, and validate cryptocurrency data from multiple exchanges.",
      outcome: "Designed and deployed an interactive Power BI dashboard, providing real-time visualizations of critical market metrics to support strategic decision-making.",
      tools: ["Python", "SQL", "Power BI", "Data Pipelines"],
      icon: <Database className="h-8 w-8 text-accent" />,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A showcase of my data analysis projects, highlighting my technical skills and business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border-gray-700 bg-gray-800 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              <CardHeader className="border-b border-gray-700 bg-gray-800/70 flex flex-row items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-lg shadow-inner shadow-accent/20">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  {project.company && (
                    <CardDescription className="text-gray-400">{project.company}</CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-6 text-left">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-300 mb-4">
                  <span className="text-accent font-semibold">Outcome:</span> {project.outcome}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-gray-700 border-gray-600 text-gray-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-800/50 border-t border-gray-700">
                <Button variant="ghost" size="sm" className="ml-auto text-accent hover:text-white hover:bg-gray-700">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
