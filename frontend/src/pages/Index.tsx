import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import LocationAndTechSection from '../components/LocationAndTechSection';
import ResumeAndExperienceSection from '../components/ResumeAndExperienceSection';
import ProjectsGrid from '../components/ProjectsGrid';
import BackgroundAnimation from '../components/BackgroundAnimation';

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
      title: "STATION UI - COMPONENT LIBRARY",
      description: "Design System",
      tags: ["100+ Components", "Storybook", "TypeScript", "SCSS"],
      image: "/assets/images/project1.png",
      company: "TERRAFORM LABS"
    },
    {
      id: 2,
      title: "ALLIANCE DAO NFT SITE",
      description: "Frontend",
      tags: ["React", "TypeScript", "Figma", "SCSS"],
      image: "/assets/images/project2.png",
      company: "TERRAFORM LABS"
    },
    {
      id: 3,
      title: "STATION LANDING PAGE",
      description: "Solo Developer",
      tags: ["NextJS", "TypeScript", "Figma", "SCSS"],
      image: "/assets/images/project3.png",
      company: "TERRAFORM LABS"
    },
    {
      id: 4,
      title: "STATION SETUP PAGE",
      description: "Solo Developer",
      tags: ["NextJS", "JavaScript", "Figma", "SCSS"],
      image: "/assets/images/project4.png",
      company: "TERRAFORM LABS"
    },
    {
      id: 5,
      title: "DEVELOPER PAGE FOR TERRA",
      description: "Frontend + Design",
      tags: ["React", "TypeScript", "SCSS"],
      image: "/assets/images/project5.png",
      company: "TERRAFORM LABS"
    },
    {
      id: 6,
      title: "ALLIANCE LANDING",
      description: "Frontend + Design",
      tags: ["React", "TypeScript", "SCSS"],
      image: "/assets/images/project6.png",
      company: "TERRAFORM LABS"
    }
  ];

  const experiences: {
    role: string;
    company: string;
    period: string;
    type: 'current' | 'past';
  }[] = [
    {
      role: "Web Developer",
      company: "Terraform Labs",
      period: "2022 - Present",
      type: "current"
    },
    {
      role: "Software Engineer",
      company: "Verb Inc",
      period: "2019 - 2022",
      type: "past"
    },
    {
      role: "Jr Front-End Engineer",
      company: "PNI Digital Media",
      period: "2017 - 2019",
      type: "past"
    },
    {
      role: "Software Engineer",
      company: "Factom Inc",
      period: "2018 - 2019",
      type: "past"
    }
  ];

  // Don't render until after hydration
  if (!mounted) return null;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <BackgroundAnimation />

      <div className="relative z-10 container mx-auto px-6 py-8">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column */}
          <ProfileSection />

          {/* Middle Column */}
          <LocationAndTechSection />

          {/* Right Column */}
          <ResumeAndExperienceSection experiences={experiences} />
        </div>

        {/* Projects Grid */}
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
};

export default Index;
