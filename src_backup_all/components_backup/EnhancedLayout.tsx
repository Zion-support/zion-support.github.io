import React from 'react';
import { ReactNode } from 'react';
import { FuturisticNavigation } from './FuturisticNavigation';
import { FuturisticFooter } from './FuturisticFooter';
import { EnhancedSidebar } from './EnhancedSidebar';
import { FuturisticAnimatedBackground } from './FuturisticAnimatedBackground';

interface EnhancedLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  showSidebar = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
      {/* Futuristic Animated Background */}
      <FuturisticAnimatedBackground />

      {/* Navigation */}
      <FuturisticNavigation />

      {/* Main Content with Sidebar */}
      <div className="flex relative z-10">
        {/* Sidebar */}
        {showSidebar && <EnhancedSidebar />}

        {/* Main Content */}
        <main className={`flex-1 ${showSidebar ? 'lg:ml-80' : ''}`}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
};