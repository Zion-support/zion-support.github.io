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

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Support Center
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get the help you need with our comprehensive support resources and expert assistance.
                    </p>
                </div>

                {/* Support Channels */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {supportChannels.map((channel, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-3xl mb-4">{channel.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.name}</h3>
                            <p className="text-gray-600 mb-3">{channel.description}</p>
                            <p className="text-sm text-blue-600 font-medium">Response: {channel.response}</p>
                        </div>
                    ))}
                </div>

                {/* Support Resources */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {supportResources.map((resource, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-2xl mb-4">{resource.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                            <p className="text-gray-600 mb-4">{resource.description}</p>
                            <a href={resource.link} className="text-blue-600 hover:text-blue-800 font-medium">
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {Object.keys(faqCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-6">
                        {faqCategories[activeCategory].map((item, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
