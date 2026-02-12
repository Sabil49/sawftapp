// src/components/CaseStudy.tsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface CaseStudyProps {
  project: Project;
  index: number;
}

const CaseStudy = ({ project, index }: CaseStudyProps) => {
  const ref = useRef(null);

  // Tighter mobile-friendly viewport detection
  const isInView = useInView(ref, {
    once: false,
    margin: "-20%",
    amount: 0.3, // ensures section is actually visible before showing background
  });

  return (
    <section
      id={project.id}
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background text — fades in/out reliably on scroll and HIDDEN on small screens */}
      <div
        className={`absolute inset-0 items-center justify-center pointer-events-none transition-opacity duration-300 hidden lg:flex ${
          isInView ? "opacity-10" : "opacity-0"
        }`}
      >
        <span className="text-[12rem] xl:text-[14rem] font-bold uppercase tracking-widest text-primary whitespace-nowrap select-none">
          {project.name}
        </span>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${project.color} text-white shadow-lg`}
            >
              Case Study
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {project.name}
            </h2>
            <p className="text-xl text-primary">{project.tagline}</p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left column */}
            <div className="space-y-10">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl bg-background border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-destructive">
                  The Problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl bg-background border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl bg-background border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="space-y-10">
              {/* Phone mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="relative mx-auto w-56 sm:w-64">
                  <div className="glass-card p-3 rounded-[3rem] bg-background border border-border/50">
                    <div className="bg-secondary rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.color} opacity-30 flex items-center justify-center`}
                      >
                        <div className="text-center">
                          <div className="text-5xl mb-2">
                            {project.id === "justsecurity" && "🛡️"}
                            {project.id === "substracker" && "📊"}
                            {project.id === "myzo" && "👜"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl bg-background border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl gradient-border bg-background border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <a href="#contact" className="btn-primary inline-flex">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
