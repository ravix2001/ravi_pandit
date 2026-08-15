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
        "Developing and enhancing RESTful APIs using Spring Boot for scalable backend services. Implemented database indexing and query optimization techniques that improved query execution time and overall backend performance. Diagnosed and resolved production issues across multiple backend modules, improving application stability. Continuing to follow clean code practices, learn advanced backend patterns, and contribute to production-grade improvements.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Bitbucket", "Postman API", "JavaScript"],
    },
    {
      id: "java-intern",
      title: "Java Intern",
      company: "Restobrain, Darwin, Northern Territory, Australia - Remote",
      period: "Sep 2025 - Nov 2025",
      description:
        "Built and integrated REST APIs using Spring Boot. Fixed critical bugs, handled edge cases, and improved application stability. Optimized queries and refactored backend code for better performance, and collaborated on debugging complex issues spanning multiple services. Thankful to my mentors, seniors, and teammates for guiding me through code reviews, best practices, and real-world scenarios that helped me grow faster and better.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Bitbucket", "Postman API", "JavaScript"],
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
                  className="card hover:scale-101 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
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
                  <p class="text-sm sm:text-sm md:text-base mb-4">
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