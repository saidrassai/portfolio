
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { Eye } from 'lucide-react';

interface ResumeAndExperienceSectionProps {
  experiences: {
    role: string;
    company: string;
    period: string;
    type: 'current' | 'past';
  }[];
}

const ResumeAndExperienceSection: React.FC<ResumeAndExperienceSectionProps> = ({ experiences }) => {
  return (
    <div className="space-y-6">
      {/* Resume Card */}
      <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl p-6 shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800 dark:text-gray-100">RESUME</h3>
          <div className="flex gap-2">
            <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>


      {/* Experience */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-600 px-2">6 YEARS OF</h3>
        <h2 className="text-2xl font-bold text-gray-800 px-2">EXPERIENCE</h2>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ResumeAndExperienceSection;
