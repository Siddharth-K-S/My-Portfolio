@@ .. @@
 import { useState } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
+import { Loader2 } from 'lucide-react';
 import SectionTitle from '../components/SectionTitle';
 import ProjectCard from '../components/ProjectCard';
+import { useFirebaseProjects } from '../hooks/useFirebaseData';
 
-// These would be populated with real data and images
-const projectsData = [
-  {
-    id: 1,
-    title: 'AR Shopping Experience',
-    description: 'An augmented reality app for visualizing furniture in your space before purchasing.',
-    image: 'https://images.unsplash.com/photo-1633209931146-84c485eb4770',
-    category: 'AR Development',
-    link: '/projects/ar-development'
-  },
-  {
-    id: 2,
-    title: 'Eco Adventure Game',
-    description: 'A mobile game teaching environmental awareness through interactive gameplay.',
-    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37',
-    category: 'Game Development',
-    link: '/projects/game-development'
-  },
-  {
-    id: 3,
-    title: 'Wellness App UI',
-    description: 'A clean, intuitive interface design for a mental wellness application.',
-    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
-    category: 'UI/UX Design',
-    link: '/projects/ui-ux-design'
-  },
-  {
-    id: 4,
-    title: 'Sci-Fi Character Models',
-    description: 'A collection of detailed character models for a futuristic game setting.',
-    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3',
-    category: '3D Modeling',
-    link: '/projects/3d-modeling'
-  },
-  {
-    id: 5,
-    title: 'AR Navigation System',
-    description: 'An AR wayfinding solution for large indoor spaces like museums and malls.',
-    image: 'https://images.unsplash.com/photo-1550036731-1f9cd1c126d1',
-    category: 'AR Development',
-    link: '/projects/ar-development'
-  },
-  {
-    id: 6,
-    title: 'Tower Defense Game',
-    description: 'A strategic tower defense game with unique mechanics and vibrant visuals.',
-    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e',
-    category: 'Game Development',
-    link: '/projects/game-development'
-  }
-];
-
 const Projects = () => {
+  const { projects, loading, error } = useFirebaseProjects();
   const [filter, setFilter] = useState('All');
-  const categories = ['All', 'AR Development', 'Game Development', 'UI/UX Design', '3D Modeling'];
+  
+  // Get unique categories from projects
+  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
   
   const filteredProjects = filter === 'All' 
-    ? projectsData 
-    : projectsData.filter(project => project.category === filter);
+    ? projects 
+    : projects.filter(project => project.category === filter);
+
+  if (loading) {
+    return (
+      <div className="pt-24 min-h-screen bg-transparent">
+        <div className="container mx-auto px-4">
+          <div className="flex justify-center items-center min-h-[400px]">
+            <Loader2 className="h-8 w-8 animate-spin" />
+          </div>
+        </div>
+      </div>
+    );
+  }
+
+  if (error) {
+    return (
+      <div className="pt-24 min-h-screen bg-transparent">
+        <div className="container mx-auto px-4">
+          <div className="text-center text-red-500">
+            Error loading projects: {error}
+          </div>
+        </div>
+      </div>
+    );
+  }
 
   return (