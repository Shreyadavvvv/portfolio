import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-border py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl font-medium tracking-tight text-foreground hover:text-accent transition-colors"
          aria-label="Back to top"
        >
          SY<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-xs font-mono tracking-wider transition-colors hover:text-accent",
                activeSection === item.id
                  ? "text-accent"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
          href="https://drive.google.com/drive/folders/17Quj1xSo9q7Amwfh_vkA6zDM4I41B2EK?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono tracking-wider border border-border hover:border-accent text-foreground hover:text-accent px-4 py-2 rounded-sm transition-all"
          >
          Resume
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="p-2 rounded-sm border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all"
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="p-2 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle mobile menu"
            className="p-2 flex flex-col gap-1.5"
          >
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all",
                menuOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all",
                menuOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-sm font-mono tracking-wider transition-colors hover:text-accent",
                activeSection === item.id
                  ? "text-accent"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/17Quj1xSo9q7Amwfh_vkA6zDM4I41B2EK?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-mono tracking-wider border border-border hover:border-accent text-foreground hover:text-accent px-4 py-2 rounded-sm transition-all text-center mt-2"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
