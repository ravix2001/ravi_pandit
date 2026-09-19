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
    items: ["Java", "Python", "Go", "C", "C++", "JavaScript"],
  },
  {
    id: "service",
    label: "Service Layer",
    note: "Frameworks for API and application logic",
    items: ["Spring Boot", "Spring Security", "REST APIs", "Microservices", "JWT", "OAuth2"],
  },
  {
    id: "data",
    label: "Data Layer",
    note: "Storage and caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "pgvector"],
  },
  {
    id: "ai",
    label: "AI / LLM",
    note: "Applied AI integration and retrieval systems",
    items: [
      "Spring AI", "LLM Integration", "RAG", "Embeddings", "AI Agents",
    ],
  },
  {
    id: "delivery",
    label: "Delivery / Tooling",
    note: "Build, test, ship",
    items: ["Docker", "AWS S3", "CI/CD", "Git", "GitHub", "Bitbucket", "Postman", "JUnit", "Swagger / OpenAPI",],
  },
  {
    id: "ml",
    label: "Applied ML",
    note: "From two independent projects",
    items: ["Scikit-learn", "BLIP", "T5", "NLP", "Transformers (NLP)"],
  },
];
