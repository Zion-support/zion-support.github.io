import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Brain, 
  Cloud, 
  Shield, 
  Sparkles, 
  Globe,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Award,
  Calendar,
  FileText,
  Lightbulb,
  Zap
} from 'lucide-react';

const researchAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Advancing the frontiers of AI research with focus on autonomous systems, natural language processing, and computer vision.',
    icon: Brain,
    projects: 12,
    publications: 8,
    researchers: 15
  },
  {
    title: 'Quantum Computing & Cryptography',
    description: 'Exploring quantum algorithms, quantum-resistant cryptography, and quantum machine learning applications.',
    icon: Sparkles,
    projects: 6,
    publications: 4,
    researchers: 8
  },
  {
    title: 'Cybersecurity & Privacy',
    description: 'Developing next-generation security solutions including AI-powered threat detection and zero-trust architectures.',
    icon: Shield,
    projects: 10,
    publications: 6,
    researchers: 12
  },
  {
    title: 'Cloud & Edge Computing',
    description: 'Researching distributed computing paradigms, edge intelligence, and sustainable cloud architectures.',
    icon: Cloud,
    projects: 8,
    publications: 5,
    researchers: 10
  }
];

const currentProjects = [
  {
    title: 'Autonomous AI Business Operations',
    description: 'Developing AI systems that can autonomously manage complex business processes and decision-making.',
    status: 'Active',
    progress: 75,
    team: 'AI Research Team',
    timeline: 'Q2 2024'
  },
  {
    title: 'Quantum-Resistant Blockchain',
    description: 'Building blockchain protocols that remain secure against quantum computing attacks.',
    status: 'Active',
    progress: 60,
    team: 'Quantum & Blockchain Team',
    timeline: 'Q3 2024'
  },
  {
    title: 'AI-Powered Cybersecurity Platform',
    description: 'Creating intelligent security systems that adapt to emerging threats in real-time.',
    status: 'Active',
    progress: 85,
    team: 'Security Research Team',
    timeline: 'Q1 2024'
  }
];

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advancing Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                Research
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore our cutting-edge research initiatives in AI, quantum computing, cybersecurity, 
              and emerging technologies. Join us in shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#areas"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Explore Research Areas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=research-collaboration"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Collaborate With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="areas" className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Focus Areas
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our research spans multiple cutting-edge technology domains, driving innovation 
              and creating solutions for tomorrow's challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                    <p className="text-zion-slate-light">{area.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{area.projects}</div>
                    <div className="text-sm text-zion-slate-light">Active Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{area.publications}</div>
                    <div className="text-sm text-zion-slate-light">Publications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{area.researchers}</div>
                    <div className="text-sm text-zion-slate-light">Researchers</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Current Research Projects
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our ongoing research initiatives and their progress toward breakthrough innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    {project.status}
                  </span>
                  <span className="text-zion-cyan font-semibold">{project.progress}%</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-zion-slate-light mb-4">{project.description}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{project.team}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">Timeline: {project.timeline}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-zion-slate-dark rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Research Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Collaborate with our research team, access cutting-edge technology, 
              and contribute to breakthrough innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=research-collaboration"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Start Collaboration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}