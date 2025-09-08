import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Award,
  Globe,
  Lightbulb
 } from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )};

  const faqCategories = [
    {
      name: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology comp specializing in AI-powered solutions, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to drive innovation and growth.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally with operations in 25+ countries.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government sectors. Our solutions are adaptable to  industry that can benefit from AI and digital transformation.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group was founded in 2018 and has been delivering innovative technology solutions for over 5 years. We have successfully completed 500+ projects and serve 100+ enterprise clients.'
        }
      ]
    },
    {
      name: 'AI & Technology Services',
      icon: Zap,
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including AI Business Intelligence, AI Sales Copilot, AI Compliance Assistant, LLM Content Studio, and custom AI solutions. Our AI services help automate processes, gain insights, and transform business operations.'
        },
        {
          question: 'How do you ensure AI solutions are ethical and secure?',
          answer: 'We follow strict AI ethics guidelines and implement enterprise-grade security measures. All our AI solutions include bias detection, explainability features, and comply with industry standards and regulations.'
        },
        {
          question: 'Can you customize AI solutions for our specific needs?',
          answer: 'Absolutely! We specialize in custom AI solutions tailored to your specific business requirements. Our team works closely with you to understand your needs and develop solutions that deliver measurable results.'
        },
        {
          question: 'What is the typical timeline for AI project implementation?',
          answer: 'AI project timelines vary based on complexity and scope. Simple AI integrations can take 4-8 weeks, while complex enterprise AI solutions may take 3-6 months. We provide detailed project timelines during the planning phase.'
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Shield,
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. Our team has certifications in multiple cloud platforms and can help you choose the best solution for your needs.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance frameworks. Our cloud solutions are ISO 27001 certified and SOC 2 Type II compliant.'
        },
        {
          question: 'What DevOps practices do you implement?',
          answer: 'We implement modern DevOps practices including CI/CD pipelines, Infrastructure as Code, automated testing, monitoring, and continuous deployment. This ensures faster delivery and higher quality software.'
        },
        {
          question: 'Can you help optimize our cloud costs?',
          answer: 'Yes! Our Cloud FinOps Optimizer service helps analyze cloud spending, identify optimization opportunities, and implement cost-saving measures. We typically help clients reduce cloud costs by 20-40%.'
        }
      ]
    },
    {
      name: 'Pricing & Billing',
      icon: Award,
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and subscription-based services. Pricing depends on project scope, complexity, and requirements. Contact us for a custom quote.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments based on project milestones or provide monthly payment options. We also offer enterprise payment terms for ongoing services.'
        },
        {
          question: 'What is included in your service packages?',
          answer: 'Our service packages include project planning, development, testing, deployment, training, and ongoing support. We also provide documentation, user guides, and maintenance services as part of our comprehensive packages.'
        },
        {
          question: 'Are there  hidden costs?',
          answer: 'No hidden costs! We provide transparent pricing with detailed breakdowns of all services and costs. Any additional requirements or changes are discussed upfront and clearly communicated before implementation.'
        }
      ]
    },
    {
      name: 'Support & Maintenance',
      icon: Users,
      questions: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We provide comprehensive post-project support including bug fixes, updates, maintenance, and 24/7 emergency support for critical systems. Our support packages are customizable to meet your specific needs.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We provide different response time SLAs based on issue priority. Critical issues receive immediate attention, while standard requests are typically resolved within 4-8 hours. Emergency support is available 24/7.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes! We provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing education as new features are added.'
        },
        {
          question: 'Can you help with system upgrades and migrations?',
          answer: 'Absolutely! We provide migration services, system upgrades, and technology refresh services. Our team ensures smooth transitions with minimal downtime and comprehensive testing.'
        }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      questions: [
        {
          question: 'What security certifications do you have?',
          answer: 'We are ISO 27001 certified and SOC 2 Type II compliant. We also maintain certifications in various cloud platforms and security frameworks. Our security practices meet or exceed industry standards.'
        },
        {
          question: 'How do you protect client data?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance monitoring. All client data is protected with industry-standard security protocols.'
        },
        {
          question: 'Do you comply with industry regulations?',
          answer: 'Yes, we comply with major industry regulations including GDPR, HIPAA, SOX, and industry-specific requirements. We can help ensure your solutions meet all applicable compliance standards.'
        },
        {
          question: 'What happens in case of a security incident?',
          answer: 'We have comprehensive incident response procedures including immediate notification, containment, investigation, and resolution. We provide detailed incident reports and work to prevent future occurrences.'
        }
      ]
    }
    setExpandedItems(newExpanded);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's technology services, AI solutions, cloud infrastructure, and cybersecurity offerings."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Find answers to common questions about our technology services and solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-400/25'
                    : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                View All Questions
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-lg mb-2">{faq.question}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                          {faq.category}
                        </span>
                        <div className="flex space-x-1">
                          {faq.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/30 text-slate-400 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {expandedItems.has(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.has(faq.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <div className="border-t border-slate-700/50 pt-4">
                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                
                {channel.href.startsWith('tel:') || channel.href.startsWith('mailto:') ? (
                  <a
                    href={channel.href}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors duration-200"
                  >
                    <span>{channel.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={channel.href}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors duration-200"
                  >
                    <span>{channel.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our technology solutions can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
