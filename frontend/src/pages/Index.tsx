import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import ResumeAndExperienceSection from '../components/ResumeAndExperienceSection';
import ProjectsGrid from '../components/ProjectsGrid';
import BackgroundAnimation from '../components/BackgroundAnimation';
import imageP1 from '../assets/images/p1.png';
import imageP2 from '../assets/images/P2.png'; // Corrected case for P2

const Index = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [mounted, setMounted] = useState(false);

  // This effect ensures hydration completes before showing UI to prevent mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "YALLAGOMOROCCO - Smart Travel Platform powered by AI",
      description: "Fullstack - Microservices Architecture",
      tags: ["MERN stack", "GraphQL", "RAG","Fine-tuning"],
      image: imageP1,
      company: "YGM"

    },
    {
      id: 2,
      title: "BDE ENSI TANGIER",
      description: "Fullstack - Web App",
      tags: ["React", "Flask","RESTAPI", "PostgreSQL", "CSS"],
      image: imageP2,
      company: "ENSI Tangier"
    },
    {
      id: 3,
      title: "ARTZEUM - Digital Art Museum",
      description: "Fullstack - Mobile App",
      tags: ["MAUI",".NET","RESTAPI", "Cloudinary", "MySQL"],
      image: imageP1,
      company: "RASS.AI LABS"
    },
    {
      id: 4,
      title: "Eventsfinder - smart approach to find events near of you",
      description: "Fullstack - Web/Mobile App",
      tags: ["NestJS", "Angular", "GraphQL", "SCSS"],
      image: imageP2,
      company: "YGM"
    },
    {
      id: 5,
      title: "AI & ML",
      description: "FullStack - Web/Mobile App",
      tags: ["Angular", "Microservices", "AI & ML"],
      image: imageP1,
      company: "AI & ML"
    },
    {
      id: 6,
      title: "AI & ML",
      description: "FullStack - Web/Mobile App",
      tags: ["Angular", "Microservices", "AI & ML"],
      image: imageP2,
      company: "AI & ML"
    },
  ];

  const experiences: {
    role: string;
    company: string;
    period: string;
    type: 'current' | 'past';
  }[] = [
    {
      role: "Student Software Engineer",
      company: "School of New Sciences and Engineering",
      period: "2023 - Present",
      type: "current"
    },
    {
      role: "Renewable Energy Master Degree",
      company: "Faculty of Sciencesn-Kenitra",
      period: "2017 - 2020",
      type: "past"
    },


  ];

  // Don't render until after hydration

  if (!mounted) return null;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <BackgroundAnimation />

      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content - Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-4">
          
          {/* Left Column - Spans 2 */}
          <div className="lg:col-span-2">
            <ProfileSection />
            </div>

          {/* Right Column - Contains the other two sections */}
          <div className="space-y-6"> {/* This div will be the third column and stack its children */}
            
            <ResumeAndExperienceSection experiences={experiences} />
          </div>
        </div>

        {/* Projects Grid */}
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
};

export default Index;