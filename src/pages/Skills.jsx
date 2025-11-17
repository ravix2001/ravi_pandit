import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Code,
  Cpu,
  Brain,
  BookOpen,
  Database,
  Leaf,
  Atom,
  Package,
  Coffee,
  GitMerge,
  Github,
  Box,
  Calculator,
  Grid,
  BarChart3,
  Zap,
  Globe,
  Layers,
  FileCode2,
  Palette,
  Shield,
  FlaskConical,
  Sparkles,
  Power,
} from "lucide-react";

const Skills = () => {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      items: [
        { name: "React", icon: Atom },
        { name: "JavaScript", icon: Code },
        { name: "Tailwind CSS", icon: Palette },
        { name: "HTML5", icon: Code },
        { name: "CSS3", icon: Code },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      items: [
        { name: "Java", icon: Coffee },
        { name: "Spring Boot", icon: Power },
        { name: "Python", icon: FileCode2 },
        { name: "PostgreSQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: Leaf },
        { name: "REST APIs", icon: Globe },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Package,
      items: [
        { name: "Git", icon: GitMerge },
        { name: "GitHub", icon: Github },
        { name: "Docker", icon: Box },
        { name: "Maven", icon: Package },
        { name: "JUnit", icon: Shield },
        { name: "Mockito", icon: FlaskConical },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      items: [
        { name: "Natural Language Processing", icon: BookOpen },
        { name: "Deep Learning", icon: Layers },
        { name: "Transformers", icon: Cpu },
        { name: "PyTorch", icon: Zap },
        { name: "Scikit-learn", icon: FlaskConical },
        { name: "NumPy", icon: Calculator },
        { name: "Pandas", icon: Grid },
        { name: "Data Visualization", icon: BarChart3 },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section
        id="skills"
        ref={skillsRef}
        className="section-padding hero-bg"
      >
        <div className="container-custom">
          <h2 className="text-center mb-12 animate-fade-in-up">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in-up">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl card shadow skill-card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 mr-3 text-primary" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-muted border border-border flex items-center gap-2"
                    >
                      {item.icon && (
                        <item.icon className="w-4 h-4 text-primary" />
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Skills;
