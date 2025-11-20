import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Award, Code, Brain, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* About Section */}
      <section id="about" className="section-padding hero-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6 animate-fade-in-up">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Photo Section */}
              <div className="animate-fade-in-left">
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <img
                    src="/assets/ravi-pandit.png"
                    alt="Ravi Pandit"
                    className="image-container"
                  />
                </div>
                <p className="mb-6">
                  I'm a passionate computer engineer with expertise in Java
                  development and artificial intelligence. My journey in
                  technology spans from building robust backend systems to
                  developing intelligent solutions using machine learning and
                  natural language processing.
                </p>
                <p className="mb-6">
                  With a strong foundation in software engineering principles
                  and a keen interest in AI/ML, I enjoy solving complex problems
                  and creating innovative solutions that make a real impact.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ravix2001"
                  >
                    <Github className="w-7 h-7" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ravipandit2001"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                </div>
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <span>
                    Computer Engineering Degree
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5" />
                  <span>
                    2+ Years Java Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5" />
                  <span>
                    AI/ML Enthusiast
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  <span>
                    NLP Practitioner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;