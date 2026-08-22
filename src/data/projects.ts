export type Project = {
  slug: string;
  code: string; // drawing-set reference code, e.g. SVC-01
  name: string;
  oneLiner: string;
  stack: string[];
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-web-app",
    code: "SVC-01",
    name: "E-commerce Web App",
    oneLiner:
      "A JWT-secured commerce backend covering product, cart, and order management with a Redis caching layer.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Redis", "Docker"],
    problem:
      "A commerce backend needs to serve catalog reads fast, keep cart and order state consistent, and keep every write behind real authentication — while staying simple to deploy.",
    solution:
      "A Spring Boot service with JWT-based authentication in front of product, cart, and order modules, backed by PostgreSQL for durable state and Redis for hot-path catalog and session data.",
    architecture: [
      "Spring Security + JWT filter chain protecting all mutating endpoints.",
      "PostgreSQL schema for products, carts, orders, and users with tuned indexes on lookup columns.",
      "Redis layer caching high-read catalog queries and session lookups to cut database load.",
      "Docker Compose setup for local parity between the API, Postgres, and Redis.",
    ],
    challenges: [
      "Keeping cache and database state consistent across cart updates without stale reads.",
      "Tuning PostgreSQL indexes so catalog queries stayed fast as sample data grew.",
    ],
    results: [
      "Cut repeated catalog query latency by serving hot paths from Redis instead of Postgres.",
      "End-to-end auth flow (register → login → JWT-protected cart/order actions) fully working.",
    ],
    githubUrl: "https://github.com/ravix2001/orbit_backend",
    liveUrl: "https://orbit.ravi-pandit.com.np",
  },
  {
    slug: "journal-web-app",
    code: "SVC-02",
    name: "Journal Web App",
    oneLiner:
      "A role-based journaling service with scheduled tasks, MongoDB storage, and a documented, tested API.",
    stack: ["Java", "Spring Boot", "MongoDB", "Swagger", "JUnit", "Docker"],
    problem:
      "A personal journaling API needs per-user data isolation, background housekeeping, and an API contract other clients (or future frontends) can rely on without reading the source.",
    solution:
      "A Spring Boot service on MongoDB with role-based authorization, scheduled background jobs for housekeeping tasks, and a Swagger-documented contract backed by a JUnit test suite.",
    architecture: [
      "Role-based access control gating journal entries per authenticated user.",
      "MongoDB document store for flexible journal entry structure.",
      "Spring's task scheduler running periodic maintenance jobs.",
      "Swagger/OpenAPI docs generated directly from the codebase.",
      "Containerized with Docker for consistent local and deployment environments.",
    ],
    challenges: [
      "Modeling flexible, user-editable journal content in MongoDB without losing query-ability.",
      "Writing a JUnit suite that covered auth boundaries, not just happy-path CRUD.",
    ],
    results: [
      "Documented API contract via Swagger, so the service is usable without reading source.",
      "JUnit coverage across authorization edge cases and scheduled task behavior.",
    ],
    githubUrl: "https://github.com/ravix2001/journalApp",
    liveUrl: "https://journal-psi-eight.vercel.app",
  },
  {
    slug: "trendmorph-ai",
    code: "SVC-03",
    name: "TrendMorph AI",
    oneLiner:
      "An image-to-social-caption pipeline: BLIP captioning, a fine-tuned T5 rewrite step, and speech I/O, served on Hugging Face Spaces.",
    stack: ["Python", "Transformers", "BLIP", "T5", "Flask", "Hugging Face", "NLP"],
    problem:
      "Turning a raw photo into a usable social media caption is two separate problems: describing what's in the image, and rewriting that description into something with the right tone for a platform.",
    solution:
      "A pipeline that runs BLIP for image-to-caption generation, then passes the result through a fine-tuned T5 model to rewrite it into social-ready copy, with speech-to-text input and text-to-speech output layered on top.",
    architecture: [
      "BLIP model for initial image-to-caption inference.",
      "Fine-tuned T5 model rewriting the raw caption into social-post tone.",
      "Speech-to-text and text-to-speech endpoints for voice-driven interaction.",
      "Flask API serving the pipeline, deployed on Hugging Face Spaces with GPU inference.",
    ],
    challenges: [
      "Chaining two separate model outputs (BLIP → T5) without losing image-specific detail in the rewrite.",
      "Fitting inference into the memory and runtime limits of a Hugging Face Spaces GPU instance.",
    ],
    results: [
      "Working end-to-end pipeline deployed and publicly runnable on Hugging Face Spaces.",
      "Voice input/output layered onto the same captioning pipeline.",
    ],
    githubUrl: "https://github.com/trendmorph-Ai/AI_ML",
    liveUrl: "https://trendmorphai.rajeshpandey10.com.np",
  },
  {
    slug: "sentiment-analysis-extension",
    code: "SVC-04",
    name: "Sentiment Analysis Browser Extension",
    oneLiner:
      "A browser extension that scrapes Amazon and Daraz reviews and classifies sentiment with a TF-IDF + Logistic Regression model.",
    stack: ["Python", "Flask", "Scikit-learn", "TF-IDF", "Logistic Regression"],
    problem:
      "Shoppers on Amazon and Daraz face hundreds of unstructured reviews per product with no quick read on overall sentiment.",
    solution:
      "A browser extension that scrapes review text from the product page, sends it to a Flask API running a TF-IDF vectorizer and Logistic Regression classifier, and returns a sentiment breakdown in-page.",
    architecture: [
      "Scraper layer pulling review text from Amazon and Daraz product pages.",
      "TF-IDF vectorization of review text feeding a Logistic Regression classifier.",
      "Flask API exposing the classifier to the extension's frontend.",
    ],
    challenges: [
      "Handling inconsistent review markup across two different e-commerce sites.",
      "Keeping classification accurate on short, informal, mixed-language review text.",
    ],
    results: [
      "Working extension that scrapes, classifies, and displays sentiment without leaving the product page.",
    ],
    githubUrl: "https://github.com/ravix2001/model_minor_project",
    liveUrl: "https://addons.mozilla.org/en-US/firefox/addon/product-review-insight",
  },
];
