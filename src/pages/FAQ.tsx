import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, MessageCircle, Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['general-1']));

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        {
          id: 'general-1',
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud infrastructure, cybersecurity, and innovative digital transformation services. We help businesses leverage cutting-edge technology to achieve their goals and stay competitive in the digital age.'
        },
        {
          id: 'general-2',
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and more. Our solutions are designed to be adaptable and scalable across different business sectors.'
        },
        {
          id: 'general-3',
          question: 'Where are you located?',
          answer: 'Our headquarters is located in the United States, and we serve clients globally. We have a distributed team that allows us to provide 24/7 support and services to clients worldwide.'
        },
        {
          id: 'general-4',
          question: 'How long have you been in business?',
          answer: 'Zion Tech Group has been at the forefront of technology innovation for several years, continuously evolving and adapting to meet the changing needs of our clients and the technology landscape.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      items: [
        {
          id: 'services-1',
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including AI Business Intelligence, AI Sales Copilot, AI Compliance Assistant, LLM Content Studio, AI Workflow Orchestrator, and AI Data Governance. Our AI solutions are designed to automate processes, provide insights, and enhance decision-making.'
        },
        {
          id: 'services-2',
          question: 'Do you provide cloud and DevOps services?',
          answer: 'Yes, we offer full-stack cloud and DevOps services including infrastructure setup, CI/CD pipeline configuration, monitoring and observability, cost optimization with FinOps, and edge computing solutions. We work with major cloud providers and can help optimize your cloud strategy.'
        },
        {
          id: 'services-3',
          question: 'What cybersecurity solutions do you provide?',
          answer: 'Our cybersecurity portfolio includes AI-powered security solutions, Zero Trust Network Architecture, compliance automation, threat detection and response, and comprehensive security audits. We help organizations build robust security postures.'
        },
        {
          id: 'services-4',
          question: 'What are Micro SaaS solutions?',
          answer: 'Micro SaaS solutions are specialized, productized software services designed for specific business needs. We offer solutions like AI Lead Scoring, Website AI Chatbot, RAG Search, MLOps Pipeline, and many more that can be quickly deployed and scaled.'
        }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      items: [
        {
          id: 'ai-1',
          question: 'How do I get started with AI integration?',
          answer: 'Getting started with AI integration involves several steps: 1) Assessment of your current systems and data, 2) Identification of use cases and opportunities, 3) Pilot project implementation, 4) Training and adoption, 5) Scaling and optimization. Our team guides you through each step.'
        },
        {
          id: 'ai-2',
          question: 'What data requirements do you have for AI projects?',
          answer: 'Data requirements vary by project type, but generally include: clean, structured data in sufficient quantities, proper data governance and security measures, and clear business objectives. We can help assess your data readiness and recommend improvements.'
        },
        {
          id: 'ai-3',
          question: 'How do you ensure AI model accuracy and fairness?',
          answer: 'We implement rigorous testing protocols, bias detection algorithms, continuous monitoring, and regular model updates. Our AI solutions include explainability features and are designed with ethical AI principles in mind.'
        },
        {
          id: 'ai-4',
          question: 'Can you integrate with existing AI tools?',
          answer: 'Yes, we specialize in integrating with existing AI tools and platforms. We can work with your current infrastructure, APIs, and tools to create seamless workflows and avoid vendor lock-in.'
        }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-indigo-600',
      items: [
        {
          id: 'cloud-1',
          question: 'Which cloud providers do you support?',
          answer: 'We support all major cloud providers including AWS, Azure, Google Cloud Platform, and hybrid cloud solutions. We can help you choose the right provider for your needs or implement multi-cloud strategies.'
        },
        {
          id: 'cloud-2',
          question: 'How do you handle cloud cost optimization?',
          answer: 'We use FinOps principles and tools to monitor, analyze, and optimize cloud costs. This includes rightsizing resources, implementing auto-scaling, using reserved instances, and identifying cost-saving opportunities.'
        },
        {
          id: 'cloud-3',
          question: 'What DevOps tools and practices do you implement?',
          answer: 'We implement modern DevOps practices including CI/CD pipelines, Infrastructure as Code, automated testing, monitoring and alerting, and deployment strategies. We work with tools like Jenkins, GitLab, Terraform, Kubernetes, and more.'
        },
        {
          id: 'cloud-4',
          question: 'How do you ensure security in cloud deployments?',
          answer: 'Security is built into every layer of our cloud deployments through secure coding practices, automated security scanning, compliance frameworks, and continuous security monitoring. We follow industry best practices and compliance standards.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      items: [
        {
          id: 'security-1',
          question: 'What security certifications do you have?',
          answer: 'We maintain various security certifications and comply with industry standards including SOC 2, ISO 27001, GDPR, HIPAA, and others. Our security practices are regularly audited and updated.'
        },
        {
          id: 'security-2',
          question: 'How do you protect client data?',
          answer: 'We implement multiple layers of security including encryption at rest and in transit, access controls, regular security audits, and compliance with data protection regulations. Client data security is our top priority.'
        },
        {
          id: 'security-3',
          question: 'What is your incident response process?',
          answer: 'We have a comprehensive incident response plan that includes immediate containment, investigation, communication protocols, recovery procedures, and post-incident analysis to prevent future occurrences.'
        },
        {
          id: 'security-4',
          question: 'Do you provide compliance consulting?',
          answer: 'Yes, we provide comprehensive compliance consulting services including gap analysis, policy development, implementation support, and ongoing compliance monitoring for various regulatory frameworks.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Billing',
      icon: Star,
      color: 'from-yellow-600 to-orange-600',
      items: [
        {
          id: 'pricing-1',
          question: 'How do you structure your pricing?',
          answer: 'Our pricing is typically structured based on the scope of work, complexity of the solution, and ongoing support requirements. We offer flexible pricing models including project-based, subscription, and usage-based pricing.'
        },
        {
          id: 'pricing-2',
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create a tailored solution that meets your specific requirements and budget.'
        },
        {
          id: 'pricing-3',
          question: 'What payment terms do you offer?',
          answer: 'We offer flexible payment terms including upfront payments, milestone-based payments, and monthly/quarterly billing for ongoing services. We work with clients to find payment arrangements that work for their business.'
        },
        {
          id: 'pricing-4',
          question: 'Are there any hidden costs?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals and contracts. We communicate any potential additional costs upfront and get approval before proceeding.'
        }
      ]
    }
  ];

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our AI-powered technology solutions, 
              cloud services, and digital transformation offerings.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search FAQ topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              {expandedItems.has(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="pl-10">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help. Get in touch with us for personalized 
            assistance and detailed information about our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-2" />
              <p className="text-white font-semibold">Email Support</p>
              <p className="text-gray-300 text-sm">support@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-2" />
              <p className="text-white font-semibold">Phone Support</p>
              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-green-400 mb-2" />
              <p className="text-white font-semibold">Live Chat</p>
              <p className="text-gray-300 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
