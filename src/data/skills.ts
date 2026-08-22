export type SkillGroup = {
  id: string;
  label: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    label: "Core / Language",
    note: "What the services are written in",
    items: ["Java", "Python", "C", "C++", "JavaScript"],
  },
  {
    id: "service",
    label: "Service Layer",
    note: "Frameworks for API and application logic",
    items: ["Spring Boot", "Spring Security", "JWT", "Flask"],
  },
  {
    id: "data",
    label: "Data Layer",
    note: "Storage and caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    id: "delivery",
    label: "Delivery / Tooling",
    note: "Build, test, ship",
    items: ["Docker", "Git", "GitHub", "Postman", "JUnit", "Swagger"],
  },
  {
    id: "ml",
    label: "Applied ML",
    note: "From two independent projects",
    items: ["Scikit-learn", "Transformers (NLP)"],
  },
];
