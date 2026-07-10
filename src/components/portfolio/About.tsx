import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-serif text-3xl text-foreground font-medium tracking-tight">01. About</h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs"></div>
        </div>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            I didn't start building software because I loved writing code - I started because I loved solving problems.
            That curiosity eventually led me into Artificial Intelligence, full-stack development, and building products that solve real-world challenges. From intelligent healthcare solutions to data-driven platforms, I enjoy creating software that balances functionality, performance, and thoughtful design.
          </p>
          <p>
            I believe the best applications aren't remembered for how complex they are, they're remembered for how effortlessly they solve a problem. 
            Every project is an opportunity to learn, refine my approach, and build something better than before
          </p>
          <p>
            I'm always exploring new technologies, embracing unfamiliar challenges, and looking for better ways to turn ideas into impactful products.
          </p>
        </div>
      </motion.div>
    </section>
  );
}