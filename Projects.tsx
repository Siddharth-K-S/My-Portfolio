
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

// These would be populated with real data and images
const projectsData = [
  {
    id: 1,
    title: 'AR Shopping Experience',
    description: 'An augmented reality app for visualizing furniture in your space before purchasing.',
    image: 'https://images.unsplash.com/photo-1633209931146-84c485eb4770',
    category: 'AR Development',
    link: '/projects/ar-development'
  },
  {
    id: 2,
    title: 'Eco Adventure Game',
    description: 'A mobile game teaching environmental awareness through interactive gameplay.',
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37',
    category: 'Game Development',
    link: '/projects/game-development'
  },
  {
    id: 3,
    title: 'Wellness App UI',
    description: 'A clean, intuitive interface design for a mental wellness application.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    category: 'UI/UX Design',
    link: '/projects/ui-ux-design'
  },
  {
    id: 4,
    title: 'Sci-Fi Character Models',
    description: 'A collection of detailed character models for a futuristic game setting.',
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3',
    category: '3D Modeling',
    link: '/projects/3d-modeling'
  },
  {
    id: 5,
    title: 'AR Navigation System',
    description: 'An AR wayfinding solution for large indoor spaces like museums and malls.',
    image: 'https://images.unsplash.com/photo-1550036731-1f9cd1c126d1',
    category: 'AR Development',
    link: '/projects/ar-development'
  },
  {
    id: 6,
    title: 'Tower Defense Game',
    description: 'A strategic tower defense game with unique mechanics and vibrant visuals.',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e',
    category: 'Game Development',
    link: '/projects/game-development'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AR Development', 'Game Development', 'UI/UX Design', '3D Modeling'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my work across various disciplines and technologies." 
          align="center"
        />
        
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  link={project.link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
