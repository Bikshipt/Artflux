import { motion } from "framer-motion";
import ParallaxElement from "@/components/parallax-element";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParallaxElement depth={0.1} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5" />
        <ParallaxElement depth={0.2} className="absolute top-40 right-20 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/5" />
        <ParallaxElement depth={0.15} className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-accent/10 dark:bg-accent/5" />
      </div>
      
      <div className="container mx-auto px-6 text-center">
        {/* Animated Logo */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-700 rounded-2xl transform -rotate-3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[Fredoka_One] text-5xl text-white">AF</span>
          </div>
        </div>
        
        {/* Tagline */}
        <motion.h1 
          className="font-[Fredoka_One] text-3xl md:text-5xl max-w-3xl mx-auto mb-6 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Create, Inspire, and Immerse in the Next-Gen Digital Universe
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg max-w-2xl mx-auto mb-10 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join a community of storytellers, artists, and creators building the future of digital storytelling. Collaborate, monetize, and share your work with the world.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            className="group relative px-8 py-7 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-lg focus:outline-none transition-all duration-300 hover:-translate-y-1"
          >
            Explore Now
            <motion.span 
              className="absolute -right-1 -top-1 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
