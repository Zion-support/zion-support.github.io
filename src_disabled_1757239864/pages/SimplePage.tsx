import React from 'react';

type SimplePageProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const SimplePage: React.FC<SimplePageProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-16 px-6">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg text-gray-300 mb-8">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default SimplePage;

