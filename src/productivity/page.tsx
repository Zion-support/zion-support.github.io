import React from 'react';
import Navigation from '../components/Navigation';
import {CheckCircle, Star} from 'lucide-react';
import Footer from '../components/Footer';


const ProductivityPage: React.FC = () => {
  const _productivityTools = [
    {
      title: 'AI Task Management Pro',
      description: 'Intelligent task management with AI-powered prioritization, automated scheduling, and smart reminders.',
      icon: '📋',
      price: '$49/month',
      features: ['AI task prioritization', 'Automated scheduling', 'Smart reminders', 'Team collaboration', 'Progress tracking', 'Time analytics'],
      benefits: ['Increase productivity by 40%', 'Reduce missed deadlines', 'Better time management', 'Improved team coordination'],
      marketPrice: '$80-150/month',
      category: 'Task Management',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Calendar APIs']
    },
    {
      title: 'Smart Calendar Assistant',
      description: 'AI-powered calendar management with intelligent scheduling, conflict resolution, and meeting optimization.',
      icon: '📅',
      price: '$39/month',
      features: ['AI scheduling', 'Conflict resolution', 'Meeting optimization', 'Time blocking', 'Calendar sync', 'Smart suggestions'],
      benefits: ['Reduce scheduling conflicts', 'Optimize meeting times', 'Save 5+ hours/week', 'Better time allocation'],
      marketPrice: '$60-120/month',
      category: 'Calendar Management',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'AI/ML', 'Calendar APIs']
    },
    {
      title: 'AI Email Organizer',
      description: 'Intelligent email management with automatic categorization, smart replies, and priority filtering.',
      icon: '📧',
      price: '$29/month',
      features: ['Auto categorization', 'Smart replies', 'Priority filtering', 'Email templates', 'Follow-up reminders', 'Spam protection'],
      benefits: ['Reduce email clutter', 'Respond faster', 'Never miss important emails', 'Save 3+ hours/week'],
      marketPrice: '$50-100/month',
      category: 'Email Management',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'Email APIs']
    },
    {
      title: 'Smart Note-Taking System',
      description: 'AI-powered note-taking with voice transcription, automatic tagging, and intelligent search capabilities.',
      icon: '📝',
      price: '$19/month',
      features: ['Voice transcription', 'Auto tagging', 'Intelligent search', 'Note organization', 'Collaboration', 'Cross-platform sync'],
      benefits: ['Capture ideas instantly', 'Find notes quickly', 'Organize information better', 'Improve knowledge retention'],
      marketPrice: '$30-60/month',
      category: 'Note-Taking',
      technologies: ['React Native', 'Python', 'MongoDB', 'AI/ML', 'Speech APIs']
    },
    {
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with automatic activity detection, productivity insights, and billable hour management.',
      icon: '⏱️',
      price: '$34/month',
      features: ['Auto time tracking', 'Activity detection', 'Productivity insights', 'Billable hours', 'Project tracking', 'Reports'],
      benefits: ['Track time automatically', 'Identify productivity patterns', 'Improve time allocation', 'Accurate billing'],
      marketPrice: '$55-110/month',
      category: 'Time Tracking',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Desktop Integration']
    },
    {
      title: 'Smart Document Collaboration',
      description: 'AI-powered document collaboration with real-time editing, version control, and intelligent suggestions.',
      icon: '📄',
      price: '$44/month',
      features: ['Real-time editing', 'Version control', 'AI suggestions', 'Comment system', 'Access control', 'Cloud sync'],
      benefits: ['Collaborate seamlessly', 'Reduce version conflicts', 'Improve document quality', 'Streamline workflows'],
      marketPrice: '$70-140/month',
      category: 'Document Collaboration',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'WebSocket']
    },
    {
      title: 'AI Meeting Assistant',
      description: 'Intelligent meeting management with automatic transcription, action item extraction, and follow-up automation.',
      icon: '🎤',
      price: '$59/month',
      features: ['Auto transcription', 'Action item extraction', 'Follow-up automation', 'Meeting summaries', 'Voice recognition', 'Integration'],
      benefits: ['Never miss meeting details', 'Extract action items automatically', 'Improve meeting efficiency', 'Better follow-up'],
      marketPrice: '$90-180/month',
      category: 'Meeting Management',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'Speech APIs']
    },
    {
      title: 'Smart Password Manager',
      description: 'AI-powered password management with secure storage, automatic generation, and breach monitoring.',
      icon: '🔐',
      price: '$24/month',
      features: ['Secure storage', 'Auto generation', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Password sharing'],
      benefits: ['Enhance security', 'Generate strong passwords', 'Monitor breaches', 'Simplify password management'],
      marketPrice: '$40-80/month',
      category: 'Security',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Encryption', 'Security APIs']
    },
    {
      title: 'AI Project Dashboard',
      description: 'Intelligent project management with AI insights, progress tracking, and resource optimization.',
      icon: '📊',
      price: '$69/month',
      features: ['AI insights', 'Progress tracking', 'Resource optimization', 'Risk analysis', 'Team management', 'Reporting'],
      benefits: ['Better project visibility', 'Optimize resources', 'Identify risks early', 'Improve project success'],
      marketPrice: '$110-220/month',
      category: 'Project Management',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'Chart.js']
    },
    {
      title: 'Smart Habit Tracker',
      description: 'AI-powered habit tracking with personalized recommendations, streak analysis, and motivation features.',
      icon: '🎯',
      price: '$14/month',
      features: ['Habit tracking', 'AI recommendations', 'Streak analysis', 'Motivation features', 'Goal setting', 'Progress visualization'],
      benefits: ['Build better habits', 'Stay motivated', 'Track progress', 'Achieve goals faster'],
      marketPrice: '$25-50/month',
      category: 'Habit Tracking',
      technologies: ['React Native', 'Python', 'MongoDB', 'AI/ML', 'Push Notifications']
    }
  ];

  const categories = [...new Set(productivityTools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Productivity Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered productivity tools to streamline your workflow, boost efficiency, and achieve more in less time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Productivity Suite
            </a>
            <a
              href="/micro-saas"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
            >
              View All Tools
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Productivity Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300 text-sm">Intelligent automation and insights powered by advanced AI</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Focused Efficiency</h3>
              <p className="text-gray-300 text-sm">Tools designed to eliminate distractions and boost focus</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Measurable Results</h3>
              <p className="text-gray-300 text-sm">Track and measure your productivity improvements</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-gray-300 text-sm">Works with your existing tools and workflows</p>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
              {category} Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productivityTools
                .filter(tool => tool.category === category)
                .map((tool, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-center">{tool.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{tool.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm text-center">{tool.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                        <span className="text-sm text-gray-400">Market: {tool.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-400 font-semibold text-center">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2 text-sm">Key Features:</h5>
                      <ul className="space-y-1">
                        {tool.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {tool.features.length > 3 && (
                          <li className="text-xs text-gray-400">
                            +{tool.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefits:</h5>
                      <ul className="space-y-1">
                        {tool.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-sm inline-block"
                      >
                        Get This Tool
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our productivity tools and transform how you work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductivityPage;
