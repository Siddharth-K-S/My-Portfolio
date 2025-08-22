@@ .. @@
 import { useState } from 'react';
 import { motion } from 'framer-motion';
-import { Send, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
+import { Send, Github, Linkedin, Youtube, Instagram, Loader2 } from 'lucide-react';
 import { useToast } from '@/hooks/use-toast';
 import SectionTitle from '../components/SectionTitle';
 import RippleButton from '../components/RippleButton';
+import { useFirebaseProfile } from '../hooks/useFirebaseData';
 
 const Contact = () => {
   const { toast } = useToast();
+  const { profile, loading, error } = useFirebaseProfile();
   const [formData, setFormData] = useState({
     name: '',
     email: '',
@@ .. @@
     }, 1500);
   };
 
-  const socialLinks = [
-    { icon: <Github size={24} />, url: 'https://github.com/Siddharth-K-S', label: 'GitHub' },
-    { icon: <Linkedin size={24} />, url: 'https://in.linkedin.com/in/siddharth-k-s-302003301', label: 'LinkedIn' },
-    { icon: <Youtube size={24} />, url: 'http://www.youtube.com/@Siddharth-KS', label: 'Youtube' },
-    { icon: <Instagram size={24} />, url: '#', label: 'Instagram' }
-  ];
+  if (loading) {
+    return (
+      <div className="pt-24 min-h-screen">
+        <div className="container mx-auto px-4 max-w-5xl">
+          <div className="flex justify-center items-center min-h-[400px]">
+            <Loader2 className="h-8 w-8 animate-spin" />
+          </div>
+        </div>
+      </div>
+    );
+  }
+
+  const socialLinks = [
+    { icon: <Github size={24} />, url: profile?.socialLinks?.github || '#', label: 'GitHub' },
+    { icon: <Linkedin size={24} />, url: profile?.socialLinks?.linkedin || '#', label: 'LinkedIn' },
+    { icon: <Youtube size={24} />, url: profile?.socialLinks?.youtube || '#', label: 'Youtube' },
+    { icon: <Instagram size={24} />, url: profile?.socialLinks?.instagram || '#', label: 'Instagram' }
+  ];
 
   return (
@@ .. @@
                
                 <div>
                   <h4 className="text-lg font-semibold mb-1">Email</h4>
-                  <p className="text-muted-foreground">siddharth.ks1566@gmail.com</p>
+                  <p className="text-muted-foreground">{profile?.email || 'siddharth.ks1566@gmail.com'}</p>
                 </div>
                 
                 <div>
                   <h4 className="text-lg font-semibold mb-1">Based in</h4>
-                  <p className="text-muted-foreground">Chennai, India</p>
+                  <p className="text-muted-foreground">{profile?.location || 'Chennai, India'}</p>
                 </div>
               </div>
             </div>