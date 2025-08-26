import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  Rocket,
  Target
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'AI & Machine Learning Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations and drive innovation.',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Machine learning pipeline optimization',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics and forecasting',
        'AI-powered automation'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Cost reduction through automation',
        'Competitive advantage through AI'
      ],
      useCases: [
        'Customer service chatbots',
        'Predictive maintenance',
        'Fraud detection systems',
        'Recommendation engines',
        'Process automation'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.',
      icon: Shield,
      features: [
        'Threat detection and response',
        'Vulnerability assessment and management',
        'Security architecture design',
        'Incident response planning',
        'Compliance and audit support',
        'Security awareness training'
      ],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance',
        'Reduced security risks',
        'Enhanced customer trust'
      ],
      useCases: [
        'Enterprise security infrastructure',
        'Cloud security implementation',
        'Data protection and privacy',
        'Security operations center',
        'Compliance frameworks'
      ]
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions that enable modern applications and support business growth.',
      icon: Cloud,
      features: [
        'Cloud migration and strategy',
        'Multi-cloud architecture design',
        'DevOps and CI/CD implementation',
        'Container orchestration',
        'Serverless computing',
        'Cloud cost optimization'
      ],
      benefits: [
        'Scalability and flexibility',
        'Reduced infrastructure costs',
        'Improved performance and reliability',
        'Faster time to market'
      ],
      useCases: [
        'Application modernization',
        'Data center consolidation',
        'Disaster recovery solutions',
        'High-performance computing',
        'Global application deployment'
      ]
    },
    {
      id: 4,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation to modernize your business processes.',
      icon: Zap,
      features: [
        'Digital strategy development',
        'Process optimization and automation',
        'Legacy system modernization',
        'Change management consulting',
        'Digital workplace solutions',
        'Customer experience transformation'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Increased market competitiveness',
        'Future-ready business model'
      ],
      useCases: [
        'Business process automation',
        'Customer journey optimization',
        'Employee productivity tools',
        'Digital customer engagement',
        'Operational excellence programs'
      ]
    },
    {
      id: 5,
      title: 'Technology Consulting',
      description: 'Strategic technology consulting to align your IT investments with business objectives and drive growth.',
      icon: Globe,
      features: [
        'Technology strategy and roadmap',
        'Architecture review and design',
        'Technology vendor selection',
        'Project management and delivery',
        'Performance optimization',
        'Technology risk assessment'
      ],
      benefits: [
        'Optimized technology investments',
        'Reduced project risks',
        'Improved technology alignment',
        'Enhanced decision making'
      ],
      useCases: [
        'Technology strategy development',
        'System architecture design',
        'Vendor evaluation and selection',
        'Project portfolio management',
        'Technology transformation planning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business success
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From AI and machine learning to cybersecurity and cloud infrastructure, we provide the expertise and solutions you need
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-zion-slate-dark">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                        <Award className="w-5 h-5 text-zion-purple mr-2" />
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start">
                            <div className="w-2 h-2 bg-zion-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                      <Rocket className="w-5 h-5 text-zion-cyan mr-2" />
                      Common Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-zion-slate-light/5 to-zion-cyan/5 rounded-2xl p-8 border border-zion-slate-light/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-zion-slate-dark mb-4">
                        Ready to Get Started?
                      </h4>
                      <p className="text-zion-slate-light mb-6">
                        Let's discuss how our {service.title.toLowerCase()} can transform your business
                      </p>
                      <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We combine deep expertise, innovative solutions, and unwavering commitment to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with deep expertise in cutting-edge technologies
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully delivered hundreds of projects across diverse industries
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Results-Driven</h3>
              <p className="text-zion-slate-light">
                Focused on delivering measurable business outcomes and ROI
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Innovation Focus</h3>
              <p className="text-zion-slate-light">
                Always exploring new technologies and approaches to solve complex challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our technology solutions can drive your success and accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
