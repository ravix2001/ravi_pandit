import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "ecommercePlatform",
      title: "Ecommerce Platform",
      description:
        "Developed a scalable e-commerce backend featuring JWT authentication, product management, shopping cart, order lifecycle handling, Redis caching, and PostgreSQL query optimization, exposed through RESTful APIs. Orbit provides a professional, scalable platform suitable for small to medium online retailers looking to digitize their sales process, combining a modern React frontend with a solid backend API design.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Redis", "Docker", "React", "Tailwind CSS"],
      github: "https://github.com/ravix2001/orbit",
      demo: "https://orbit.ravi-pandit.com.np",
    },
    {
      id: "journalApp",
      title: "Journal App",
      description:
        "A secure journal web application with user authentication, role-based authorization, scheduled tasks, and MongoDB persistence, exposed through RESTful APIs and containerized for Dockerized deployment. Acts as a personal, organized space where users can create, view, edit, and manage their journal entries anytime, from any device.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Swagger API", "JUnit", "Docker", "React"],
      github: "https://github.com/ravix2001/journalApp",
      demo: "https://journal-psi-eight.vercel.app",
    },
    {
      id: "trendMorphAI",
      title: "TrendMorph AI",
      description:
        "An AI-powered content generation platform that turns images into descriptive captions using BLIP and generates engaging social media captions with a fine-tuned T5 model. Integrated Speech-to-Text and Text-to-Speech modules for voice-based interaction, and deployed the prototype on Hugging Face Spaces with GPU acceleration.",
      technologies: ["Python", "Transformers", "BLIP", "T5", "Flask", "Hugging Face", "NLP"],
      github: "https://github.com/trendmorph-Ai/AI_ML",
      demo: "https://trendmorphai.rajeshpandey10.com.np",
    },
    {
      id: "sentimentAnalysis",
      title: "Sentiment Analysis Tool",
      description:
        "A browser extension that extracts product reviews from Amazon and Daraz and performs real-time sentiment analysis. Trained a TF-IDF + Logistic Regression model to classify reviews into positive, neutral, and negative categories, with insights surfaced directly in the browser via a Firefox add-on.",
      technologies: ["Python", "Flask", "Scikit-Learn", "TF-IDF", "Logistic Regression", "Matplotlib", "Render"],
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
                  className="card hover:scale-101 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="mb-2">
                    {project.title}
                  </h3>
                  <p class="text-sm sm:text-sm md:text-base mb-4">
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