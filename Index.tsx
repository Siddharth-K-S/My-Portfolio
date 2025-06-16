
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RippleButton from '../components/RippleButton';
import { ScrollArea } from '../components/ui/scroll-area';
import Skills from '../components/Skills';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section - transparent background to show particles */}
      <section className="min-h-screen flex flex-col justify-center bg-transparent">
        <div className="container mx-auto px-4 pt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-3xl text-gradient-primary"
          >
            Crafting Immersive Digital Experiences
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-lg"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              I'm Siddharth KS, specializing in AR development, game development, UI/UX, and 3D modeling.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <RippleButton 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </RippleButton>
              
              <Link to="/contact">
                <RippleButton className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium">
                  Get in Touch
                </RippleButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section - transparent background to show particles */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 5 years of experience in digital creation, I blend technology with design to create 
              immersive experiences that push the boundaries of what's possible.
            </p>
            <Link to="/about">
              <RippleButton className="bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm">
                Learn More
              </RippleButton>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <Skills />
      
      {/* Featured Projects Preview - transparent background to show particles */}
      <section id="projects" className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my work across AR, game development, UI/UX design, and 3D modeling.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-muted"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1633209931146-84c485eb4770)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">AR Retail Experience</h3>
                <p className="text-white/80 text-sm mb-3">Interactive AR solution for product visualization</p>
                <div className="flex items-center gap-2">
                  <RippleButton className="text-xs px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <span className="flex items-center">Case Study <ExternalLink size={12} className="ml-1" /></span>
                  </RippleButton>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-muted"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1586776977607-310e9c725c37)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">Mobile Game Interface</h3>
                <p className="text-white/80 text-sm mb-3">Intuitive UI design for mobile gameplay</p>
                <div className="flex items-center gap-2">
                  <RippleButton className="text-xs px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <span className="flex items-center">View Project <ExternalLink size={12} className="ml-1" /></span>
                  </RippleButton>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-muted"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1592155931584-901ac15763e3)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">3D Character Design</h3>
                <p className="text-white/80 text-sm mb-3">Stylized character models for indie game</p>
                <div className="flex items-center gap-2">
                  <RippleButton className="text-xs px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <span className="flex items-center">Gallery <ExternalLink size={12} className="ml-1" /></span>
                  </RippleButton>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <RippleButton className="bg-primary/80 hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm">
                View All Projects
              </RippleButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Me Section - transparent background to show particles */}
      <section id="contact" className="py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Contact Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or want to learn more about my work? I'd love to hear from you!
            </p>
            <Link to="/contact">
              <RippleButton className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm">
                Get in Touch
              </RippleButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50 hover:bg-primary/90 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Index;
