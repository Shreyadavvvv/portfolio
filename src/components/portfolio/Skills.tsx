import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  LuCodeXml,
  LuLayoutPanelTop,
  LuServer,
  LuBrainCircuit,
  LuChartBar,
  LuDatabase,
  LuChevronDown,
} from 'react-icons/lu';
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiLangchain,
  SiLanggraph,
  SiGooglegemini,
  SiHuggingface,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbSql, TbBrandAzure, TbBrandVscode, TbBrandCss3, TbBrandOpenai } from 'react-icons/tb';

/**
 * Simple Icons (react-icons/si) doesn't ship Java, CSS3, OpenAI, Azure, or
 * VS Code — those marks were pulled from that set. Java comes from
 * react-icons/fa, the rest from react-icons/tb (Tabler). Category header
 * icons are Lucide, via react-icons/lu — no new dependency needed since
 * react-icons is already in the project.
 */

// ── Data ───────────────────────────────────────────────────────────────

type Skill = {
  name: string;
  icon: IconType;
  /** Omit for pure black/white wordmarks (GitHub, Express, Next.js) so
   *  they adapt to light & dark mode instead of clashing with a fixed hex. */
  color?: string;
};

type SkillCategory = {
  title: string;
  icon: IconType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: LuCodeXml,
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      //{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'SQL', icon: TbSql, color: '#4479A1' },
    ],
  },
  {
    title: 'Frontend',
    icon: LuLayoutPanelTop,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: TbBrandCss3, color: '#1572B6' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    title: 'Backend',
    icon: LuServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      //{ name: 'Azure Functions', icon: TbBrandAzure, color: '#0078D4' },
      //{ name: 'Azure', icon: TbBrandAzure, color: '#0078D4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      //{ name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub },
      //{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    title: 'AI',
    icon: LuBrainCircuit,
    skills: [
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'LangGraph', icon: SiLanggraph, color: '#1C3C3C' },
      { name: 'OpenAI API', icon: TbBrandOpenai, color: '#000000' },
      { name: 'Gemini API', icon: SiGooglegemini, color: '#8E75B2' },
      //{ name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
    ],
  },
  {
    title: 'Data Analysis',
    icon: LuChartBar,
    skills: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
    ],
  },
  {
    title: 'Databases',
    icon: LuDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      //{ name: 'Firebase Firestore', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
];

// ── Animation variants ───────────────────────────────────────────────────

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const chipListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025 } },
};

// ── Chip ─────────────────────────────────────────────────────────────────

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <motion.li variants={chipVariants} className="list-none">
      <div className="group flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-1.5 transition-colors duration-300 hover:border-accent/50 hover:bg-foreground/[0.04]">
        <Icon
          aria-hidden="true"
          style={skill.color ? { color: skill.color } : undefined}
          className={
            skill.color
              ? 'h-3.5 w-3.5 shrink-0 opacity-75 transition-opacity duration-300 group-hover:opacity-100'
              : 'h-3.5 w-3.5 shrink-0 text-muted-foreground/70 transition-colors duration-300 group-hover:text-foreground'
          }
        />
        <span className="font-mono text-[11px] tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
          {skill.name}
        </span>
      </div>
    </motion.li>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────

function CategoryCard({
  category,
  isOpen,
  onToggle,
}: {
  category: SkillCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const CategoryIcon = category.icon;
  const panelId = `skills-panel-${category.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <motion.div
      variants={cardVariants}
      layout
      className={`self-start rounded-2xl border bg-card/40 transition-colors duration-300 ${
        isOpen ? 'border-accent/40' : 'border-border hover:border-border/80 hover:bg-card/70'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 p-6 text-left"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
            isOpen ? 'border-accent/40 bg-accent/10' : 'border-border bg-foreground/[0.03]'
          }`}
        >
          <CategoryIcon
            aria-hidden="true"
            className={`h-[18px] w-[18px] transition-colors duration-300 ${
              isOpen ? 'text-accent' : 'text-muted-foreground'
            }`}
          />
        </span>

        <span className="flex-1">
          <span className="block font-serif text-lg text-foreground tracking-tight">
            {category.title}
          </span>
          <span className="block font-mono text-[11px] text-muted-foreground/50 tabular-nums">
            {String(category.skills.length).padStart(2, '0')} skills
          </span>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="shrink-0 text-muted-foreground"
        >
          <LuChevronDown aria-hidden="true" className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={chipListVariants}
              role="list"
              aria-label={`${category.title} skills`}
              className="flex flex-wrap gap-2 px-6 pb-6 pt-1"
            >
              {category.skills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-serif text-3xl text-foreground font-medium tracking-tight">
            02. Toolkit
          </h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs" />
        </div>
        <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
          The right tool matters, but knowing when and why to use it matters even more. 
          Here's the technology stack I rely on to build intelligent, scalable, and reliable software.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={gridVariants}
        className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category, index) => (
          <CategoryCard
            key={category.title}
            category={category}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
          />
        ))}
      </motion.div>
    </section>
  );
}