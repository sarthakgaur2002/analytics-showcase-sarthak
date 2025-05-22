
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, BookOpen, Trophy, Award, Lightbulb } from "lucide-react";

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
    <section id="education" className="py-16 dark:bg-gray-900 bg-white relative">
      {/* Visual background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Overlapping circles */}
        <div className="absolute top-[10%] right-[5%] w-40 h-40 rounded-full border border-accent/10 opacity-10"></div>
        <div className="absolute bottom-[15%] left-[5%] w-32 h-32 rounded-full border border-accent/10 opacity-10"></div>
        <div className="absolute top-[20%] left-[15%] w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        {/* Education-themed icons */}
        <BookOpen className="absolute top-[15%] right-[20%] h-16 w-16 text-accent/5" />
        <Trophy className="absolute bottom-[20%] left-[15%] h-14 w-14 text-accent/5" />
        <Award className="absolute top-[30%] left-[50%] h-12 w-12 text-accent/5" />
        <Lightbulb className="absolute bottom-[30%] right-[15%] h-14 w-14 text-accent/5" />
        
        {/* Animated gradient */}
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Connect-the-dots pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M20,20 L40,15 L60,25 L80,20" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-accent" />
          <path d="M20,40 L30,55 L50,45 L70,60 L80,50" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-accent" />
          <path d="M10,80 L30,70 L50,75 L70,65 L90,70" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-accent" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education & Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <School size={100} />
            </div>
            
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full"></div>
            
            <CardHeader className="flex flex-row items-start space-x-4 pb-2">
              <div className="bg-accent/10 p-2 rounded-lg">
                <School className="h-8 w-8 text-accent" />
              </div>
              <div>
                <CardTitle className="text-xl dark:text-white text-left">B.Tech in Electronics & Communication</CardTitle>
                <p className="text-accent font-medium text-left">Guru Tegh Bahadur Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-400 text-left">2020-2024 • CGPA: 9.0/10</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-4 w-4 mr-2 text-accent" />
                  <h4 className="text-md font-semibold dark:text-gray-200 text-left">Key Subjects:</h4>
                </div>
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
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <Award size={100} />
            </div>
            
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full"></div>
            
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl dark:text-white text-left">Certifications & Research</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Award className="h-4 w-4 mr-2 text-accent" />
                  <h4 className="text-md font-semibold dark:text-gray-200 text-left">Professional Certifications:</h4>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left">
                  {certifications.map((cert, index) => (
                    <li key={index} className="ml-2">{cert}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Lightbulb className="h-4 w-4 mr-2 text-accent" />
                  <h4 className="text-md font-semibold dark:text-gray-200 text-left">Research Publication:</h4>
                </div>
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
