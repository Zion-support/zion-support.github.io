import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Users, ShoppingCart, Shield, Zap, Globe } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: FAQItem[];
}
const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
  const toggleCategory = (title: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(title)) {
      newOpenCategories.delete(title);
    } else {
      newOpenCategories.add(title);
    }
    setOpenCategories(newOpenCategories);
  };
  const faqCategories: FAQCategory[] = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
        },
        {
          question: "How does the AI talent matching work?",
          answer: "Our AI-powered matching system analyzes your project requirements, budget, and timeline to connect you with the most suitable tech professionals. The system considers skills, experience, availability, and past performance to ensure optimal matches."
        },
        {
          question: "What types of services do you offer?",
          answer: "We offer a wide range of services including AI development, software engineering, IT consulting, equipment rental, green IT solutions, and specialized tech services. Our marketplace covers everything from individual freelancers to enterprise solutions."
        },
        {
          question: "Is Zion Tech Group free to use?",
          answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. Some premium features and enterprise solutions may have associated costs."
        }
      ]
    },
    {
      title: "For Talent & Creators",
      icon: Users,
      questions: [
        {
          question: "How do I get started as a client?",
          answer: "Simply create an account, post your project requirements, and our AI will match you with suitable talent. You can also browse our talent directory, equipment listings, and service categories to find what you need."
        },
        {
          question: "What types of services can I offer?",
          answer: "You can offer any tech-related service including AI development, software engineering, data science, IT consulting, cybersecurity, cloud services, and more. We support both technical and business services."
        },
        {
          question: "How do I get hired?",
          answer: "Optimize your profile with relevant keywords, showcase your best work, and actively respond to client inquiries. You can also browse available projects and submit proposals to clients who match your skills."
        }
      ]
    },
    {
      title: "For Clients & Businesses",
      icon: ShoppingCart,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Use our search and filter tools to find professionals with the specific skills you need. You can also post detailed project requirements and let qualified talent come to you with proposals."
        },
        {
          question: "What types of projects can I post?",
          answer: "You can post any tech-related project including AI development, software development, IT consulting, data analysis, cybersecurity assessments, and more. Be specific about your requirements and timeline."
        },
        {
          question: "How do payments work?",
          answer: "We offer secure milestone-based payments. Set up payment milestones for your project, and funds are released as each milestone is completed and approved. This protects both clients and talent."
        }
      ]
    },
    {
      title: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How do you verify talent and clients?",
          answer: "We implement a comprehensive verification system including identity verification, skill assessments, portfolio reviews, and client feedback. All users must verify their email and can optionally complete additional verification steps."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "We have a dedicated dispute resolution team that helps mediate conflicts between clients and talent. We review project details, communication records, and deliverables to ensure fair outcomes for all parties."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use enterprise-grade security measures including encryption, secure payment processing, and regular security audits. We never share your personal information with third parties without your consent."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: Globe,
      questions: [
        {
          question: "What AI-powered features do you offer?",
          answer: "Our platform includes AI-powered talent matching, automated project recommendations, intelligent search algorithms, and predictive analytics to help you find the best matches for your needs."
        },
        {
          question: "Can I integrate with other tools?",
          answer: "Yes, we offer API access and integrations with popular project management tools, communication platforms, and payment systems. Enterprise clients can also request custom integrations."
        },
        {
          question: "Do you offer mobile apps?",
          answer: "Yes, we have mobile apps for both iOS and Android that provide full access to all platform features, including real-time messaging, project updates, and mobile-optimized browsing."
        }
      ]
    }
  ];
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );
  const filteredQuestions = allQuestions.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCategories = faqCategories.filter(category =>
    category.questions.some(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2"/>
            FAQ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions about Zion Tech Group's AI marketplace, 
            services, and platform features.
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        {/* Search Results */}
        {searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Search Results ({filteredQuestions.length})
            </h2>
            <div className="space-y-4">
              {filteredQuestions.map((item, index) => (
                <div key={index} className="bg-slate-800/50 border border-white/10 rounded-lg p-6">
                  <div className="text-sm text-green-400 mb-2">{item.category}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* FAQ Categories */}
        {!searchTerm && (
          <div className="space-y-6">
            {faqCategories.map((category) => (
              <div key={category.title} className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                  </div>
                  {openCategories.has(category.title) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openCategories.has(category.title) && (
                  <div className="border-t border-white/10">
                    <div className="p-6 space-y-6">
                      {category.questions.map((item, index) => (
                        <div key={index} className="border-l-4 border-green-500/50 pl-4">
                          <h3 className="text-lg font-semibold text-white mb-3">
                            {item.question}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Contact Support */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/support" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Support
            </a>
            <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
