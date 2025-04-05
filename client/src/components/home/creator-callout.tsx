import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CreatorCallout = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="font-[Fredoka_One] text-3xl md:text-4xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Share Your Story?
        </motion.h2>
        
        <motion.p 
          className="max-w-2xl mx-auto text-lg mb-8 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join thousands of creators already publishing on ArtFlux. Our platform provides the tools, audience, and opportunity to bring your creative vision to life.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors">
            Start Creating
          </Button>
          <Button variant="outline" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorCallout;
