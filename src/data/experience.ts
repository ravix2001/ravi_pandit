export type ExperienceEntry = {
  id: string;
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  details: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "restobrain-junior",
    title: "Junior Java Developer",
    org: "Restobrain",
    location: "Darwin, Australia — Remote",
    start: "Nov 2025",
    end: "Present",
    summary:
      "Building and hardening the REST API layer that the product runs on, with a focus on data access performance and production stability.",
    details: [
      "Built and enhanced REST APIs in Spring Boot for core product features.",
      "Improved database indexing and query performance under real production load.",
      "Diagnosed and resolved production issues across the API and data layer.",
    ],
  },
  {
    id: "restobrain-intern",
    title: "Java Intern",
    org: "Restobrain",
    location: "Darwin, Australia — Remote",
    start: "Sep 2025",
    end: "Nov 2025",
    summary:
      "First production exposure: shipping and integrating REST APIs on an existing Spring Boot codebase.",
    details: [
      "Built and integrated REST APIs into an existing Spring Boot service.",
      "Fixed defects surfaced by QA and production usage.",
      "Optimized slow queries identified during feature work.",
    ],
  },
];
