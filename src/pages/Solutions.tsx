import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Building2,
  Users,
  Rocket,
  Shield,
  Heart,
  DollarSign,
  Factory,
  ShoppingCart,
  GraduationCap,
  Truck,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Award
} from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI and IT solutions for large organizations with complex infrastructure needs.',
      path: '/solutions/enterprise',
      features: ['Scalable AI Infrastructure', 'Enterprise Security', '24/7 Support', 'Custom Integration']
    },
    {
      icon: Users,
      title: 'SMB Solutions',
      description: 'Tailored technology solutions designed specifically for small and medium-sized businesses.',
      path: '/solutions/smb',
      features: ['Cost-Effective Solutions', 'Quick Deployment', 'Dedicated Support', 'Growth Scalability']
    },
    {
      icon: Rocket,
      title: 'Startup Solutions',
      description: 'Agile and innovative technology solutions to help startups scale rapidly and efficiently.',
      path: '/solutions/startup',
      features: ['Rapid Prototyping', 'MVP Development', 'Funding Support', 'Mentorship Programs']
    },
    {
      icon: Shield,
      title: 'Government Solutions',
      description: 'Secure and compliant technology solutions meeting government standards and requirements.',
      path: '/solutions/government',
      features: ['Security Compliance', 'Data Sovereignty', 'Audit Support', 'Government Standards']
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions designed specifically for healthcare organizations.',
      path: '/solutions/healthcare',
      features: ['HIPAA Compliance', 'Patient Data Security', 'Medical AI', 'Regulatory Support']
    },
    {
      icon: DollarSign,
      title: 'Financial Solutions',
      description: 'Advanced fintech solutions with robust security and compliance for financial institutions.',
      path: '/solutions/financial',
      features: ['Financial Compliance', 'Fraud Detection', 'Risk Management', 'Payment Processing']
    },
    {
      icon: Factory,
      title: 'Manufacturing Solutions',
      description: 'IoT and AI-driven solutions to optimize manufacturing processes and increase efficiency.',
      path: '/solutions/manufacturing',
      features: ['Process Optimization', 'Predictive Maintenance', 'Quality Control', 'Supply Chain AI']
    },
    {
      icon: ShoppingCart,
      title: 'Retail Solutions',
      description: 'Customer-centric AI solutions to enhance retail experiences and boost sales.',
      path: '/solutions/retail',
      features: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Omnichannel Solutions']
    },
    {
      icon: GraduationCap,
      title: 'Education Solutions',
      description: 'Innovative educational technology solutions to enhance learning experiences.',
      path: '/solutions/education',
      features: ['Learning Analytics', 'Adaptive Learning', 'Virtual Classrooms', 'Student Engagement']
    },
    {
      icon: Truck,
      title: 'Transportation Solutions',
      description: 'Smart transportation solutions leveraging AI and IoT for logistics optimization.',
      path: '/solutions/transportation',
      features: ['Route Optimization', 'Fleet Management', 'Predictive Analytics', 'Smart Logistics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group | AI & IT Solutions for Every Industry</title>
        <meta
          name="description"
          content="Discover comprehensive AI and IT solutions tailored for every industry. From enterprise to startup, healthcare to financial services - we have the right solution for your business."
        />
        <meta
          name="keywords"
          content="AI solutions, IT solutions, enterprise solutions, SMB solutions, startup solutions, healthcare AI, financial technology, manufacturing AI, retail solutions, education technology, transportation AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Solutions for Every Industry
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Discover how our cutting-edge AI and IT solutions can transform your business, 
                regardless of your industry or company size.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Industry-Specific Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Scalable Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Support</span>
                </div>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.path}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <solution.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={solution.path}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Solutions */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Zion Tech Group Solutions?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our solutions are built on cutting-edge technology and backed by years of industry expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Technology</h3>
                <p className="text-slate-300">
                  We leverage the latest AI, machine learning, and cloud technologies to deliver superior results.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Industry Expertise</h3>
                <p className="text-slate-300">
                  Our team has deep knowledge across multiple industries and understands your unique challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-slate-300">
                  We have a track record of delivering measurable results and ROI for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Find Your Perfect Solution?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let our experts help you identify the best solution for your specific needs and industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Get Custom Solution
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Solutions;