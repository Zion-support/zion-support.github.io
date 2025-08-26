import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Support() {
    const faqs = {
        general: [
            {
                question: 'What services does Zion Tech Group offer?',
                answer: 'We offer comprehensive AI solutions, micro SAAS services, IT consulting, cloud migration, cybersecurity, and digital transformation services. Our portfolio includes everything from AI-powered business intelligence to enterprise infrastructure solutions.'
            },
            {
                question: 'How do I get started with your services?',
                answer: 'Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. Our team will assess your needs and recommend the best solutions for your business.'
            },
            {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. We tailor our solutions to meet your specific needs and budget requirements.'
            }
        ],
        technical: [
            {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in AI/ML, cloud computing (AWS, Azure, GCP), cybersecurity, data analytics, blockchain, and modern web technologies. Our team stays current with the latest industry trends and best practices.'
            },
            {
                question: 'Can you help with legacy system migration?',
                answer: 'Yes, we have extensive experience migrating legacy systems to modern cloud-based solutions. We ensure minimal disruption to your business operations during the migration process.'
            },
            {
                question: 'Do you provide ongoing support?',
                answer: 'We offer comprehensive ongoing support including 24/7 monitoring, regular maintenance, security updates, and technical assistance. Our support plans are designed to keep your systems running smoothly.'
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
        <>
            <SEO 
                title="Support - Zion Tech Group" 
                description="Get help and support for Zion Tech Group services. 24/7 support, documentation, and expert assistance." 
                canonical="https://ziontechgroup.com/support" 
            />
            <Header />
            <main className="min-h-screen bg-zion-blue-dark text-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="text-center mb-16">
                        <GradientHeading>Support & Help Center</GradientHeading>
                        <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
                            We're here to help you succeed. Get support, find answers, and access resources to maximize the value of our services.
                        </p>
                    </div>

                    {/* Support Channels */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">How Can We Help?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {supportChannels.map((channel, index) => (
                                <motion.div
                                    key={channel.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-lighter hover:border-zion-cyan transition-colors"
                                >
                                    <div className="text-4xl mb-4">{channel.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                                    <p className="text-zion-slate-light mb-3">{channel.description}</p>
                                    <p className="text-zion-cyan text-sm font-medium">Response: {channel.response}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Resources & Documentation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resources.map((resource, index) => (
                                <motion.div
                                    key={resource.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-lighter hover:border-zion-cyan transition-colors"
                                >
                                    <div className="text-4xl mb-4">{resource.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                                    <p className="text-zion-slate-light mb-4">{resource.description}</p>
                                    <a href={resource.link} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                                        Learn More →
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        {Object.entries(faqs).map(([category, questions]) => (
                            <div key={category} className="mb-8">
                                <h3 className="text-2xl font-semibold mb-6 capitalize">{category} Questions</h3>
                                <div className="space-y-4">
                                    {questions.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-lighter"
                                        >
                                            <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                                            <p className="text-zion-slate-light">{faq.answer}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
