import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  Figma, 
  Code, 
  CheckCircle, 
  Rocket 
} from "lucide-react";
import { processSteps } from "@/data/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Figma,
  Code,
  CheckCircle,
  Rocket
};

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-4 lg:py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven process that transforms ideas into polished, production-ready applications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-20 items-center ${
                    index !== processSteps.length - 1 ? "lg:mb-20" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                    <div className={`glass-card p-8 rounded-2xl ${isEven ? "lg:ml-auto" : ""} max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          {Icon && <Icon className="w-6 h-6 text-white" />}
                        </div>
                        <div className="text-sm font-medium text-primary">
                          Step {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden lg:flex ${isEven ? "lg:order-2" : "lg:order-1"} justify-center`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                      className="w-4 h-4 rounded-full bg-primary glow"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
