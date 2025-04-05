import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="h-10 w-10 mr-2 relative"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg"
        animate={{ rotate: 3 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-700 rounded-lg"
        animate={{ rotate: -3 }}
      />
      <div className="absolute inset-0 flex items-center justify-center font-[Fredoka_One] text-white text-lg">
        AF
      </div>
    </motion.div>
  );
};

export default Logo;
