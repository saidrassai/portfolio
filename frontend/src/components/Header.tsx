
import React from 'react';
import ThemeToggle from './ThemeToggle';
import SocialCard from './SocialCard';
import { Linkedin, Github, Mail } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Navigation */}
      <div className="mb-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="hidden sm:block sm:w-[110px]"></div>
            <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-full p-1 shadow-lg border border-white/30 dark:border-white/10 mb-4 sm:mb-0">
              {['All', 'About', 'Work'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white/90 dark:bg-zinc-800 text-gray-800 dark:text-gray-100 shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="sm:w-[110px] flex justify-center sm:justify-end">
              <ThemeToggle className="scale-[0.55] sm:scale-[0.5] origin-center sm:origin-right" />
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-2 max-w-[150px] mx-auto mb-6">
        <SocialCard icon={Linkedin} href="#" className="w-10 h-10" />
        <SocialCard icon={Github} href="#" className="w-10 h-10" />
        <SocialCard icon={Mail} href="#" className="w-10 h-10" />
      </div>
    </>
  );
};

export default Header;


