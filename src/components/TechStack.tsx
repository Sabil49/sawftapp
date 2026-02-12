import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, 
  Zap, 
  Globe, 
  Flame, 
  Database, 
  Layers, 
  Palette, 
  Play 
} from "lucide-react";

const techItems = [
  { name: "React Native", icon: Smartphone, color: "from-cyan-500 to-blue-500" },
  { name: "Expo", icon: Zap, color: "from-indigo-500 to-purple-500" },
  { name: "Next.js", icon: Globe, color: "from-gray-600 to-gray-800" },
  { name: "Firebase", icon: Flame, color: "from-yellow-500 to-orange-500" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-indigo-600" },
  { name: "Prisma", icon: Layers, color: "from-teal-500 to-emerald-500" },
  { name: "Tailwind CSS", icon: Palette, color: "from-sky-400 to-cyan-500" },
  { name: "Framer Motion", icon: Play, color: "from-pink-500 to-rose-500" },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-1 lg:pt-2 pb-8 lg:pb-16 relative overflow-hidden">
      <div className="hero-glow left-1/4 top-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powered by <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I use cutting-edge technologies to build fast, scalable, and maintainable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 sm:p-8 rounded-2xl text-center group cursor-pointer"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">{tech.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
