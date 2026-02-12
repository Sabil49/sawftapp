// src/components/Testimonials.tsx
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "Myzo Fashion",
    image: null,
    content: "sawftapp transformed our vision into a stunning e-commerce app. Sales increased 35% within the first quarter. Their attention to detail and understanding of luxury UX is unmatched.",
    rating: 5,
    projectName: "Myzo"
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Product Director",
    company: "SecureNet Labs",
    image: null,
    content: "The JustSecurity app exceeded all expectations. Battery-efficient, powerful, and users love the clean interface. sawftapp delivered enterprise-grade security with consumer-friendly UX.",
    rating: 5,
    projectName: "JustSecurity"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Co-founder",
    company: "Substracker Inc",
    image: null,
    content: "From concept to App Store feature in 4 months. sawftapp's process is seamless and their communication is excellent. Our users have saved over $2.5M in subscription costs.",
    rating: 5,
    projectName: "Substracker"
  },
  {
    id: 4,
    name: "David Park",
    role: "Head of Digital",
    company: "FinTech Solutions",
    image: null,
    content: "Professional, responsive, and incredibly talented. sawftapp understood our complex requirements and delivered a polished product that our customers love to use daily.",
    rating: 5,
    projectName: "Custom Project"
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Startup Founder",
    company: "HealthTrack",
    image: null,
    content: "Best investment we made for our startup. sawftapp's expertise in React Native allowed us to launch on both platforms simultaneously, saving us months of development time.",
    rating: 5,
    projectName: "Custom Project"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CTO",
    company: "LogiFlow",
    image: null,
    content: "The code quality is exceptional. Clean architecture, well-documented, and easy to maintain. sawftapp set us up for long-term success, not just a quick launch.",
    rating: 5,
    projectName: "Custom Project"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the founders and product leaders who trusted sawftapp to build their mobile applications.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
              
              {/* Project badge */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Project: <span className="text-primary font-medium">{testimonial.projectName}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "4.9★", label: "Average Rating" },
            { value: "50+", label: "Projects Delivered" },
            { value: "12", label: "Countries Served" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
