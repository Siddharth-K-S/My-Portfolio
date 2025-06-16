import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import RippleButton from '../components/RippleButton';

const Resume = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle 
          title="Resume" 
          subtitle="Download my resume or view my experience and skills online." 
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
<a
  href="/Siddharth Resume.pdf" // Updated path to point to the public folder
  download="Siddharth Resume.pdf"
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center"
>
  <Download size={18} className="mr-2" />
  Download Resume
</a>



        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-lg backdrop-blur-sm border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Education</h2>
            <div className="space-y-6 mb-8">
              <motion.div custom={1} variants={fadeInUpVariant}>
                <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground">KCG College of Technology, 2023-2027</p>
                <p className="mt-2">Focus on Game Development and Interactive Media</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-lg backdrop-blur-sm border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Experience</h2>
            <div className="space-y-6 mb-8">
              <motion.div custom={1} variants={fadeInUpVariant}>
                <h3 className="text-xl font-semibold flex items-center">
                  Game Developer Intern
                  <a href="#" className="ml-2 text-primary opacity-70 hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </a>
                </h3>
                <p className="text-muted-foreground">Vanara Games, 2025-Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Developed gameplay mechanics using Unity</li>
                  <li>Designed and implemented 3D models and animations</li>
                  <li>Optimized game performance for various platforms</li>
                </ul>
              </motion.div>
              
              <motion.div custom={2} variants={fadeInUpVariant}>
                <h3 className="text-xl font-semibold flex items-center">
                Game Developer (Freelance)
                  <a href="#" className="ml-2 text-primary opacity-70 hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </a>
                </h3>
                <p className="text-muted-foreground">Various Clients, 2023-Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Developed gameplay systems for mobile and console games</li>
                  <li>Created visual effects and shader systems</li>
                  <li>Implemented UI/UX systems for multiple titles</li>
                </ul>
              </motion.div>
              
              <motion.div custom={3} variants={fadeInUpVariant}>
                <h3 className="text-xl font-semibold">3D Artist & UI Designer (Freelance)</h3>
                <p className="text-muted-foreground">Various Clients, 2024-Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Created 3D models and environments for indie game projects</li>
                  <li>Designed user interfaces for mobile applications</li>
                  <li>Developed interactive prototypes for client review</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-xl p-8 shadow-lg backdrop-blur-sm border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div custom={1} variants={fadeInUpVariant}>
                <h3 className="text-xl font-semibold mb-3">Technical</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Unity 2D & 3D</span>
                      <span>70%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Vuforia & ARCore</span>
                      <span>40%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>C#, C++, Python</span>
                      <span>35%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "35%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div custom={2} variants={fadeInUpVariant}>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Blender</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Adobe Illustrator, Canva</span>
                      <span>30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "30%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Figma (UI/UX Design)</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
