import React from 'react';
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  config: AppConfig;
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ config, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">
                  {config.appName}
                </h1>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} {config.appName}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};