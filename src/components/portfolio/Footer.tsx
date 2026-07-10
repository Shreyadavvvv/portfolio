import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a
            href="https://github.com/Shreyadavvvv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/shreya-yadav-b56779289"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="space-y-2 text-center">
          <p className="font-mono text-xs tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} Shreya Yadav. 
          </p>

          <p className="text-xs text-muted-foreground/70">
            All trademarks, logos, and images are the property of their respective owners.
          </p>
        </div>

      </div>
    </footer>
  );
}