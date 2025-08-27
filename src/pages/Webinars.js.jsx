import React, { useState } from 'react';
import Link from 'next/link';
import { Video, Brain, Cpu, Shield, Zap, Rocket, Building } from 'lucide-react';
export default function Webinars() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const categories = [
        { id: 'all', name: 'All Topics', icon: Video },
        { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
        { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
        { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
        { id: 'cloud', name: 'Cloud & DevOps', icon: Zap },
        { id: 'business', name: 'Business Solutions', icon: Building },
        { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket }
    ];
    const statuses = [
        { id: 'all', name: 'All Webinars' },
        { id: 'upcoming', name: 'Upcoming' },
        { id: 'live', name: 'Live Now' },
        { id: 'recorded', name: 'Recorded' }
    ];
    const Webinars = () => {
        const webinars = [
            {
                title: "AI-Powered Business Transformation",
                date: "March 25, 2024",
                duration: "60 minutes",
                speaker: "Dr. Sarah Chen",
                description: "Learn how AI is revolutionizing business operations and creating new opportunities for growth.",
                category: "AI & Business"
            },
            {
                title: "Cybersecurity Best Practices 2024",
                date: "April 10, 2024",
                duration: "45 minutes",
                speaker: "Michael Rodriguez",
                description: "Essential cybersecurity strategies to protect your business from evolving threats.",
                category: "Security"
            },
            {
                title: "Cloud Migration Strategies",
                date: "April 25, 2024",
                duration: "75 minutes",
                speaker: "David Kim",
                description: "Step-by-step guide to successful cloud migration and optimization.",
                category: "Cloud & DevOps"
            }
        ];
        return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Webinars
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry experts for in-depth discussions on technology trends, 
              best practices, and innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webinars.map((webinar, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{webinar.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {webinar.date}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {webinar.duration}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    {webinar.speaker}
                  </p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Register Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>))}
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our webinar series and never miss an opportunity to learn 
                from industry experts and technology leaders.
              </p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe to Webinars
              </Link>
            </div>
          </div>
=======
import {CogIcon} from '@heroicons/react/24/outline';

const $page: React.FC = () => {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400"/>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
  );
};

export default $page;
        </></></>);
    };
}
