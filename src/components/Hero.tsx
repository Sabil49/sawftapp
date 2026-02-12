import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-primary/20 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-accent/20 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                Available for new projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Mobile Apps</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left"
                />
              </span>
              <br />
              <span className="text-muted-foreground">That Users Love</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              From concept to App Store — sawftapp designs and develops beautiful,
              high-performance mobile applications that drive results.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary group">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary group">
                <Play className="mr-2 w-4 h-4" />
                Book a Call
              </a>
            </div>
          </motion.div>

          {/* RIGHT PHONES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-[90px] rounded-full scale-75" />

              {/* MAIN PHONE */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 mx-auto w-56"
              >
                <div className="rounded-[3rem] p-1 bg-gradient-to-b from-muted/80 to-muted/40 shadow-2xl shadow-primary/20">
                  <div className="rounded-[2.8rem] bg-secondary overflow-hidden">
                    <div className="aspect-[9/19] relative">
                      <div className="absolute top-0 left-0 right-0 h-7 bg-secondary/80 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="w-20 h-4 bg-background rounded-full" />
                      </div>

                      <div className="w-full h-full bg-gradient-to-br from-[#2b2f55] via-[#1b1e3c] to-[#12142a] flex flex-col items-center justify-center p-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                          <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-white">sawftapp</div>
                          <div className="text-xs text-muted-foreground">
                            Premium Apps
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* LEFT PHONE — JustSecurity */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -left-8 top-20 w-40 opacity-70"
              >
                <div className="rounded-[2.4rem] p-0.5 bg-gradient-to-b from-[#1f4f55] to-[#0b2f34]">
                  <div className="rounded-[2.3rem] aspect-[9/19] bg-gradient-to-br from-[#173f44] to-[#0a2428] flex flex-col items-center justify-center">
                    <div className="text-3xl mb-2">🛡️</div>
                    <div className="text-xs text-white/80">JustSecurity</div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT PHONE — MYZO (FIXED) */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-8 top-24 w-40 opacity-70"
              >
                <div className="rounded-[2.4rem] p-0.5 bg-gradient-to-b from-[#4a1f3d] to-[#1c0b18]">
                  <div className="rounded-[2.3rem] aspect-[9/19] bg-gradient-to-br from-[#3b1730] to-[#140810] flex flex-col items-center justify-center">
                    <div className="text-3xl mb-2">👜</div>
                    <div className="text-xs text-white/80">Myzo</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
