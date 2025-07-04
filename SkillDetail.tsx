
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Palette, Gamepad2, Box, ExternalLink, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import RippleButton from '../components/RippleButton';
import { Button } from '../components/ui/button';

const SkillDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Skill data mapping
  const skillsData = {
    'ar-development': {
      title: 'AR Development',
      icon: <Code size={32} className="text-primary" />,
      headerImage: 'https://images.unsplash.com/photo-1633209931146-84c485eb4770',
      description: 'Specialized in developing augmented reality applications that seamlessly blend digital content with the real world. Creating interactive experiences that enhance how users perceive and interact with their environment.',
      expertise: ['Vuforia', 'ARCore', 'Unity AR'],
      projects: [
        {
          title: 'AR Shopping Experience',
          description: 'An augmented reality app for visualizing furniture in your space before purchasing.',
          image: 'https://images.unsplash.com/photo-1633209931146-84c485eb4770'
        },
        {
          title: 'AR Navigation System',
          description: 'An AR wayfinding solution for large indoor spaces like museums and malls.',
          image: 'https://images.unsplash.com/photo-1550036731-1f9cd1c126d1'
        }
      ]
    },
    'game-development': {
      title: 'Game Development',
      icon: <Gamepad2 size={32} className="text-primary" />,
      headerImage: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37',
      description: 'Creating engaging and immersive game experiences across mobile, desktop, and web platforms. Specializing in mechanics design, game physics, and interactive storytelling to craft memorable player experiences.',
      expertise: ['Unity3D', 'Unity 2D', 'C#', 'Game Design', 'Level Design', 'Game Physics'],
      projects: [
        {
          title: 'Eco Adventure Game',
          description: 'A mobile game teaching environmental awareness through interactive gameplay.',
          image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37'
        },
        {
          title: 'Tower Defense Game',
          description: 'A strategic tower defense game with unique mechanics and vibrant visuals.',
          image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e'
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      icon: <Palette size={32} className="text-primary" />,
      headerImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      description: 'Crafting intuitive and beautiful user interfaces with a focus on the overall user experience. Creating designs that are not only visually appealing but also functional and user-friendly.',
      expertise: ['Figma', 'Interface Design', 'Prototyping', 'User Testing'],
      projects: [
        {
          title: 'Wellness App UI',
          description: 'A clean, intuitive interface design for a mental wellness application.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
        },
        {
          title: 'E-commerce Platform Redesign',
          description: 'Complete UX overhaul for an online shopping platform to improve conversion rates.',
          image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2'
        }
      ]
    },
    '3d-modeling': {
      title: '3D Modeling',
      icon: <Box size={32} className="text-primary" />,
      headerImage: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3',
      description: 'Creating detailed three-dimensional digital models for various applications including games, AR/VR experiences, product visualization, and architectural renderings.',
      expertise: ['Blender', 'Character Modeling', 'Environmental Modeling'],
      projects: [
        {
          title: 'Sci-Fi Character Models',
          description: 'A collection of detailed character models for a futuristic game setting.',
          image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3'
        },
        {
          title: 'Architectural Visualization',
          description: 'Photorealistic 3D models of architectural spaces for client presentations.',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
        }
      ]
    }
  };
  
  const currentSkill = skillsData[slug as keyof typeof skillsData];
  
  if (!currentSkill) {
    return <div className="pt-24 min-h-screen container">Skill not found</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-4">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="flex items-center gap-2 hover:bg-primary/10"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </Button>
      </div>
      
      {/* Hero Section */}
      <section 
        className="py-16 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentSkill.headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block mb-4">
              <div className="p-4 rounded-full bg-primary/20 inline-flex">
                {currentSkill.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{currentSkill.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentSkill.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Areas of Expertise" 
            subtitle={`Specialized knowledge and tools in ${currentSkill.title}`}
            align="center"
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto">
            {currentSkill.expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass text-center px-6 py-3 rounded-lg"
              >
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Related Projects" 
            subtitle={`Selected work showcasing ${currentSkill.title} expertise`}
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {currentSkill.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden h-full">
                  <div 
                    className="w-full h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RippleButton className="bg-primary/80 text-primary-foreground px-4 py-2 rounded-lg text-sm">
                      <span className="flex items-center">
                        View Project <ExternalLink size={14} className="ml-1" />
                      </span>
                    </RippleButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDetail;
