
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialCardProps {
  icon: LucideIcon;
  href: string;
  className?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon: Icon, href, className = "" }) => {
  return (
    <a 
      href={href}
      className={`backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-2xl p-3 shadow-lg border border-white/30 dark:border-white/10 hover:shadow-xl transition-all duration-300 aspect-square flex items-center justify-center group ${className}`}
    >
      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300" />
    </a>
  );
};

export default SocialCard;
