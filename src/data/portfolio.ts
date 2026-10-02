export const site = {
  cursorEffect: "none",
  name: "Adnan Rizvi",
  title: "Software Engineer | AI / Backend / Data",
  headline: "Software engineer building backend systems and intelligent AI applications.",
  summary:
    "Python and FastAPI services, Generative AI workflows, and data and ML pipelines, built to run in production.",
  email: "adnanrizvi20001@gmail.com",
  phone: "7061150063",
  github: "https://github.com/Adnanrizvi0242?tab=repositories",
  linkedin: "https://www.linkedin.com/in/adnan20001",
  resume: "/Adnan_Rizvi_Resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  about: [
    "I'm a computer science graduate from Vellore Institute of Technology (B.Tech, CGPA 8.59) who works across backend engineering, machine learning and Generative AI.",
    "Right now I'm a Software Engineer (Trainee) at PeopleStrong, where I build scalable Python and FastAPI services that deliver ML and GenAI capabilities. I work alongside data scientists to put predictive and generative models into production, design RESTful AI services, and build orchestration workflows with Langflow.",
    "Before that I was a Data Science Intern at UTILIZED, building end-to-end ML pipelines (preprocessing, feature engineering, training and evaluation) with scikit-learn, TensorFlow and Keras, and writing SQL to turn raw data into reporting. At Tata Steel I analysed supply chain workflows with SQL and redesigned a vehicle check-in system, cutting entry time by 30%.",
    "Outside of work I build projects that go beyond demos: a RAG system that answers questions from PDFs using LangChain, Gemini and Pinecone, an MCP server that routes LLM tool calls deterministically, and a CNN-based crime scene image classifier served through Flask.",
    "I also co-authored Chapter 7 of a Taylor & Francis (CRC Press) book on augmented reality and sustainability, and hold certifications in AWS, Google Developers and data science.",
    "I care about clean architecture, dependable APIs, safe handling of dependencies and licences, and systems that behave predictably in production.",
  ],
};

export type Job = { company: string; role: string; dates: string; points: string[]; tech: string[]; metrics?: { value: string; label: string }[] };
export const experience: Job[] = [
  { company: "PeopleStrong (Goldman Sachs)", role: "Software Engineer (Trainee)", dates: "12/2025 – 04/2026",
    points: [
      "Built scalable Python–FastAPI services delivering ML and GenAI capabilities.",
      "Integrated predictive and generative models with production-ready systems alongside data scientists.",
      "Designed RESTful AI services and orchestration workflows using Langflow.",
      "Improved the client-side experience through optimized request–response handling.",
      "Removed GPL/LGPL licence risk by migrating dependencies to MIT/MPL/Apache-compliant ones using Snyk.",
      "Kept the codebase reliable, maintainable and scalable through clean architecture and engineering standards.",
    ], tech: ["Python", "FastAPI", "Langflow", "REST APIs", "Snyk"] },
  { company: "UTILIZED", role: "Data Science Intern", dates: "04/2025 – 11/2025",
    points: [
      "Built end-to-end ML pipelines: preprocessing, feature engineering, training, evaluation and performance optimization.",
      "Developed deep learning models in TensorFlow and Keras for classification and predictive analytics, experimenting with architectures and hyperparameters.",
      "Ran EDA with Pandas, NumPy and Matplotlib to find trends and prepare clean datasets.",
      "Wrote SQL for extraction, transformation and analysis that supported business reporting.",
    ], tech: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "SQL"] },
  { company: "Tata Steel Ltd.", role: "Data Engineer Intern (Vocational Training)", dates: "08/2023 – 09/2023",
    points: [
      "Worked in the Transformation Department on Integrated Supply Chain Management, analyzing operational workflows.",
      "Designed and enhanced a vehicle check-in system.",
      "Used SQL to find bottlenecks in operational data.",
      "Supported backend integration with cross-functional teams and produced operational reports.",
    ], tech: ["SQL"],
    metrics: [{ value: "30%", label: "reduction in entry time" }, { value: "15%", label: "improvement in check-in workflow efficiency" }] },
];

export type Project = { slug: string; repo: string; title: string; tagline: string; overview: string; implementation: string[]; tech: string[]; pipeline: string[]; pipelineNote: string; results?: { value: string; label: string }[] };
export const projects: Project[] = [
  { slug: "mcp-orchestration-langflow", repo: "https://github.com/Adnanrizvi0242/mcp-orchestration", title: "MCP Orchestration Framework with Langflow", tagline: "LLM tool use with deterministic routing instead of free-form generation.",
    overview: "A custom MCP server that orchestrates how an LLM calls structured tools through Langflow. Built at PeopleStrong.",
    implementation: [
      "Built a custom MCP server to orchestrate LLM tool interactions using Langflow, enabling deterministic routing of structured tools.",
      "Designed a modular Python orchestration pipeline integrating financial calculators (SI, CI, EMI) and external Weather APIs.",
      "Implemented secure AST-based math evaluation so user-generated expressions run safely.",
      "Demonstrated LLM-tool workflows for reliable real-world tasks.",
    ],
    tech: ["Python", "Langflow", "MCP", "FastAPI", "REST APIs", "AST Parsing", "Tool Orchestration"],
    pipeline: ["LLM", "Router", "Tools", "Response"], pipelineNote: "Tools: financial calculators (SI, CI, EMI) and a Weather API." },
  { slug: "ai-rag-pdf-qa", repo: "https://github.com/Adnanrizvi0242/RAG_MODEL", title: "AI RAG System: Semantic PDF Question Answering", tagline: "Ask questions of a PDF and get answers grounded in its content.",
    overview: "An end-to-end retrieval-augmented generation system that queries PDF documents and produces context-aware answers.",
    implementation: [
      "Implemented document chunking and semantic embeddings with LangChain, storing vectors in Pinecone for similarity search.",
      "Integrated the Gemini LLM to generate responses grounded in retrieved document context.",
      "Developed a query rewriting pipeline to improve retrieval accuracy and answer relevance.",
    ],
    tech: ["Python", "LangChain", "Gemini API", "Pinecone", "Vector Search", "RAG", "Semantic Search", "Prompt Engineering"],
    pipeline: ["PDF", "Chunking", "Embeddings", "Vector search", "Retrieved context", "Gemini", "Answer"], pipelineNote: "Query rewriting runs before retrieval." },
  { slug: "crime-classification-cnn", repo: "https://github.com/smartinternz02/SI-GuidedProject-603058-1697636037", title: "Crime Classification using AI with Deep Learning", tagline: "A CNN that classifies crime scene images, served through a web app.",
    overview: "A CNN-based model that classifies crime scene images, with an interactive web application for uploads and predictions.",
    implementation: [
      "Developed a CNN-based model to classify crime scene images.",
      "Built the end-to-end pipeline (preprocessing, training, evaluation) in TensorFlow.",
      "Built a Flask, HTML, CSS and JavaScript app for image uploads and predictions.",
    ],
    tech: ["TensorFlow", "CNN", "Flask", "HTML", "CSS", "JavaScript"],
    pipeline: ["Image upload", "Preprocessing", "CNN", "Prediction"], pipelineNote: "Served through a Flask web app.",
    results: [{ value: "84%", label: "accuracy" }, { value: "50%", label: "reduction in misclassification" }] },
];

export const skills: Record<string, string[]> = {
  Programming: ["Python", "Java"],
  "AI / Machine Learning": ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Generative AI", "RAG", "LangChain", "Langflow", "MCP Server", "CNN", "NLP", "TensorFlow", "Scikit-learn"],
  "Backend & APIs": ["Flask", "FastAPI", "RESTful APIs", "Postman", "Redis"],
  "Data & Analytics": ["SQL", "Tableau", "Power BI", "Excel"],
  Web: ["HTML", "CSS", "JavaScript", "Scrapy"],
  "Cloud & Tools": ["AWS", "Git", "GitHub", "Snyk"],
};

export const publication = {
  title: "Augmented Reality and Sustainability: Goals and Challenges",
  role: "Author of Chapter 7", publisher: "Taylor & Francis (CRC Press)", date: "12/2025",
  summary: "A chapter on emerging technologies, practical applications and long-term challenges in building sustainable digital ecosystems, written as part of an international academic publication.",
  link: "https://www.taylorfrancis.com/books/edit/10.1201/9781003584438/augmented-reality-sustainability-sonal-trivedi-vishal-jain-balamurugan-balusamy-subhendu-kumar-pani-danish-ather",
};

export const education = {
  school: "Vellore Institute of Technology", degree: "Bachelor of Technology in Computer Science", dates: "07/2021 – 07/2025", cgpa: "8.59",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Object-Oriented Programming", "Computer Networks", "Design & Analysis of Algorithms", "Data Science"],
  schooling: ["St. Mary's English High School, Jamshedpur: Class XII, 83% (2019–2020)", "St. Mary's English High School, Jamshedpur: Class X, 89% (2017–2018)"],
};

// Add `url` to a certification once you have the link.
export const certifications: { name: string; detail: string; url?: string }[] = [
  { name: "Google Developers", detail: "Applied AI/ML and real-world problem solving.", url: "https://drive.google.com/file/d/1dWoApEY0evnFyJ08S-03aAUjZT19nmEv/view?ths=true" },
  { name: "AWS Certified Solutions Architect", detail: "Designing scalable, secure, distributed systems on AWS.", url: "https://drive.google.com/file/d/1mRTbE6Mn04MphRFeUE0B7OiNJ2X6VmBZ/view?ths=true" },
  { name: "Data Science, AI & Machine Learning (Skillians)", detail: "Data science methodologies, AI concepts and ML techniques.", url: "https://drive.google.com/file/d/1d1cUPIM-VNr1LZe3g4K7zr89pig7MdFo/view" },
  { name: "The Ultimate Job Ready Data Science Course (CodeWithHarry)", detail: "Python, SQL, Pandas, NumPy, Matplotlib, scikit-learn, TensorFlow, EDA, feature engineering." },
];
