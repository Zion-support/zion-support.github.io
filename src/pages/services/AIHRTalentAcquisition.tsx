import React from 'react.ts';
import { SEO  } from '@/components/SEO';
import { motion  } from 'framer-motion.ts';
import { Users, 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Search, 
  Briefcase, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Cpu,
  Filter
 } from 'lucide-react.ts';

const AIHRTalentAcquisition: React.FC = (): JSX.Element => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms that match candidates to job requirements with 94% accuracy using skills, experience, and cultural fit analysis."
    },
    {
      icon: Search,
      title: "Intelligent Sourcing",
      description: "Automated candidate discovery across multiple platforms, social networks, and databases to find passive talent."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights into candidate success probability, time-to-hire optimization, and recruitment funnel performance."
    },
    {
      icon: Filter,
      title: "Smart Screening",
      description: "Automated resume parsing, skill assessment, and initial screening to reduce manual review time by 70%."
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 40-60%",
    "Improve candidate quality by 35%",
    "Reduce recruitment costs by 30%",
    "Increase diversity in hiring by 45%",
    "Automate 80% of screening processes"
  ];

  const useCases = [
    "Corporate Recruiting",
    "Tech Hiring",
    "Healthcare Staffing",
    "Sales & Marketing",
    "Executive Search",
    "Contract Staffing"
  ];

  const integrations = [
    "LinkedIn, Indeed, Glassdoor",
    "Workday, BambooHR, ADP",
    "Greenhouse, Lever, Workable",
    "Slack, Microsoft Teams, Email",
    "Calendly, Zoom, Google Meet"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$399",
      period: "/month",
      features: ["Up to 50 active jobs", "Basic AI matching", "Resume parsing", "Standard support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$899",
      period: "/month",
      features: ["Up to 200 active jobs", "Advanced AI models", "Predictive analytics", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited jobs", "Custom AI models", "White-label solution", "Dedicated support", "SLA guarantees"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI HR Talent Acquisition Platform - Zion Tech Group"
        description="Transform your hiring process with AI-powered talent acquisition. Reduce time-to-hire by 40-60%, improve candidate quality by 35%, and automate 80% of screening processes."
        keywords="talent acquisition, AI recruiting, HR automation, candidate matching, recruitment software, hiring platform"
        canonical="https://ziontechgroup.com/services/ai-hr-talent-acquisition"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-800 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Talent Acquisition Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI HR Talent Acquisition
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Revolutionize your hiring process with AI-powered talent acquisition. Find the best candidates faster, reduce costs, and build stronger teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-cyan-400 font-semibold">
                <Star className="w-5 h-5 mr-2 fill-current" />
                4.9/5 Rating
              </div>
              <div className="flex items-center text-green-400 font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                94% Accuracy
              </div>
              <div className="flex items-center text-blue-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                40-60% Faster Hiring
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence designed to transform every aspect of your talent acquisition process
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Measurable Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers quantifiable improvements across your entire recruitment process
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored AI recruitment solutions for various industries and hiring needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md: grid-cols-3 gap-6">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing HR systems, job boards, and communication tools
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index)  => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-indigo-500 transition-colors"
              >
                <p className="text-slate-300 text-sm font-medium">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your hiring volume and recruitment needs
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index)  => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 150+ companies that have revolutionized their recruitment process with our AI-powered talent acquisition platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="font-semibold">Starting at $399/month</p>
                <p className="text-sm">No setup fees, cancel time</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="font-semibold">Setup in 24 hours</p>
                <p className="text-sm">Quick integration with your HR systems</p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">Enterprise Security</p>
                <p className="text-sm">SOC 2, GDPR, ISO 27001 compliant</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
              </p>
              <p className="text-slate-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRTalentAcquisition;