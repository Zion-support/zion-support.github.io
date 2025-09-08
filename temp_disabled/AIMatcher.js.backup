<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
export default function AIMatcher() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "AI Talent Matcher - Zion Tech Group", description: "Find the perfect tech talent using our AI-powered matching system.", canonical: "https://ziontechgroup.com/match" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "AI Talent Matcher" }), _jsx("p", { className: "text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto", children: "Our advanced AI system analyzes your requirements and matches you with the perfect tech talent from our curated network." })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Coming Soon" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Our AI-powered talent matching system is currently under development. This innovative feature will revolutionize how you find and connect with tech professionals." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx("span", { className: "text-2xl", children: "\uD83E\uDD16" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "AI Analysis" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Advanced algorithms analyze project requirements and talent profiles" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx("span", { className: "text-2xl", children: "\uD83C\uDFAF" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Smart Matching" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Intelligent matching based on skills, experience, and project needs" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-cyan-light/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx("span", { className: "text-2xl", children: "\u26A1" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Instant Results" }), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Get matched with qualified talent in seconds, not days" })] })] })] }) })] }) }), _jsx(Footer, {})] }));
}
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, TrendingUp, Users, Cloud, CheckCircle, ArrowRight } from 'lucide-react';
const AIMatcher = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const questions = [
        {
            id: 'industry',
            question: 'What industry are you in?',
            options: [
                'Technology & Software',
                'Healthcare & Life Sciences',
                'Financial Services',
                'Manufacturing & Industrial',
                'Retail & E-commerce',
                'Education & Training',
                'Government & Public Sector',
                'Other'
            ]
        },
        {
            id: 'company_size',
            question: 'What is your company size?',
            options: [
                'Startup (1-50 employees)',
                'Small Business (51-200 employees)',
                'Medium Business (201-1000 employees)',
                'Enterprise (1000+ employees)'
            ]
        },
        {
            id: 'ai_goals',
            question: 'What are your primary AI goals?',
            options: [
                'Automate repetitive tasks',
                'Improve customer experience',
                'Enhance decision making',
                'Optimize operations',
                'Increase revenue',
                'Reduce costs',
                'Innovate products/services'
            ]
        },
        {
            id: 'budget',
            question: 'What is your budget range for AI implementation?',
            options: [
                'Under $10,000',
                '$10,000 - $50,000',
                '$50,000 - $200,000',
                '$200,000 - $1,000,000',
                'Over $1,000,000'
            ]
        },
        {
            id: 'timeline',
            question: 'What is your implementation timeline?',
            options: [
                'Immediate (0-3 months)',
                'Short-term (3-6 months)',
                'Medium-term (6-12 months)',
                'Long-term (1+ years)'
            ]
        }
    ];
    const aiSolutions = [
        {
            name: 'AI Business Intelligence',
            description: 'Advanced analytics and business intelligence powered by artificial intelligence',
            category: 'Analytics & Insights',
            bestFor: ['Data-driven decision making', 'Performance tracking', 'Market analysis'],
            features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
            href: '/services/ai-business-intelligence',
            icon: TrendingUp
        },
        {
            name: 'AI Marketing Automation',
            description: 'Intelligent marketing automation with AI-driven optimization',
            category: 'Marketing & Sales',
            bestFor: ['Customer acquisition', 'Campaign optimization', 'Lead generation'],
            features: ['Campaign Automation', 'Customer Segmentation', 'ROI Optimization'],
            href: '/services/ai-marketing-automation',
            icon: Target
        },
        {
            name: 'AI Workflow Automation',
            description: 'Streamline business processes with intelligent automation',
            category: 'Process Automation',
            bestFor: ['Operational efficiency', 'Error reduction', 'Cost savings'],
            features: ['Process Optimization', 'Workflow Design', 'Integration'],
            href: '/services/ai-workflow-automation',
            icon: Zap
        },
        {
            name: 'AI-Powered IT Asset Management',
            description: 'Intelligent IT asset lifecycle management',
            category: 'IT Management',
            bestFor: ['Asset optimization', 'Cost management', 'Compliance'],
            features: ['Asset Tracking', 'Predictive Maintenance', 'Cost Analytics'],
            href: '/ai-powered-it-asset-management',
            icon: Cloud
        },
        {
            name: 'Autonomous Business Operations',
            description: 'AI-driven business process automation platform',
            category: 'Business Operations',
            bestFor: ['End-to-end automation', 'Scalability', 'Innovation'],
            features: ['Process Automation', 'Decision Support', 'Performance Analytics'],
            href: '/autonomous-business-operations-platform',
            icon: Brain
        },
        {
            name: 'AI Customer Service Automation',
            description: 'Intelligent customer service and support automation',
            category: 'Customer Experience',
            bestFor: ['24/7 support', 'Response time improvement', 'Customer satisfaction'],
            features: ['Chatbot Integration', 'Ticket Routing', 'Knowledge Management'],
            href: '/services/ai-customer-service-automation',
            icon: Users
        }
    ];
    const handleAnswer = (questionId, answer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };
    const handleNext = () => {
        if (currentStep < questions.length) {
            setCurrentStep(currentStep + 1);
        }
        else {
            generateRecommendations();
        }
    };
    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const generateRecommendations = () => {
        // Simple recommendation logic based on answers
        const industry = answers.industry;
        const companySize = answers.company_size;
        const goals = answers.ai_goals;
        let filteredSolutions = aiSolutions;
        // Filter based on industry
        if (industry === 'Healthcare & Life Sciences') {
            filteredSolutions = filteredSolutions.filter(s => s.name.includes('Healthcare') || s.category === 'Analytics & Insights');
        }
        else if (industry === 'Financial Services') {
            filteredSolutions = filteredSolutions.filter(s => s.name.includes('Financial') || s.category === 'Analytics & Insights');
        }
        // Filter based on company size
        if (companySize === 'Startup (1-50 employees)') {
            filteredSolutions = filteredSolutions.filter(s => s.name.includes('Micro') || s.name.includes('Workflow'));
        }
        // Filter based on goals
        if (goals === 'Automate repetitive tasks') {
            filteredSolutions = filteredSolutions.filter(s => s.category === 'Process Automation');
        }
        else if (goals === 'Improve customer experience') {
            filteredSolutions = filteredSolutions.filter(s => s.category === 'Customer Experience');
        }
        setRecommendations(filteredSolutions.slice(0, 3));
        setCurrentStep(questions.length + 1);
    };
    const resetQuiz = () => {
        setCurrentStep(1);
        setAnswers({});
        setRecommendations([]);
    };
    const progressPercentage = (currentStep / questions.length) * 100;
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"/>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <Brain className="w-10 h-10 text-white"/>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI Solution Matcher
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Answer a few questions and discover the perfect AI solutions for your business needs. 
              Our intelligent matching system will recommend the most suitable technologies for your goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {currentStep <= questions.length ? (<motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Question {currentStep} of {questions.length}</span>
                <span className="text-sm text-gray-400">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {questions[currentStep - 1].question}
              </h2>
              
              <div className="space-y-3">
                {questions[currentStep - 1].options.map((option, index) => (<button key={index} onClick={() => handleAnswer(questions[currentStep - 1].id, option)} className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${answers[questions[currentStep - 1].id] === option
                    ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                    : 'border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white hover:bg-slate-700/50'}`}>
                    {option}
                  </button>))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button onClick={handlePrevious} disabled={currentStep === 1} className={`px-6 py-2 rounded-lg border transition-all duration-200 ${currentStep === 1
                ? 'border-slate-600 text-slate-500 cursor-not-allowed'
                : 'border-slate-500 text-slate-300 hover:border-slate-400 hover:text-white'}`}>
                Previous
              </button>
              
              <button onClick={handleNext} disabled={!answers[questions[currentStep - 1].id]} className={`px-6 py-2 rounded-lg transition-all duration-200 ${!answers[questions[currentStep - 1].id]
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'}`}>
                {currentStep === questions.length ? 'Get Recommendations' : 'Next'}
              </button>
            </div>
          </motion.div>) : (
        /* Results Section */
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-white"/>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Your AI Recommendations</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Based on your answers, here are the AI solutions that best match your business needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((solution, index) => (<motion.div key={solution.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
                      <p className="text-sm text-blue-400">{solution.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Best For:</h4>
                    <ul className="space-y-1">
                      {solution.bestFor.map((item, idx) => (<li key={idx} className="flex items-center text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {item}
                        </li>))}
                    </ul>
                  </div>
                  
                  <Link to={solution.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"/>
                  </Link>
                </motion.div>))}
            </div>

            <div className="text-center mt-12">
              <button onClick={resetQuiz} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 mr-4">
                Take Quiz Again
              </button>
              <Link to="/contact" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Get Expert Consultation
              </Link>
            </div>
          </motion.div>)}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need More Personalized Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI experts are ready to provide customized recommendations and implementation strategies 
              tailored specifically to your business requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Schedule Free Consultation
              </Link>
              <Link to="/services-showcase" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);
};
export default AIMatcher;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
