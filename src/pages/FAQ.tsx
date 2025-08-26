import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Users, 
  ShoppingCart, 
  Shield, 
  Zap, 
  Globe,
  ChevronDown,
  Search,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I create an account on Zion?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a client looking for services or talent offering your skills. Fill in your basic information and verify your email to get started."
        },
        {
          question: "What types of accounts can I create?",
          answer: "Zion offers two main account types: Client accounts for businesses and individuals seeking AI and tech services, and Talent accounts for professionals offering their expertise in AI, development, design, and other tech fields."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We believe in democratizing access to AI and tech solutions, so there are no subscription fees or hidden costs for using our platform."
        }
      ]
    },
    {
      title: "For Talent & Creators",
      icon: Users,
      questions: [
        {
          question: "How do I showcase my skills and services?",
          answer: "Create a comprehensive profile highlighting your expertise, experience, and portfolio. You can list specific services, set your rates, and showcase your previous work. Our AI-powered system will help match you with relevant opportunities."
        },
        {
          question: "What types of projects can I find on Zion?",
          answer: "Zion features a wide range of projects including AI development, machine learning, software development, IT consulting, data analysis, cybersecurity, and specialized tech services. Projects range from short-term gigs to long-term contracts."
        },
        {
          question: "How do I get hired?",
          answer: "Clients can find you through our search and matching system, or you can proactively apply to job postings. Make sure your profile is complete and showcases your best work to increase your chances of getting hired."
        }
      ]
    },
    {
      title: "For Clients & Businesses",
      icon: ShoppingCart,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Use our advanced search and filtering system to find professionals based on skills, experience, location, and availability. You can also post detailed job requirements and let qualified talent come to you."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a comprehensive range of AI and tech services including custom AI development, machine learning solutions, software development, IT consulting, cybersecurity, data analysis, cloud services, and much more."
        },
        {
          question: "How do payments and contracts work?",
          answer: "We provide secure payment processing, milestone-based payment systems, and contract templates. You can set project milestones, track progress, and release payments as work is completed."
        }
      ]
    },
    {
      title: "AI & Technology",
      icon: Globe,
      questions: [
        {
          question: "What AI technologies does Zion support?",
          answer: "Zion supports a wide range of AI technologies including machine learning, natural language processing, computer vision, robotics, predictive analytics, and custom AI solutions. Our platform connects you with experts in all these areas."
        },
        {
          question: "Can I get custom AI solutions developed?",
          answer: "Absolutely! Zion connects you with AI developers and data scientists who can create custom solutions tailored to your specific needs, whether it's a simple chatbot or a complex machine learning system."
        },
        {
          question: "How do I ensure the quality of AI solutions?",
          answer: "All talent on Zion is verified and rated. You can review portfolios, check ratings and reviews, and even request sample work before hiring. Our platform also provides quality assurance tools and dispute resolution."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      questions: [
        {
          question: "How secure is my data on Zion?",
          answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data centers, and regular security audits. Your data is protected and never shared with third parties without your consent."
        },
        {
          question: "What privacy controls do I have?",
          answer: "You have full control over your data and privacy settings. You can choose what information to share, control who can see your profile, and request deletion of your data at any time."
        },
        {
          question: "How do you protect intellectual property?",
          answer: "We have strict policies and tools to protect intellectual property. All agreements include IP protection clauses, and we provide secure collaboration tools to ensure your ideas and work remain protected."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.questions.some(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about Zion Tech Group's platform, services, and how to get started.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zion-blue-light/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-zion-cyan transition-transform duration-200 ${
                      expandedCategory === category.title ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedCategory === category.title && (
                  <div className="px-6 pb-6">
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-zion-slate-dark/50 rounded-lg p-4 border border-zion-slate-light/10">
                          <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                          <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-zion-slate-light">Try adjusting your search terms or browse all categories above.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help with any questions or concerns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-zion-slate-light text-sm mb-3">Get help via email</p>
              <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                support@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <MessageSquare className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-3">Chat with our team</p>
              <button className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-zion-slate-light text-sm mb-3">Call us directly</p>
              <a href="tel:+1-800-ZION-TECH" className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                +1-800-ZION-TECH
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Support
            </Link>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
