import { motion } from 'framer-motion';

const roles = [
  {
    company: "Raktapurak Charitable Foundation",
    title: "Full Stack App Developer",
    period: "Jan 2025 — Jun 2025",
    description:
      "Built a cross-platform application that streamlines blood donation and community welfare initiatives. Built secure authentication, real-time donor management, and scalable service workflows while preparing the platform for production deployment and long-term community impact."
  },
  {
    company: "Celeris Ventures LLP",
    title: "Technical Intern",
    period: "Dec 2025 — Mar 2026",
    description:
      "Contributed to AI-powered full-stack applications by integrating large language models into production workflows and developing secure backend services. Collaborated on scalable software architecture, API orchestration, and high-performance features within the Celeris Application Accelerator ecosystem."
  },
  {
    company: "VESIT",
    title: "Intern",
    period: "Dec 2025 — Jan 2026",
    description:
      "Designed and developed a mock interview platform to streamline technical interview preparation and evaluation. Built intuitive interfaces, implemented core application workflows, and collaborated closely with mentors to deliver a reliable platform that improved the mock interview experience for students."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl text-foreground font-medium tracking-tight">04. Experience</h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs"></div>
        </div>

        <div className="space-y-12 relative border-l border-border/50 ml-3 md:ml-4">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-3 h-3 bg-background border border-accent rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(var(--accent),0.2)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-medium text-foreground">{role.title}</h3>
                <span className="font-mono text-xs text-accent mt-1 md:mt-0 tracking-wider">{role.period}</span>
              </div>
              
              <h4 className="font-serif text-lg text-muted-foreground mb-4">{role.company}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}