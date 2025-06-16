
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: number; // 0-100
  slug: string; // URL slug for the skill page
  image?: string; // Optional image URL
}

const SkillCard = ({ icon, title, description, level, slug, image }: SkillCardProps) => {
  return (
    <Link to={`/skills/${slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="p-6 rounded-xl glass card-hover cursor-pointer h-full"
      >
        {image && (
          <div 
            className="w-full h-40 mb-4 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-primary/20 text-primary-foreground mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default SkillCard;
