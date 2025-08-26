import { useState } from 'react';
export default function Support() {
    const [activeCategory, setActiveCategory] = useState('general');
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
            icon: '📧',
            response: 'Within 2 hours',
            link: '/contact'
        },
        {
            name: 'Phone Support',
            description: 'Speak directly with our experts',
            icon: '📞',
            response: 'Within 15 minutes',
            link: '/contact'
        },
        {
            name: 'Live Chat',
            description: 'Real-time assistance',
            icon: '💬',
            response: 'Instant',
            link: '/contact'
        },
        {
            name: 'Knowledge Base',
            description: 'Self-service resources',
            icon: '📚',
            response: 'Always available',
            link: '/docs'
        }
    ];
    const resources = [
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Support & Resources
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        We're here to help you succeed. Get support, find answers, and access resources to make the most of our services.
                    </p>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">How Can We Help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supportChannels.map((channel, index) => (
                            <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                                <div className="text-4xl mb-4">{channel.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                                <p className="text-gray-300 mb-3">{channel.description}</p>
                                <p className="text-blue-400 text-sm mb-4">{channel.response}</p>
                                <a href={channel.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                    Get Help →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {Object.keys(faqCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqCategories[activeCategory].map((item, index) => (
                            <div key={index} className="bg-slate-800/50 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                                <p className="text-gray-300">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Helpful Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                                <div className="text-4xl mb-4">{resource.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                                <p className="text-gray-300 mb-4">{resource.description}</p>
                                <a href={resource.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                    Learn More →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Can't find what you're looking for? Our team is ready to assist you with any questions or concerns.
                    </p>
                    <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
}
