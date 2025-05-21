
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School } from "lucide-react";

const Education = () => {
  const courses = [
    "Digital Signal Processing",
    "VLSI Design",
    "Microprocessors and Microcontrollers",
    "Wireless Communication",
    "Antenna and Wave Propagation",
    "Embedded Systems",
    "Analog and Digital Communication",
    "Control Systems",
    "Artificial Intelligence and Machine Learning",
    "Robotics"
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate: Coursera",
    "Microsoft Power BI Desktop for Business: Udemy",
    "MySQL for Data Analysis: HackerRank"
  ];

  return (
    <section id="education" className="py-16 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education & Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <School className="h-8 w-8 text-accent mt-1" />
              <div>
                <CardTitle className="text-xl dark:text-white text-left">B.Tech in Electronics & Communication</CardTitle>
                <p className="text-accent font-medium text-left">Guru Tegh Bahadur Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-left">2020-2024 • CGPA: 9.0/10</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 dark:text-gray-200 text-left">Key Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <Badge key={course} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-primary dark:text-accent border-primary dark:border-accent">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl dark:text-white text-left">Certifications & Research</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="text-md font-semibold mb-3 dark:text-gray-200 text-left">Professional Certifications:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left">
                  {certifications.map((cert, index) => (
                    <li key={index} className="ml-2">{cert}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-3 dark:text-gray-200 text-left">Research Publication:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-left">
                  <a 
                    href="http://www.socpros2023.iitr.ac.in/wp-content/uploads/2023/10/Book_of_Abstracts__SocPros23.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    SocPros23 Research Publication
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
