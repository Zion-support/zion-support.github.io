import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen,
  Users,
  ArrowRight,
  Search,
  ChevronDown
} from 'lucide-react';

export default function Support() {
    const [activeCategory, setActiveCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');
    
    const faqCategories = {
        general: [
            {
                question: 'How do I get started with Zion Tech Group services?',
                answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
            },
            {
                question: 'What industries do you serve?',
                answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our AI and technology solutions are designed to be industry-agnostic and can be customized for any sector.'
            },
            {
                question: 'Do you offer remote support?',
                answer: 'Yes, we provide comprehensive remote support for all our services. Our team can assist you from anywhere in the world, ensuring you get the help you need regardless of your location.'
            }
        ],
        technical: [
            {
                question: 'What AI technologies do you use?',
                answer: 'We utilize cutting-edge AI technologies including machine learning, natural language processing, computer vision, and autonomous systems. Our solutions are built on the latest frameworks and are continuously updated with the newest advancements.'
            },
            {
                question: 'How secure are your solutions?',
                answer: 'Security is our top priority. All our solutions include enterprise-grade security features, SOC2 compliance, and regular security audits. We follow industry best practices and maintain multiple security certifications.'
            },
            {
                question: 'Can you integrate with existing systems?',
                answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team will assess your current infrastructure and ensure our solutions work perfectly with your existing technology stack.'
            }
        ],
        billing: [
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners.'
            },
            {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with our services within the first 30 days, we\'ll work to resolve any issues or provide a full refund.'
            },
            {
                question: 'Can I change my plan mid-contract?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll prorate any billing adjustments and ensure a smooth transition between plans.'
            }
        ],
        compliance: [
            {
                question: 'What compliance standards do you meet?',
                answer: 'We maintain SOC2 Type II, ISO 27001, and GDPR compliance. Our solutions are designed to meet the highest security and privacy standards required by regulated industries.'
            },
            {
                question: 'Do you provide compliance documentation?',
                answer: 'Yes, we provide comprehensive compliance documentation including audit reports, security assessments, and compliance certificates. This documentation can be shared with your auditors and stakeholders.'
            },
            {
                question: 'How do you handle data privacy?',
                answer: 'We follow strict data privacy protocols and are fully GDPR compliant. All data is encrypted, access is strictly controlled, and we never share your data with third parties without explicit consent.'
            }
        ]
    };
    
    const supportChannels = [
        {
            name: '24/7 Email Support',
            description: 'Get help anytime via email',
            icon: Mail,
            response: 'Within 2 hours',
            link: '/contact'
        },
        {
            name: 'Phone Support',
            description: 'Speak directly with our experts',
            icon: Phone,
            response: 'Within 15 minutes',
            link: '/contact'
        },
        {
            name: 'Live Chat',
            description: 'Real-time assistance',
            icon: MessageCircle,
            response: 'Instant',
            link: '/contact'
        },
        {
            name: 'Knowledge Base',
            description: 'Self-service resources',
            icon: BookOpen,
            response: 'Always available',
            link: '/docs'
        }
    ];
    
    const supportResources = [
        {
            title: 'Getting Started Guide',
            description: 'Step-by-step guide to implementing our solutions',
            icon: '🚀',
            link: '/docs/getting-started'
        },
        {
            title: 'API Documentation',
            description: 'Complete API reference and examples',
            icon: '🔌',
            link: '/docs/api'
        },
        {
            title: 'Best Practices',
            description: 'Industry best practices and recommendations',
            icon: '⭐',
            link: '/docs/best-practices'
        },
        {
            title: 'Video Tutorials',
            description: 'Visual guides and walkthroughs',
            icon: '🎥',
            link: '/tutorials'
        },
        {
            title: 'Case Studies',
            description: 'Real-world implementation examples',
            icon: '📊',
            link: '/case-studies'
        },
        {
            title: 'Community Forum',
            description: 'Connect with other users and experts',
            icon: '👥',
            link: '/community'
        }
    ];

    const filteredFAQs = Object.entries(faqCategories).flatMap(([category, faqs]) =>
        faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6">
                            <HelpCircle className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                            Support Center
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Get help, find answers, and connect with our expert support team
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search for help topics, questions, or solutions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            How Can We Help?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Multiple ways to get the support you need, when you need it
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supportChannels.map((channel, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <channel.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                                <p className="text-gray-300 mb-3">{channel.description}</p>
                                <p className="text-orange-400 font-semibold text-sm mb-4">{channel.response}</p>
                                <Link 
                                    to={channel.link}
                                    className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                                >
                                    Get Help
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Quick answers to common questions about our services and solutions
                        </p>
                    </div>
                    
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(faqCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                    
                    {/* FAQ Items */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqCategories[activeCategory].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-300">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Resources */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Self-Service Resources
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Access helpful resources and documentation to solve issues on your own
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {supportResources.map((resource, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{resource.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                                <p className="text-gray-300 mb-4">{resource.description}</p>
                                <Link 
                                    to={resource.link}
                                    className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group-hover:underline"
                                >
                                    Access Resource
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Still Need Help?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Our expert support team is here to help you succeed
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Support
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link 
                            to="/docs"
                            className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                            View Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
