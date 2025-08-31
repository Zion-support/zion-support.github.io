import React, { useState } from 'react';
<<<<<<< HEAD
import { Search, ChevronDown, ChevronUp, HelpCircle, Brain, Cloud, Shield, Rocket, Heart, Globe, ShoppingCart, Star, Building, BookOpen, Settings } from 'lucide-react';

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
=======
import { SEO } from '../components/SEO';
=======
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Star,
  Award,
  Globe,
  Lock,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const faqCategories = [
    {
      name: 'General Services',
      icon: Globe,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive technology solutions including AI development, quantum computing consulting, cybersecurity services, cloud infrastructure, custom software development, and digital transformation consulting. Our services are tailored to enterprise needs and designed to drive innovation and efficiency.'
        },
        {
          question: 'Do you work with small businesses or only enterprises?',
          answer: 'While we specialize in enterprise solutions, we work with businesses of all sizes. We can scale our services to meet the needs of small and medium businesses, providing cost-effective solutions that grow with your business.'
        },
        {
          question: 'What industries do you specialize in?',
          answer: 'We have experience across multiple industries including healthcare, finance, manufacturing, retail, logistics, and technology. Our team understands industry-specific challenges and compliance requirements, allowing us to deliver tailored solutions.'
        },
        {
          question: 'How do you ensure project quality and success?',
          answer: 'We follow industry best practices including agile methodologies, continuous testing, regular client communication, and milestone reviews. Our team includes certified professionals with extensive experience in delivering complex technology solutions.'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        }
      ]
    },
    {
<<<<<<< HEAD
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
=======
      name: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        {
          question: 'What types of AI solutions can you develop?',
          answer: 'We develop a wide range of AI solutions including predictive analytics, natural language processing, computer vision, recommendation systems, autonomous systems, and custom AI models. Our solutions are designed to integrate seamlessly with existing systems.'
        },
        {
          question: 'How do you handle data privacy in AI projects?',
          answer: 'Data privacy is paramount in all our AI projects. We implement data anonymization, encryption, access controls, and compliance with regulations like GDPR and HIPAA. We also provide transparent data handling policies and regular privacy audits.'
        },
        {
          question: 'Can you integrate AI with our existing systems?',
          answer: 'Yes, we specialize in integrating AI solutions with existing enterprise systems. We use APIs, microservices, and modern integration patterns to ensure seamless connectivity while maintaining system stability and performance.'
        },
        {
          question: 'How long does it take to develop an AI solution?',
          answer: 'Development time varies based on complexity, ranging from 4-12 weeks for basic AI models to 6-18 months for complex enterprise AI systems. We provide detailed project timelines during the planning phase.'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        }
      ]
    },
    {
<<<<<<< HEAD
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
=======
      name: 'Quantum Computing',
      icon: Zap,
      questions: [
        {
          question: 'What quantum computing services do you offer?',
          answer: 'We offer quantum computing consulting, algorithm development, quantum software development, and integration services. We work with leading quantum hardware providers and can help you explore quantum advantage for specific use cases.'
        },
        {
          question: 'Is quantum computing ready for business use?',
          answer: 'While quantum computing is still emerging, certain applications like optimization, cryptography, and material science are showing promise. We help businesses assess quantum readiness and develop hybrid classical-quantum solutions.'
        },
        {
          question: 'How do you stay current with quantum developments?',
          answer: 'We maintain partnerships with leading quantum research institutions, participate in quantum computing consortia, and have a dedicated team that continuously monitors and evaluates quantum computing advancements and applications.'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        }
      ]
    },
    {
<<<<<<< HEAD
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      items: [
=======
      name: 'Cybersecurity',
      icon: Shield,
      questions: [
        {
          question: 'What cybersecurity services do you provide?',
          answer: 'We provide comprehensive cybersecurity services including security assessments, penetration testing, incident response, compliance consulting, security architecture design, and ongoing security monitoring and management.'
        },
        {
          question: 'How do you stay ahead of emerging threats?',
          answer: 'We maintain threat intelligence feeds, participate in security research communities, conduct regular security research, and continuously update our security practices based on the latest threat landscape and industry best practices.'
        },
        {
          question: 'What compliance standards do you support?',
          answer: 'We support major compliance standards including SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and industry-specific regulations. We can help you achieve and maintain compliance for your specific requirements.'
        }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      questions: [
        {
          question: 'What cloud platforms do you work with?',
          answer: 'We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help you choose the right platform for your needs and optimize costs while maintaining performance and security.'
        },
        {
          question: 'Can you help migrate our existing systems to the cloud?',
          answer: 'Yes, we provide comprehensive cloud migration services including assessment, planning, migration execution, and post-migration optimization. We ensure minimal downtime and maintain data integrity throughout the process.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement multi-layered security including identity and access management, network security, data encryption, monitoring, and compliance controls. We follow cloud security best practices and regularly audit security configurations.'
        }
      ]
    },
    {
      name: 'Support & Maintenance',
      icon: Users,
      questions: [
        {
          question: 'What support options do you offer?',
          answer: 'We offer multiple support tiers including 24/7 emergency support, business hours support, and managed services. Our support includes monitoring, maintenance, updates, and rapid response to issues.'
        },
        {
          question: "What are your response times for support?",
          answer: "Response times depend on your support tier. Standard support responds within 24 hours, priority support within 4 hours, and enterprise support within 2 hours during business hours."
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes! We provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing education as new features are added.'
        },
        {
          question: "How do you handle system updates and maintenance?",
          answer: "We handle all system updates, security patches, and maintenance automatically. We schedule maintenance during low-traffic periods and provide advance notice for any planned downtime."
        }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Lock,
      questions: [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
<<<<<<< HEAD
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
=======
  })).filter(category => category.questions.length > 0);
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];
  return (
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Questions</span>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Find answers to common questions about our services, solutions, and processes
            </p>
<<<<<<< HEAD
            
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
              
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-slate-800 rounded-lg border border-slate-700">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                    >
                      <span className="font-medium text-lg pr-4">{item.question}</span>
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedItems.has(item.id) && (
                      <div className="px-6 pb-6">
                        <div className="text-slate-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No FAQ items found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or browse our help categories
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help.
                Get in touch with us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-colors font-medium"
                >
                  Browse Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
          </motion.div>
        </div>
      </section>
      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-lg"
              />
            </div>
            {searchQuery && (
              <p className="text-center text-gray-400 mt-4">
                Found {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </p>
            )}
          </motion.div>
        </div>
      </section>
      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {faqCategories.map((category, categoryIndex) => {
            const categoryQuestions = searchQuery 
              ? category.questions.filter(q => 
                  q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  q.answer.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : category.questions;
            if (categoryQuestions.length === 0) return null;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {categoryQuestions.map((item, questionIndex) => {
                    const globalIndex = faqCategories
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
                    const isExpanded = expandedItems.has(globalIndex);
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200 rounded-xl"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help. 
              Get in touch with us for personalized assistance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl mb-4">
                  <info.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
=======
    <>
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about our AI, quantum computing, cybersecurity, and technology services. Get comprehensive information about our solutions and support."
        keywords="FAQ, frequently asked questions, AI services, quantum computing, cybersecurity, cloud services, Zion Tech Group, technology consulting"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <MessageCircle className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">FAQ</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Find answers to common questions about our services, processes, and solutions. 
                Can't find what you're looking for? Contact our team for personalized assistance.
              </p>
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan-light" />
                  <input
                    type="text"
                    placeholder="Search questions or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* FAQ Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredCategories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-zion-cyan-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-zion-cyan-light">
                  Try adjusting your search terms or browse all categories below.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-3 rounded-xl bg-zion-purple/20 border border-zion-purple/30">
                            <category.icon className="w-6 h-6 text-zion-purple" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-white">
                              {category.name}
                            </CardTitle>
                            <CardDescription className="text-zion-cyan-light">
                              {category.questions.length} questions
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.questions.map((item, questionIndex) => {
                            const key = `${categoryIndex}-${questionIndex}`;
                            const isOpen = openItems[key];
                            return (
                              <motion.div
                                key={questionIndex}
                                initial={false}
                                animate={{ height: isOpen ? 'auto' : 'auto' }}
                                className="border border-white/10 rounded-lg overflow-hidden"
                              >
                                <button
                                  onClick={() => toggleItem(categoryIndex, questionIndex)}
                                  className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                                >
                                  <span className="font-medium text-white pr-4">
                                    {item.question}
                                  </span>
                                  {isOpen ? (
                                    <ChevronUp className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                                  )}
                                </button>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                                        <p className="text-zion-cyan-light leading-relaxed">
                                          {item.answer}
                                        </p>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Our team of experts is here to help. Contact us for personalized assistance 
                and detailed information about our services and solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {info.title}
                      </h3>
                      <p className="text-zion-cyan font-medium mb-2">
                        {info.value}
                      </p>
                      <p className="text-zion-cyan-light text-sm mb-4">
                        {info.description}
                      </p>
                      {info.action && (
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white"
                        >
                          <a href={info.action}>
                            {info.title}
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology solutions can transform your business. 
                Schedule a consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};
export default FAQ;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
