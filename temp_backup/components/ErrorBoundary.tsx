<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, RefreshCw, Bug, 
  Home, ArrowLeft, Info,
  FileText, Terminal, Shield
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
=======
import React from 'react';

const ErrorBoundary: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ErrorBoundary</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default ErrorBoundary;
