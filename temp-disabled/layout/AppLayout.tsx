import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <header className="bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Zion App</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-zion-blue-dark border-t border-zion-blue-light mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-zion-slate-light">
          <p>&copy; 2024 Zion App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};