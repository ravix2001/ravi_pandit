import React from "react";
import { Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="section-padding animate-fade-in"
      >
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Photo */}
            <div className="mb-6 animate-fade-in">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src="/assets/ravi-pandit.png"
                  alt="Ravi Pandit"
                  className="image-container"
                />
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div> */}
              </div>
            </div>
            {/* Text */}
            <h1 className="mb-6 animate-slide-up">
              Computer Engineer & <br />
              Java Developer
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
              Passionate about building scalable Java applications and
              intelligent systems using machine learning and natural language
              processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
              <a
                href="/assets/Ravi_Pandit.pdf"
                download="Ravi_Pandit.pdf"
                className="btn-secondary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
