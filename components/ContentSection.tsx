
import React, { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-white">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h2 className="font-dancing-script text-3xl md:text-4xl text-purple-700">
          {title}
        </h2>
      </div>
      <div className="text-purple-800/90 space-y-4">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
