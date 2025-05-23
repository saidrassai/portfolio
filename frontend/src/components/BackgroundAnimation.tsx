
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse delay-500"></div>
    </div>
  );
};

export default BackgroundAnimation;
