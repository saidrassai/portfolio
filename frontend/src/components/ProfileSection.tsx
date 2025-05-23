import React from 'react';
import SocialCard from './SocialCard';
import TechStack from './TechStack';
import { Linkedin, Github, Mail } from 'lucide-react';
import LocationAndTechSection from './LocationAndTechSection';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-6  ">
      {/* New Flex Container for Profile Card and Map */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch "> {/* items-stretch for equal height */}

        {/* Profile Card Wrapper (2/3 width on lg) */}
        <div className="lg:w-2/3 w-full">
          <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl p-6 shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300 h-full">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                RS
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">RASSAI SAID</h1>
              </div>
            </div>
            <p className="text-base text-gray-800 px-2  dark:text-white leading-relaxed">
              "Fourth-year Software Engineering student at <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">ENSI</span> – School of New Sciences and Engineering, Tangier. Passionate about crafting seamless digital experiences through modular <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">microservices</span>, intelligent <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">AI agents</span>, and end-to-end <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">DevOps</span> on <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">cloud-native</span> infrastructure. My academic background and hands-on projects focus on building scalable, <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">data-driven</span> systems that translate innovation into <span className="bg-yellow-300 px-1 rounded dark:bg-white/20 dark:text-yellow-400 dark:backdrop-blur-sm">real-world</span> impact."
            </p>
          </div>
        </div>

        {/* Map Wrapper (1/3 width on lg) */}
        <div className="lg:w-1/3 w-full">
          <LocationAndTechSection />
        </div>
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
        <div className="flex flex-1 ">
          <TechStack />
        </div>
      </div>


    </div>
  );
};

export default ProfileSection;
