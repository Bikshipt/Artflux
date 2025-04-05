import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ParallaxElementProps {
  depth?: number;
  className?: string;
  children?: React.ReactNode;
}

const ParallaxElement = ({ depth = 0.1, className = "", children }: ParallaxElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      x.set(mouseX * depth * 100);
      y.set(mouseY * depth * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [depth, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
