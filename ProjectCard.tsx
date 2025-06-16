
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const ProjectCard = ({ title, description, image, category, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate transform based on mouse position relative to card center
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize coordinates between -15 and 15 degrees
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;
    
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };
  
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
    setIsHovered(false);
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="relative h-[350px] overflow-hidden rounded-xl glow preserve-3d"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-out"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-500">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm">
            {category}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        {/* Button */}
        <Link 
          to={link} 
          className="relative inline-flex items-center gap-2 overflow-hidden w-fit py-2 px-4 rounded-lg bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-colors duration-300"
        >
          <span>View Project</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          
          {/* Ripple effect on hover */}
          {isHovered && (
            <motion.span
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-primary/30 rounded-lg"
              style={{ originX: 0.5, originY: 0.5 }}
            />
          )}
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
