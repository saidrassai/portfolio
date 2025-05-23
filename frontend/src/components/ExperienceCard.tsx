
import React from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  type: 'current' | 'past';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, period, type }) => {
  return (
    <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-2xl p-4 shadow-lg border border-white/30 dark:border-white/10 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">{role}</h4>
          <p className={`text-sm ${type === 'past' ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-200'}`}>
            {company}
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-200">{company}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{period}</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
