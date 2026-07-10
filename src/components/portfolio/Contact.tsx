import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 container mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-accent text-sm mb-4 tracking-wider">05. What's Next?</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
          I'm always excited to collaborate on innovative software, AI, and full-stack
          development projects. Whether you have an opportunity, a question, or simply
          want to connect, I'd love to hear from you.
        </p>

        <a
          href="mailto:shreyay13.02@gmail.com?subject=Portfolio%20Inquiry"
          className="inline-flex h-14 items-center justify-center rounded-sm border border-border bg-transparent px-8 text-sm font-mono tracking-wider text-foreground transition-all hover:bg-accent/10 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-3"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}