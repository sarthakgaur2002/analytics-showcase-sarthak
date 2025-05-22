
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBar, FileText, Database, ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react";
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
      githubLink: null,
      visual: <BarChart3 className="h-20 w-20 text-accent/10 absolute right-4 bottom-4" />,
    },
    {
      id: 2,
      title: "Google Play Store Apps Analysis",
      description: "Implemented a Python-based data pipeline with rigorous cleaning, deduplication, and outlier removal processes.",
      outcome: "Reduced data errors by 25% and leveraged statistical analysis and visualization (Seaborn, Matplotlib) to identify key trends in app ratings and reviews.",
      tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Cleaning"],
      icon: <FileText className="h-8 w-8 text-accent" />,
      githubLink: "https://github.com/sarthakgaur2002/Play-store-dataset",
      visual: <LineChart className="h-20 w-20 text-accent/10 absolute right-4 bottom-4" />,
    },
    {
      id: 3,
      title: "Adventure Works Retail Dashboard",
      description: "Optimized data quality by cleaning and transforming datasets in Power BI, ensuring accurate and reliable reporting.",
      outcome: "Designed and developed a comprehensive data model and dashboard, enabling real-time insights and supporting informed decision-making.",
      tools: ["Power BI", "Data Modeling", "Data Transformation", "Dashboarding"],
      icon: <ChartBar className="h-8 w-8 text-accent" />,
      githubLink: "https://github.com/sarthakgaur2002/AdventureWorks-Dashboard",
      visual: <PieChart className="h-20 w-20 text-accent/10 absolute right-4 bottom-4" />,
    },
    {
      id: 4,
      title: "Crypto Currency Analysis",
      description: "Engineered robust data pipelines using Python and SQL to aggregate, clean, and validate cryptocurrency data from multiple exchanges.",
      outcome: "Designed and deployed an interactive Power BI dashboard, providing real-time visualizations of critical market metrics to support strategic decision-making.",
      tools: ["Python", "SQL", "Power BI", "Data Pipelines"],
      icon: <Database className="h-8 w-8 text-accent" />,
      githubLink: null,
      visual: <BarChart3 className="h-20 w-20 text-accent/10 absolute right-4 bottom-4" />,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 dark:bg-gray-900 relative">
      {/* Enhanced background visualization elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract graph background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Data visualization decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-accent/5 to-transparent"></div>
        
        {/* Chart lines */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,120 C240,100 480,0 720,50 C960,100 1200,0 1440,80 L1440,140 L0,140 Z" 
            fill="url(#accent-gradient)" 
          />
          <defs>
            <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated data points */}
        <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute left-3/4 top-1/2 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute left-1/2 top-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute left-2/3 top-2/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Animated data connections */}
        <div className="absolute left-1/4 top-1/3 w-[200px] h-[1px] bg-accent/10 rotate-45 origin-left"></div>
        <div className="absolute left-3/4 top-1/2 w-[150px] h-[1px] bg-accent/10 -rotate-30 origin-left"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="overflow-hidden border-gray-700 bg-gray-800 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 relative"
            >
              {/* Visual element */}
              {project.visual}
              
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
                {project.githubLink && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-auto text-accent hover:text-white hover:bg-gray-700"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
