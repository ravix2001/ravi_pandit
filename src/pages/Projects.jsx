import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "journalApp",
      title: "Journal App",
      description:
        "The Journal Web App is a user-friendly digital diary designed to help users capture their thoughts, ideas, and daily experiences in a secure and organized manner. It acts as a personal space where users can create, view, edit, and manage their journal entries anytime, from any device.",
      technologies: ["Java", "SpringBoot", "MongoDB", "Docker", "React"],
      github: "https://github.com/ravix2001/journalApp",
      demo: "https://journal-psi-eight.vercel.app",
    },
    {
      id: "ecommercePlatform",
      title: "Ecommerce Platform",
      description:
        "Orbit provides a professional, scalable platform suitable for small to medium online retailers looking to digitize their sales process. The project showcases strong full-stack development skills, combining modern frontend frameworks with solid backend API design.",
      technologies: ["Java", "Spring Boot", "MySQL" , "React", "Tailwind CSS"],
      github: "https://github.com/ravix2001/orbit",
      demo: "https://github.com/ravix2001/orbit",
    },
    {
      id: "sentimentAnalysis",
      title: "Sentiment Analysis Tool",
      description:
        "Trained a Logistic Regression model with TF-IDF to classify e-commerce product reviews. Scrapes reviews from Amazon/Daraz, provides insights, and integrates with Firefox via browser extension for real-time sentiment feedback.",
      technologies: ["Python", "NLP", "Scikit-Learn", "Matplotlib", "Render"],
      github: "https://github.com/ravix2001/model_minor_project",
      demo: "https://addons.mozilla.org/en-US/firefox/addon/product-review-insight",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Projects Section */}
      <section
        id="projects"
        className="section-padding hero-bg"
      >
        <div className="container-custom">
          <h2 className="text-center mb-12 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="card hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
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

export default Projects;
