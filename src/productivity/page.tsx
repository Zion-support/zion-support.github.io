import React from 'react';
import Navigation from '../components/Navigation';
import {CheckCircle, Star} from 'lucide-react;

const ProductivityPage: any,
    e: any,
      description: any, automated scheduling, and smart reminders.',
      icon: any,
      price: any,
      features: any, 'Automated scheduling', 'Smart reminders', 'Team collaboration', 'Progress tracking', 'Time analytics'],
      benefits: any, 'Reduce missed deadlines', 'Better time management', 'Improved team coordination'],
      marketPrice: any,
      category: any,
      technologies: any, 'Node.js', 'PostgreSQL', 'AI/ML', 'Calendar APIs']
    },
    {
      title: any,
      description: any, conflict resolution, and meeting optimization.',
      icon: any,
      price: any,
      features: any, 'Conflict resolution', 'Meeting optimization', 'Time blocking', 'Calendar sync', 'Smart suggestions'],
      benefits: any, 'Optimize meeting times', 'Save 5+ hours/week', 'Better time allocation'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'MongoDB', 'AI/ML', 'Calendar APIs']
    },
    {
      title: any,
      description: any, smart replies, and priority filtering.',
      icon: any,
      price: any,
      features: any, 'Smart replies', 'Priority filtering', 'Email templates', 'Follow-up reminders', 'Spam protection'],
      benefits: any, 'Respond faster', 'Never miss important emails', 'Save 3+ hours/week'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'PostgreSQL', 'AI/ML', 'Email APIs']
    },
    {
      title: any,
      description: any, automatic tagging, and intelligent search capabilities.',
      icon: any,
      price: any,
      features: any, 'Auto tagging', 'Intelligent search', 'Note organization', 'Collaboration', 'Cross-platform sync'],
      benefits: any, 'Find notes quickly', 'Organize information better', 'Improve knowledge retention'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'MongoDB', 'AI/ML', 'Speech APIs']
    },
    {
      title: any,
      description: any, productivity insights, and billable hour management.',
      icon: any,
      price: any,
      features: any, 'Activity detection', 'Productivity insights', 'Billable hours', 'Project tracking', 'Reports'],
      benefits: any, 'Identify productivity patterns', 'Improve time allocation', 'Accurate billing'],
      marketPrice: any,
      category: any,
      technologies: any, 'Node.js', 'PostgreSQL', 'AI/ML', 'Desktop Integration']
    },
    {
      title: any,
      description: any, version control, and intelligent suggestions.',
      icon: any,
      price: any,
      features: any, 'Version control', 'AI suggestions', 'Comment system', 'Access control', 'Cloud sync'],
      benefits: any, 'Reduce version conflicts', 'Improve document quality', 'Streamline workflows'],
      marketPrice: any,
      category: any,
      technologies: any, 'Node.js', 'PostgreSQL', 'AI/ML', 'WebSocket']
    },
    {
      title: any,
      description: any, action item extraction, and follow-up automation.',
      icon: any,
      price: any,
      features: any, 'Action item extraction', 'Follow-up automation', 'Meeting summaries', 'Voice recognition', 'Integration'],
      benefits: any, 'Extract action items automatically', 'Improve meeting efficiency', 'Better follow-up'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'PostgreSQL', 'AI/ML', 'Speech APIs']
    },
    {
      title: any,
      description: any, automatic generation, and breach monitoring.',
      icon: any,
      price: any,
      features: any, 'Auto generation', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Password sharing'],
      benefits: any, 'Generate strong passwords', 'Monitor breaches', 'Simplify password management'],
      marketPrice: any,
      category: any,
      technologies: any, 'Node.js', 'PostgreSQL', 'Encryption', 'Security APIs']
    },
    {
      title: any,
      description: any, progress tracking, and resource optimization.',
      icon: any,
      price: any,
      features: any, 'Progress tracking', 'Resource optimization', 'Risk analysis', 'Team management', 'Reporting'],
      benefits: any, 'Optimize resources', 'Identify risks early', 'Improve project success'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'PostgreSQL', 'AI/ML', 'Chart.js']
    },
    {
      title: any,
      description: any, streak analysis, and motivation features.',
      icon: any,
      price: any,
      features: any, 'AI recommendations', 'Streak analysis', 'Motivation features', 'Goal setting', 'Progress visualization'],
      benefits: any, 'Stay motivated', 'Track progress', 'Achieve goals faster'],
      marketPrice: any,
      category: any,
      technologies: any, 'Python', 'MongoDB', 'AI/ML', 'Push Notifications']
    }
  ];

  const categories = [...new Set(productivityTools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: any,>
    e="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered productivity tools to streamline your workflow, boost efficiency, and achieve more in less time
          </p>
          <div className="flex flex-col sm: any,">
    r: any{/* Key Benefits */}">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Productivity Tools?
          </h2>
          <div className="grid grid-cols-1 md: any,>
    g: any,>
    e="text-gray-300 text-sm">Works with your existing tools and workflows</p>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        {categories.map(category => (
          <section key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
              {category} Tools
            </h3>;
            <div className="grid grid-cols-1 md: any,;>
    g: any,>;
    y=== category);>
                .map((tool, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 hover: any,>
    e="text-4xl mb-4 text-center">{tool.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{tool.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm text-center">{tool.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                        <span className="text-sm text-gray-400">Market: any{tool.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-400 font-semibold text-center">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2 text-sm">Key Features: any,
    e="space-y-1">
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
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefits: any,
    e="space-y-1">
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
                        href="/contact">
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover: any,>
    r: any}>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our productivity tools and transform how you work;
          </p>;
          <div className="flex flex-col sm: any,;
    r: any;
  );
};

export default ProductivityPage;'"'>
import Footer from '../components/Footer';"'>";
"'>"'";