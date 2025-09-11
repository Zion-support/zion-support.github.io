import React from 'react';
import { Smartphone, Tablet, Monitor, Code, Zap, Shield } from 'lucide-react';

const MobileDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Mobile Development Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up">
            Create powerful, user-friendly mobile applications for iOS and Android
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Native iOS Apps</h3>
            <p className="text-gray-300">
              High-performance iOS applications built with Swift and Objective-C.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Tablet className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Native Android Apps</h3>
            <p className="text-gray-300">
              Feature-rich Android applications developed with Kotlin and Java.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Monitor className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cross-Platform Apps</h3>
            <p className="text-gray-300">
              Single codebase solutions using React Native, Flutter, and Xamarin.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Code className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
            <p className="text-gray-300">
              Tailored mobile solutions designed to meet your specific business needs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Zap className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
            <p className="text-gray-300">
              Optimize app performance for faster loading and smoother user experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">App Store Deployment</h3>
            <p className="text-gray-300">
              Complete app store submission and approval process management.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Bring Your App Idea to Life</h2>
          <p className="text-lg text-gray-300 mb-8">
            From concept to deployment, we'll help you create the perfect mobile application.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;