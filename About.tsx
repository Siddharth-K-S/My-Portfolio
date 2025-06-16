import { motion } from 'framer-motion';
import { Gamepad2, Layers, PenTool, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { Button } from "../components/ui/button";

const About = () => {
  const skills = [
    {
      title: 'AR Development',
      description: 'Creating immersive augmented reality experiences with ARCore, ARKit, and WebAR technologies.',
      icon: <Layers size={24} />,
      level: 90,
      slug: 'ar-development',
      image: 'https://images.unsplash.com/photo-1633209931146-84c485eb4770'
    },
    {
      title: 'Game Development',
      description: 'Developing interactive games with Unity and Unreal Engine with a focus on gameplay systems and mechanics.',
      icon: <Gamepad2 size={24} />,
      level: 85,
      slug: 'game-development',
      image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences with a focus on usability and aesthetics.',
      icon: <PenTool size={24} />,
      level: 80,
      slug: 'ui-ux-design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
    },
    {
      title: '3D Modeling',
      description: 'Creating detailed and optimized 3D models, textures, and animations for games and AR applications.',
      icon: <Box size={24} />,
      level: 75,
      slug: '3d-modeling',
      image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="I'm a multidisciplinary developer and designer focusing on creating immersive digital experiences." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in digital creation, I've developed a passion for building interactive and immersive experiences that merge technology with design.
              </p>
              <p>
                My background spans across AR development, game design, UI/UX, and 3D modeling, allowing me to approach projects from multiple perspectives and create cohesive experiences.
              </p>
              <p>
                I believe in pushing the boundaries of what's possible in digital spaces, constantly exploring new technologies and techniques to create memorable user experiences.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl overflow-hidden aspect-[4/3] bg-muted"
          >
            {/* Profile image placeholder */}
          </motion.div>
        </div>
        
        <SectionTitle title="Skills & Expertise" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              level={skill.level}
              slug={skill.slug}
              image={skill.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
