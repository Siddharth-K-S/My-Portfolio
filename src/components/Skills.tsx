@@ .. @@
 import { motion } from 'framer-motion';
-import { Code, Palette, Gamepad2, Box } from 'lucide-react';
+import { Code, Palette, Gamepad2, Box, Loader2 } from 'lucide-react';
 import SkillCard from './SkillCard';
+import { useFirebaseSkills } from '../hooks/useFirebaseData';
+
+const getIconComponent = (iconName: string) => {
+  const icons = {
+    'Code': Code,
+    'Palette': Palette,
+    'Gamepad2': Gamepad2,
+    'Box': Box
+  };
+  const IconComponent = icons[iconName as keyof typeof icons] || Code;
+  return <IconComponent size={24} />;
+};
 
 const Skills = () => {
-  const skills = [
-    {
-      icon: <Code size={24} />,
-      title: 'AR Development',
-      description: 'Creating immersive augmented reality experiences that blend digital content with the real world.',
-      level: 85,
-      slug: 'ar-development',
-      image: 'https://images.unsplash.com/photo-1633209931146-84c485eb4770'
-    },
-    {
-      icon: <Gamepad2 size={24} />,
-      title: 'Game Development',
-      description: 'Building engaging and interactive games with compelling mechanics and visual elements.',
-      level: 78,
-      slug: 'game-development',
-      image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37'
-    },
-    {
-      icon: <Palette size={24} />,
-      title: 'UI/UX Design',
-      description: 'Crafting intuitive and beautiful user interfaces with a focus on the overall user experience.',
-      level: 90,
-      slug: 'ui-ux-design',
-      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
-    },
-    {
-      icon: <Box size={24} />,
-      title: '3D Modeling',
-      description: 'Creating detailed three-dimensional digital models for various applications and platforms.',
-      level: 75,
-      slug: '3d-modeling',
-      image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3'
-    }
-  ];
+  const { skills, loading, error } = useFirebaseSkills();
+
+  if (loading) {
+    return (
+      <section className="py-24 bg-transparent">
+        <div className="container mx-auto px-4">
+          <div className="flex justify-center items-center min-h-[200px]">
+            <Loader2 className="h-8 w-8 animate-spin" />
+          </div>
+        </div>
+      </section>
+    );
+  }
+
+  if (error) {
+    return (
+      <section className="py-24 bg-transparent">
+        <div className="container mx-auto px-4">
+          <div className="text-center text-red-500">
+            Error loading skills: {error}
+          </div>
+        </div>
+      </section>
+    );
+  }
 
   return (
@@ .. @@
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {skills.map((skill, index) => (
             <SkillCard
-              key={index}
-              icon={skill.icon}
+              key={skill.id}
+              icon={getIconComponent(skill.icon)}
               title={skill.title}
               description={skill.description}
               level={skill.level}
               slug={skill.slug}
               image={skill.image}
             />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Skills;