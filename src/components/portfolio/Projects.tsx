import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github: string;
  external?: string | null;
  featured: boolean;
  image: string;
  gradient?: string;
  pattern?: string;
}

const projects: Project[] = [
  {
    title: "AutoQA",
    subtitle: "Agentic API Security Testing Framework",
    description:
      "Built an autonomous security testing platform that leverages AI agents to identify API vulnerabilities and source-code security risks. By combining intelligent planning, adversarial testing, and LLM-powered analysis, the system automates penetration testing workflows and significantly reduces manual security assessment effort.",
    technologies: ["LangChain", "LangGraph", "Python", "FastAPI", "Gemini API", "Streamlit"],
    github:
      "https://github.com/Nikunja0611/AutoQA-Autonomous-API-Security-Tester",
    external: null,
    featured: true,
    image:"/images/autoqa.jpeg",
  },
  {
    title: "CrowdFundX",
    subtitle: "Blockchain Crowdfunding Platform",
    description:
      "Developed a decentralized crowdfunding platform that enables secure, transparent fundraising through Ethereum smart contracts. The platform removes reliance on centralized intermediaries while providing wallet-based authentication, immutable transaction records, and verified campaign management. and on-chain voting eliminate intermediary risk, giving contributors verifiable guarantees that capital is only released once project commitments are actually met.",
    technologies: ["Solidity", "Ethereum", "Hardhat", "React", "Node.js", "MongoDB", "Ethers.js"],
    github: "https://github.com/Shreyadavvvv/Crowd-Funding",
    external: null,
    featured: true,
    image:"/images/crowdfund.jpg"
  },
  {
    title: "DigiKisan",
    subtitle: "Smart Farming Platform",
    description:
      "Designed an intelligent agriculture platform that analyzes satellite imagery to evaluate crop and soil health. By integrating geospatial analysis, NDVI processing, and weather intelligence, the platform delivers actionable insights that support data-driven farming decisions.",
    technologies: ["Python", "Google Earth Engine", "OpenWeatherMap API", "Image Processing", "NDVI"],
    github:
      "https://github.com/CMPN-CODECELL/Syrus2025_OpenInnovation_CodeYodha",
    external: null,
    featured: true,
    image:"/images/digikisan.jpeg"
  },
  {
    title: "DevOnboard AI",
    subtitle: "Conversational Engineering Onboarding Assistant",
    description:
      "Built an AI-powered onboarding assistant that personalizes developer onboarding by generating role-specific tasks, validating GitHub activity, and answering technical questions using Retrieval-Augmented Generation. The platform streamlines onboarding while reducing mentor dependency and improving developer productivity.",
    technologies: ["LangChain", "RAG", "GitHub API", "LLMs", "Python"],
    github: "https://github.com/Shreyadavvvv/Dev",
    external: null,
    featured: false,
    image:"/images/developer-onboarding.png"
  },
  {
    title: "CrediSense",
    subtitle: "Real-Time Financial Fraud Detection Engine",
    description:
      "Engineered a secure transaction analysis system that extracts and categorizes financial information from SMS messages in real time. Built for a national hackathon, the solution emphasizes privacy, efficient data processing, and intelligent transaction monitoring for enhanced financial awareness.",
    technologies: ["Firebase", "Regex", "JavaScript", "Backend Development"],
    github: "https://github.com/Nikunja0611/CrediSense",
    external: null,
    featured: false,
    image:"/images/credisense.jpeg"
  },
  {
    title: "Spotify Data Analysis",
    subtitle: "Exploratory Analysis of Streaming Listening Patterns",
    description:
      "Performed large-scale analytical exploration of Spotify streaming data using advanced SQL techniques to uncover trends in artist performance, listener engagement, and album popularity. Optimized complex queries to improve execution efficiency while generating meaningful business insights from real-world datasets.",
    technologies: ["SQL • PostgreSQL", "Data Analysis"],
    github: "#",
    external: null,
    featured: false,
    image:"/images/spotify.png.webp"
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const moreProjects = projects.filter((p) => !p.featured);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasExternal = Boolean(project.external);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-3/5 aspect-video rounded-sm border border-border relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-6 left-6 font-mono text-xs text-accent/40 tracking-widest uppercase">
          {project.title.split(" ")[0]}
        </div>
      </div>

      <div
        className={`w-full md:w-2/5 flex flex-col ${
          index % 2 === 1
            ? "md:items-end md:text-right"
            : "items-start text-left"
        }`}
      >
        <p className="font-mono text-accent text-xs mb-2 tracking-wider">
          {project.subtitle}
        </p>
        <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
          {project.title}
        </h3>

        <div className="bg-card border border-border p-6 rounded-sm mb-6 z-20 relative shadow-lg">
          <p className="text-muted-foreground leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        <ul
          className={`flex flex-wrap gap-4 font-mono text-xs text-muted-foreground mb-6 ${
            index % 2 === 1 ? "justify-end" : "justify-start"
          }`}
        >
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="flex gap-4 items-center z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          {hasExternal && (
            <a
              href={project.external as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="External Link"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 container mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl text-foreground font-medium tracking-tight">
            03. Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs"></div>
        </div>

        <motion.div layout className="space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                key="more-projects"
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-24 pt-24">
                  {moreProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="flex justify-center mt-24">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="group flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors border border-border hover:border-accent/40 rounded-sm px-6 py-3"
          >
            {showMore ? "Show Fewer Projects" : "Explore More Projects"}
            <motion.span
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
