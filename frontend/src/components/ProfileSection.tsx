
import React from 'react';
import SocialCard from './SocialCard';
import TechStack from './TechStack';
import { Linkedin, Github, Mail } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl p-6 shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
            RS
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rassai Said</h1>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Crafting seamless experiences with modular microservices, intelligent AI agents, and end‑to‑end DevOps on cloud‑native infrastructure.
          <br />
          Pursuing my final year of studies at ENSI , Tangier.
        </p>
      </div>

      {/* Social Links and Tech Stack Container */}
      <div className="flex flex-row items-start gap-4">
        {/* Social Links - Vertical Layout (Left-aligned) */}
        <div className="flex flex-col gap-2 max-w-[80px]">
          <SocialCard icon={Linkedin} href="#" className="w-14 h-14" />
          <SocialCard icon={Github} href="#" className="w-14 h-14" />
          <SocialCard icon={Mail} href="#" className="w-14 h-14" />
        </div>
        
        {/* Tech Stack positioned to the right of socials */}
        <div className="flex-1">
          <TechStack />
        </div>
      </div>


    </div>
  );
};

export default ProfileSection;
