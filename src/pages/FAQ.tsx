import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search, Zap, Shield, Cloud, Brain } from 'lucide-react';
import SEO from '../components/SEO';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const faqData: FAQItem[] = [
  {
    id: 'ai-services',
    question: 'What AI services does Zion Tech Group offer?',
    answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI-powered cybersecurity, and custom AI solution development for businesses.',
    category: 'AI Services',
    icon: Brain
  },
  {
    id: 'cybersecurity',
    question: 'How does Zion Tech Group ensure cybersecurity?',
    answer: 'We implement enterprise-grade security measures including zero-trust architecture, AI-powered threat detection, regular security audits, compliance with industry standards, and 24/7 monitoring.',
    category: 'Security',
    icon: Shield
  },
  {
    id: 'cloud-solutions',
    question: 'What cloud solutions are available?',
    answer: 'Our cloud services include cloud migration, infrastructure as code, container orchestration, serverless computing, multi-cloud strategy, and cloud security implementation.',
    category: 'Cloud',
    icon: Cloud
  },
  {
    id: 'pricing',
    question: 'How is pricing structured for your services?',
    answer: 'We offer flexible pricing models including project-based pricing, subscription plans, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'support',
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, dedicated account managers, comprehensive documentation, training programs, and ongoing maintenance and updates.',
    category: 'Support',
    icon: HelpCircle
  },
  {
    id: 'implementation',
    question: 'How long does it take to implement your solutions?',
    answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We provide detailed project timelines during planning.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'customization',
    question: 'Can you customize solutions for our specific needs?',
    answer: 'Absolutely! We specialize in custom development and can tailor any solution to meet your unique business requirements, industry standards, and compliance needs.',
    category: 'General',
    icon: Zap
  },
  {
    id: 'maintenance',
    question: 'Do you provide ongoing maintenance and updates?',
    answer: 'Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and continuous improvement of your solutions.',
    category: 'Support',
    icon: HelpCircle
  }
];

const categories = ['All', 'AI Services', 'Security', 'Cloud', 'Support', 'General'];

export default function FAQ(): JSX.Element {
  const [activeItem, setActiveItem] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a forward-thinking technology company specializing in AI-powered business solutions, cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge technology to drive growth and innovation."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. We serve clients globally and can work remotely with teams anywhere in the world."
        },
        {
          question: "What industries do you serve?",
          answer: "We work with businesses across all industries including healthcare, finance, manufacturing, retail, technology, and more. Our AI and technology solutions are adaptable to any sector."
        },
        {
          question: "How long has Zion Tech Group been in business?",
          answer: "Zion Tech Group has been delivering innovative technology solutions for over 15 years, helping hundreds of businesses transform their operations and achieve their digital goals."
        }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        {
          question: "What AI services do you offer?",
          answer: "We offer comprehensive AI services including custom AI model development, machine learning implementation, AI-powered automation, natural language processing, computer vision, and AI consulting for business transformation."
        },
        {
          question: "How quickly can you implement AI solutions?",
          answer: "Implementation timelines vary based on complexity. Simple AI integrations can be completed in 2-4 weeks, while complex custom AI systems may take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide training for AI systems?",
          answer: "Yes, we provide comprehensive training for your team on all AI systems we implement. This includes user training, technical documentation, and ongoing support to ensure successful adoption."
        },
        {
          question: "Can you work with existing AI systems?",
          answer: "Absolutely! We can integrate with, enhance, or replace existing AI systems. We'll assess your current setup and recommend the best approach for your business needs."
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      questions: [
        {
          question: "What cloud platforms do you support?",
          answer: "We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We'll recommend the best platform based on your specific requirements and budget."
        },
        {
          question: "How do you ensure cloud security?",
          answer: "We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance frameworks. We follow security best practices and can help you meet industry-specific compliance requirements."
        },
        {
          question: "Can you help migrate from on-premise to cloud?",
          answer: "Yes, cloud migration is one of our core services. We handle the entire process from assessment and planning to execution and optimization, ensuring minimal downtime and maximum efficiency."
        },
        {
          question: "What is your approach to DevOps?",
          answer: "We implement modern DevOps practices including CI/CD pipelines, infrastructure as code, automated testing, and monitoring. This ensures faster deployments, better quality, and improved reliability."
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      questions: [
        {
          question: "What security certifications do you have?",
          answer: "Our team holds various security certifications and we follow industry best practices. We can help you achieve compliance with SOC2, ISO 27001, HIPAA, GDPR, and other relevant standards."
        },
        {
          question: "How do you protect client data?",
          answer: "We implement multiple layers of security including encryption, access controls, regular security audits, and secure development practices. Client data security is our top priority."
        },
        {
          question: "Do you provide security audits?",
          answer: "Yes, we offer comprehensive security audits including vulnerability assessments, penetration testing, compliance reviews, and security recommendations for improvement."
        },
        {
          question: "What happens if there's a security incident?",
          answer: "We have incident response procedures in place and will work with you immediately to contain, investigate, and resolve any security issues. We also provide post-incident analysis and recommendations."
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      icon: Zap,
      questions: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models including subscription plans, project-based pricing, and custom enterprise solutions. Pricing depends on the scope, complexity, and duration of the project."
        },
        {
          question: "Do you offer discounts for long-term contracts?",
          answer: "Yes, we offer volume discounts and special pricing for long-term partnerships. Contact us to discuss custom pricing for your specific needs."
        }
      ]
    },
    {
      title: 'Support & Maintenance',
      icon: HelpCircle,
      questions: [
        {
          question: "What support do you provide after implementation?",
          answer: "We provide comprehensive post-implementation support including technical support, maintenance, updates, and ongoing optimization. Support levels vary by service tier."
        },
        {
          question: "What are your response times for support?",
          answer: "Response times depend on your support tier. Standard support responds within 24 hours, priority support within 4 hours, and enterprise support within 2 hours during business hours."
        },
        {
          question: "Do you provide 24/7 support?",
          answer: "24/7 support is available for enterprise clients and as an add-on service. We also provide emergency support for critical issues outside of business hours."
        },
        {
          question: "How do you handle system updates and maintenance?",
          answer: "We handle all system updates, security patches, and maintenance automatically. We schedule maintenance during low-traffic periods and provide advance notice for any planned downtime."
        }
      ]
    },
    {
      title: 'Security & Compliance',
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
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const contactInfo = [
    {
      icon: HelpCircle,
      title: 'Call Us',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: HelpCircle,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: HelpCircle,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group's AI, cloud, and technology services."
      />

      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find answers to common questions about our AI-powered solutions, cybersecurity services, and cloud infrastructure.
          </motion.p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50"
        >
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          {filteredQuestions.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <faq.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-white font-medium">{faq.question}</span>
                </div>
                {expandedItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {expandedItems.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Contact Us
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Get Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
