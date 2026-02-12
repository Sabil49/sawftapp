import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="relative">
      {/* Section header */}
      <div className="section-container py-4 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production apps that solve real problems for real users. Each project represents 
            a unique challenge and a tailored solution.
          </p>
        </motion.div>
      </div>

      {/* Scrolling projects */}
      <div ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ProjectSectionProps {
  project: typeof projects[0];
  index: number;
}

const ProjectSection = ({ project, index }: ProjectSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen sticky top-0 flex items-center overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      {/* Background gradient for each project */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        index === 0 ? "from-emerald-500/5 via-background to-teal-500/5" :
        index === 1 ? "from-violet-500/5 via-background to-purple-500/5" :
        "from-rose-500/5 via-background to-pink-500/5"
      }`} />

      <motion.div 
        style={{ opacity, y, scale }}
        className="section-container relative z-10 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Case Study Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                <span className="text-xs uppercase tracking-wider">Case Study</span>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {project.name}
              </h3>
              
              <p className="text-xl text-primary mb-6">
                {project.tagline}
              </p>
              
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="space-y-6 mb-8">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-sm uppercase tracking-wider text-destructive mb-2 font-semibold">The Problem</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-sm uppercase tracking-wider text-primary mb-2 font-semibold">The Solution</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {project.features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.results.slice(0, 2).map((result, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">
                    {result}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`#${project.id}`}
                  className="btn-primary text-sm py-3 px-6"
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <button className="btn-secondary text-sm py-3 px-6">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div 
              style={{ y: phoneY, rotate: phoneRotate }}
              className="relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-30 blur-[80px] rounded-full scale-150`} />
              
              {/* Phone frame */}
              <div className="relative w-64 sm:w-72 lg:w-80">
                <div className="rounded-[3rem] p-1 bg-gradient-to-b from-muted/80 to-muted/40 shadow-2xl">
                  <div className="rounded-[2.8rem] bg-secondary overflow-hidden">
                    {/* Status bar */}
                    <div className="h-8 bg-secondary/80 flex items-center justify-center">
                      <div className="w-20 h-5 bg-background rounded-full" />
                    </div>
                    {/* Screen content */}
                    <div className="aspect-[9/18] relative">
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="text-7xl mb-6">
                          {project.id === "justsecurity" && "🛡️"}
                          {project.id === "substracker" && "📊"}
                          {project.id === "myzo" && "👜"}
                        </div>
                        <div className="text-2xl font-bold mb-2">{project.name}</div>
                        <div className="text-sm text-muted-foreground text-center">{project.tagline}</div>
                        
                        {/* Mock UI elements */}
                        <div className="mt-8 w-full space-y-3">
                          <div className="h-3 bg-foreground/10 rounded-full w-full" />
                          <div className="h-3 bg-foreground/10 rounded-full w-3/4" />
                          <div className="h-3 bg-foreground/10 rounded-full w-5/6" />
                        </div>
                        
                        <div className={`mt-6 px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium`}>
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating tech badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-20 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-medium shadow-lg"
                >
                  {project.techStack[0]}
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-4 bottom-32 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-medium shadow-lg"
                >
                  {project.techStack[1]}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
