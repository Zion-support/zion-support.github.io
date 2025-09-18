import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

interface ThemeToggleProps {
  currentTheme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'dark', icon: Moon, label: 'Dark Mode', color: 'from-gray-800 to-gray-900' },
    { id: 'light', icon: Sun, label: 'Light Mode', color: 'from-yellow-400 to-orange-500' },
  ] as const;

=======

const ThemeToggle: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ThemeToggle</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ThemeToggle;
