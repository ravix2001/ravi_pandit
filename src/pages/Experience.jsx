import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "junior-java",
      title: "Junior Java Developer",
      company: "Restobrain, Darwin, Northern Territory, Australia - Remote",
      period: "Dec 2025 - Present",
      description:
        "Responsible for developing and enhancing REST APIs using Spring Boot, improving system performance, and ensuring code reliability through debugging and testing. Working on optimizing database queries, fixing complex issues, and contributing to scalable module designs. Following clean code practices and continuing to learn advanced backend patterns, implement efficient solutions, and contribute to production-grade improvements at Restobrain.",
      technologies: ["Java", "Springboot", "PostgreSQL", "Docker", "Bitbucket", "Postman API", "JavaScript"],
    },
    {
      id: "java-trainee",
      title: "Java Trainee",
      company: "Restobrain, Darwin, Northern Territory, Australia - Remote",
      period: "Sep 2025 - Dec 2025",
      description:
        "Built and integrated REST APIs using Spring Boot. Fixed critical bugs, handled edge cases, and improved application stability. Performed query optimization, refactoring, and code clean-ups for better performance. Collaborated in debugging complex problems involving multiple services. Thankful to my mentors, seniors, and teammates for guiding me through code reviews, best practices, and real-world scenarios. Your support helped me grow faster and better.",
      technologies: ["Java", "Springboot", "PostgreSQL", "Docker", "Bitbucket", "Postman API", "JavaScript"],
    },
  ];

  return (
    <>
      <Navbar />
      {/* Experience Section */}
      <section
        id="experience"
        className="section-padding hero-bg"
      >
        <div className="container-custom">
          <h2 className="text-center mb-12 animate-fade-in-up">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="card hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-start mb-2">
                        <Building className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Experience;
