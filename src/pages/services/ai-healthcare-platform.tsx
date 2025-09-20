import React from 'react';
import SEO from '../../components/SEO';
import { 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  Stethoscope,
  Microscope,
  Pill,
  Activity,
  Database,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  AlertTriangle,
  FileText,
  BarChart3
} from 'lucide-react';

const AIHealthcarePlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis'
    },
    {
      icon: Heart,
      title: 'Patient Monitoring',
      description: 'Real-time health monitoring with predictive analytics and early warning systems'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance and data protection'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant insights and actionable intelligence for healthcare providers'
    },
    {
      icon: Users,
      title: 'Multi-user Access',
      description: 'Role-based access control for doctors, nurses, and administrators'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock monitoring and support for critical care scenarios'
    }
  ];

  const solutions = [
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description: 'AI-powered recommendations for treatment plans and medication management'
    },
    {
      icon: Microscope,
      title: 'Medical Imaging Analysis',
      description: 'Computer vision for X-rays, MRIs, and CT scans with 99.9% accuracy'
    },
    {
      icon: Pill,
      title: 'Drug Interaction Checker',
      description: 'Real-time medication interaction analysis and dosage optimization'
    },
    {
      icon: Activity,
      title: 'Vital Signs Monitoring',
      description: 'Continuous monitoring of heart rate, blood pressure, and oxygen levels'
    },
    {
      icon: Database,
      title: 'Electronic Health Records',
      description: 'Intelligent EHR system with natural language processing capabilities'
    },
    {
      icon: Lock,
      title: 'Secure Data Exchange',
      description: 'Blockchain-based secure sharing of patient data between facilities'
    }
  ];

  const benefits = [
    'Reduce diagnostic errors by up to 85%',
    'Improve patient outcomes by 60%',
    'Cut healthcare costs by 30%',
    'Increase operational efficiency by 45%',
    'Enable early disease detection',
    'Streamline administrative processes'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare platform with advanced diagnostics, patient monitoring, and clinical decision support. HIPAA compliant and enterprise-ready."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionizing healthcare with artificial intelligence. Our platform combines advanced AI, 
              machine learning, and medical expertise to deliver unprecedented diagnostic accuracy, 
              patient monitoring, and clinical decision support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers cutting-edge healthcare solutions that improve patient outcomes 
              and streamline medical operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From diagnostics to patient care, our platform covers every aspect of modern healthcare delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-200">
                  <solution.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Healthcare Delivery
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of healthcare with our AI-powered platform that delivers 
                measurable improvements in patient care and operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 bg-slate-800/50 border border-cyan-400/20 rounded-xl">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                      <div className="text-gray-400">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">85%</div>
                      <div className="text-gray-400">Error Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">60%</div>
                      <div className="text-gray-400">Outcome Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">30%</div>
                      <div className="text-gray-400">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading healthcare institutions that are already transforming patient care 
            with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg">
              Schedule Demo
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcarePlatform;