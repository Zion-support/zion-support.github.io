<<<<<<< HEAD:temp_broken_files/LoginErrorFallback.tsx
import React from 'react';
const LoginErrorFallback: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-futuristic p-4">
      <div className="max-w-md w-full bg-zion-slate-dark rounded-xl border border-zion-cyan/20 p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. Please try again.
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left mb-6">
            <summary className="text-zion-cyan cursor-pointer text-sm">
              Error details
            <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto">
              {error.message}
        )}
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
=======
import React from "react";

const function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/auth/login/LoginErrorFallback.tsx
  );
};

export default function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) {;
