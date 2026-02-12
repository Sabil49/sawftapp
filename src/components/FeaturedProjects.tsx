import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32 relative">
      <div className="hero-glow top-1/3 right-0 opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production apps that solve real problems for real users. Each project represents 
            a unique challenge and a tailored solution.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${project.color} text-white`}>
                  Mobile App
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  {project.name}
                </h3>
                
                <p className="text-xl text-primary mb-4">
                  {project.tagline}
                </p>
                
                <p className="text-muted-foreground mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`#${project.id}`}
                    className="btn-primary text-sm py-3 px-6"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <button className="btn-secondary text-sm py-3 px-6">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>

              {/* Phone mockup */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative mx-auto w-64 sm:w-80"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 blur-3xl rounded-full scale-150`} />
                  
                  <div className="relative glass-card p-3 rounded-[3rem]">
                    <div className="bg-secondary rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20 flex items-center justify-center`}>
                        <div className="text-center p-6">
                          <div className="text-6xl mb-4">
                            {project.id === "justsecurity" && "🛡️"}
                            {project.id === "substracker" && "📊"}
                            {project.id === "myzo" && "👜"}
                          </div>
                          <div className="text-lg font-semibold">{project.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
