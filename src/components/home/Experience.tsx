
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Data Analyst",
      company: "PlanetSpark",
      period: "September 2024 - Present",
      responsibilities: [
        "Analyzed marketing data across 250+ metrics from 7-8 sources, integrating Metabase SQL and APIs to build a Power BI dashboard.",
        "Automated sales data processing from Excel to Power BI, reducing manual effort by 80%.",
        "Conducted operational analysis on 4 weeks of video call data, optimizing counselor performance and booking flow.",
        "Automated monthly MIS reports using Python scripts to pull and consolidate data across operations, marketing, and teacher performance."
      ],
      achievements: [
        "Discontinued 100+ ads and 20 underperforming campaigns, saving ~$1M",
        "Reduced manual effort by 80% through automation",
        "Increased counselor bookings by 30% and improved customer satisfaction"
      ],
      skills: ["Google Sheets/Excel", "SQL", "Python", "JIRA", "Metabase", "Power BI"]
    },
    {
      id: 2,
      title: "Business Analyst and Project Manager",
      company: "Qurex",
      period: "June 2024 - August 2024",
      responsibilities: [
        "Led 5 cross-functional projects, ensuring 100% on-time delivery.",
        "Optimized CRM processes, boosting lead conversion rates by 35%.",
        "Developed 18 dynamic reports and dashboards, driving a 25% increase in data transparency."
      ],
      achievements: [
        "Increased team productivity by 20% through streamlined workflows",
        "Reduced customer acquisition costs by 20%",
        "Empowered senior leadership with data-driven insights"
      ],
      skills: ["Project Management", "Google Sheets/Excel", "SQL", "Python", "JIRA", "Leadsquared", "Google Looker Studio", "Power BI"]
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "InFeedo",
      period: "June 2023 - May 2024",
      responsibilities: [
        "Analyzed 50+ datasets to uncover insights, producing 20+ accurate reports and dashboards for stakeholders.",
        "Reduced errors by 30% through data cleansing efforts and improved efficiency by 20% in data integration processes.",
        "Developed performance dashboards, enhancing visibility by 15%.",
        "Collaborated with Sales, Marketing, and Customer Success teams to ensure data-driven decision-making."
      ],
      achievements: [
        "Reduced errors by 30% through data cleansing",
        "Improved efficiency by 20% in data integration processes",
        "Implemented an Early Warning System, reducing lead leakages by 10%"
      ],
      skills: ["Excel", "Salesforce", "SQL", "Power BI", "Rattle", "Salesforce Analytics"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={experience.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{experience.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2">Skills & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
