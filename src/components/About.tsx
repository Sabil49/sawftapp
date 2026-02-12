import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const qualities = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Clean, maintainable code that scales. I obsess over architecture and performance."
    },
    {
      icon: Lightbulb,
      title: "Product Thinking",
      description: "I don't just build features — I solve problems and create value for users."
    },
    {
      icon: Users,
      title: "Collaborative Partner",
      description: "Clear communication, regular updates, and a genuine investment in your success."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="hero-glow right-0 top-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto w-64 sm:w-80 lg:w-96">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full scale-125" />
              
              <div className="relative glass-card p-6 rounded-3xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <div className="text-xl font-semibold">Mobile Developer</div>
                    <div className="text-muted-foreground">& Product Builder</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a mobile app developer with 3+ years of experience building production 
              applications. I specialize in React Native and Expo, creating cross-platform 
              apps that feel truly native.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Beyond code, I bring product sense — understanding user needs, market positioning, 
              and what makes an app succeed. I've shipped apps with hundreds of thousands of 
              downloads and helped startups go from idea to App Store.
            </p>

            <div className="space-y-6">
              {qualities.map((quality, index) => {
                const Icon = quality.icon;
                return (
                  <motion.div
                    key={quality.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{quality.title}</h3>
                      <p className="text-sm text-muted-foreground">{quality.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
