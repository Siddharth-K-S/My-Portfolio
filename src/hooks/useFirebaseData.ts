import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface FirebaseSkill {
  id: string;
  title: string;
  description: string;
  level: number;
  slug: string;
  image: string;
  icon: string;
  expertise: string[];
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface FirebaseProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

export interface FirebaseProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    youtube: string;
    instagram: string;
  };
}

export const useFirebaseSkills = () => {
  const [skills, setSkills] = useState<FirebaseSkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'skills'),
      (snapshot) => {
        const skillsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as FirebaseSkill[];
        setSkills(skillsData);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { skills, loading, error };
};

export const useFirebaseProjects = () => {
  const [projects, setProjects] = useState<FirebaseProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'projects'),
      (snapshot) => {
        const projectsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as FirebaseProject[];
        setProjects(projectsData);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { projects, loading, error };
};

export const useFirebaseProfile = () => {
  const [profile, setProfile] = useState<FirebaseProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'profile'),
      (snapshot) => {
        if (!snapshot.empty) {
          const profileData = {
            id: snapshot.docs[0].id,
            ...snapshot.docs[0].data()
          } as FirebaseProfile;
          setProfile(profileData);
        }
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { profile, loading, error };
};