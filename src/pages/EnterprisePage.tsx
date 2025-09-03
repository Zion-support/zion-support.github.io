import React from 'react';
import { Link } from 'react-router-dom';
import { ;
  Building2,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Database,
  Cloud,
  Brain,
  Target,
  Award,
  Headphones,
  BarChart3,
  Settings,
  Cpu,
  Network,
  Server;
} from 'lucide-react';
export function EnterprisePage() {;
  const enterpriseSolutions = [;
    {;
      title: 'AI-Powered Business Intelligence',
      icon: Brain,
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
      industries: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'];
},
    {;
      title: 'Enterprise Security Suite',
      icon: Shield,
      description: 'Comprehensive cybersecurity solutions to protect your organization from evolving threats.',
      features: ['Zero Trust Architecture', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      industries: ['Government', 'Finance', 'Healthcare', 'Technology'];
},
    {;
      title: 'Cloud Infrastructure Management',
      icon: Cloud,
      description: 'Optimize your cloud operations with our advanced infrastructure management platform.',
      features: ['Multi-Cloud Support', 'Cost Optimization', 'Auto-Scaling', 'Disaster Recovery'],
      industries: ['Technology', 'Finance', 'E-commerce', 'Media'];
},
    {;
      title: 'Digital Transformation Platform',
      icon: Zap,
      description: 'Accelerate your digital transformation journey with our comprehensive platform.',
      features: ['Process Automation', 'Legacy Modernization', 'API Management', 'Microservices'],
      industries: ['Manufacturing', 'Retail', 'Banking', 'Insurance'];
}
  ];
  const enterpriseFeatures = [;
    {;
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, encryption, and advanced threat protection.';
},
    {;
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with enterprise SLA guarantees and priority response.';
},
    {;
      icon: Settings,
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems and custom development capabilities.';
},
    {;
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics to track performance and ROI across all solutions.';
},
    {;
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide deployment capabilities with local data residency and compliance support.';
},
    {;
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful enterprise implementations with measurable business outcomes.';
}
  ];
  const industries = [;
    {;
      name: 'Financial Services',
      icon: TrendingUp,
      description: 'Secure, compliant solutions for banking, insurance, and fintech companies.',
      solutions: ['Risk Management', 'Fraud Detection', 'Regulatory Compliance', 'Customer Analytics'];
},
    {;
      name: 'Healthcare',
      icon: Shield,
      description: 'HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.',
      solutions: ['Patient Data Management', 'Telemedicine', 'Clinical Analytics', 'Supply Chain'];
},
    {;
      name: 'Manufacturing',
      icon: Cpu,
      description: 'IoT and AI solutions for smart manufacturing and industrial automation.',
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management'];
},
    {;
      name: 'Government',
      icon: Building2,
      description: 'Secure, scalable solutions for federal, state, and local government agencies.',
      solutions: ['Citizen Services', 'Data Analytics', 'Cybersecurity', 'Digital Transformation'];
},
    {;
      name: 'Retail & E-commerce',
      icon: Target,
      description: 'Customer-centric solutions for retail chains and online marketplaces.',
      solutions: ['Personalization', 'Inventory Management', 'Customer Analytics', 'Omnichannel'];
},
    {;
      name: 'Technology',
      icon: Network,
      description: 'Cutting-edge solutions for tech companies and software providers.',
      solutions: ['DevOps Automation', 'API Management', 'Microservices', 'Cloud Migration'];
}
  ];
  const testimonials = [;
    {;
      name: 'Sarah Johnson',
      title: 'CTO, Global Finance Corp',
      company: 'Global Finance Corp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions helped us reduce operational costs by 40% while improving security and compliance.',
      rating: 5;
},
    {;
      name: 'Michael Chen',
      title: 'VP of Technology, HealthTech Solutions',
      company: 'HealthTech Solutions',
      content: 'The healthcare-specific solutions provided by Zion Tech Group have been instrumental in our digital transformation. Their expertise in compliance and security is unmatched.',
      rating: 5;
},
    {;
      name: 'Emily Rodriguez',
      title: 'Director of IT, Manufacturing Plus',
      company: 'Manufacturing Plus',
      content: 'Their IoT and AI solutions revolutionized our manufacturing processes. We saw a 60% improvement in efficiency and a 35% reduction in downtime.',
      rating: 5;
}
  ];
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Enterprise Solutions;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Transform your organization with our comprehensive enterprise-grade technology solutions. ;
              Built for scale, security, and performance.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;
              <Link;
                to="/request-quote";
                className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
                Get Enterprise Quote;
              </Link>;
              <Link;
                to="/contact";
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">;
                Schedule Demo;
              </Link>;
            </div>;

            {/* Enterprise Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">500+</div>;
                <div className="text-sm text-zion-slate-light">Enterprise Clients</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">99.9%</div>;
                <div className="text-sm text-zion-slate-light">Uptime SLA</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">24/7</div>;
                <div className="text-sm text-zion-slate-light">Support</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">SOC 2</div>;
                <div className="text-sm text-zion-slate-light">Compliant</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Enterprise Solutions */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Comprehensive Enterprise Solutions;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              End-to-end technology solutions designed for enterprise-scale operations;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {enterpriseSolutions.map((solution, index) => (;
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center space-x-4 mb-6">;
                  <solution.icon className="w-12 h-12 text-zion-cyan" />;
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>;
                </div>;
                <p className="text-zion-slate-light mb-6 leading-relaxed">;
                  {solution.description}
                </p>;

                <div className="mb-6">;
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>;
                  <div className="grid grid-cols-2 gap-2">;
                    {solution.features.map((feature, featureIndex) => (;
                      <div key={featureIndex} className="flex items-center space-x-2">;
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />;
                        <span className="text-sm text-zion-slate-light">{feature}</span>;
                      </div>;
                    ))}
                  </div>;
                </div>;

                <div className="mb-6">;
                  <h4 className="text-lg font-semibold text-white mb-3">Industries:</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {solution.industries.map((industry, industryIndex) => (;
                      <span key={industryIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-3 py-1 rounded-full">;
                        {industry}
                      </span>;
                    ))}
                  </div>;
                </div>;

                <Link;
                  to="/contact";
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center">;
                  Learn More;
                  <ArrowRight className="w-4 h-4 ml-2" />;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Enterprise Features */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Why Choose Zion Tech Group for Enterprise?;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Enterprise-grade features and capabilities designed for large-scale operations;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {enterpriseFeatures.map((feature, index) => (;
              <div key={index} className="text-center">;
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <feature.icon className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-zion-slate-light leading-relaxed">;
                  {feature.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Industries */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Industry-Specific Solutions;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Tailored solutions for your industry's unique challenges and requirements;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {industries.map((industry, index) => (;
              <div key={index} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-center space-x-3 mb-4">;
                  <industry.icon className="w-8 h-8 text-zion-cyan" />;
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>;
                </div>;
                <p className="text-zion-slate-light mb-4 leading-relaxed">;
                  {industry.description}
                </p>;

                <div>;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Solutions:</h4>;
                  <div className="flex flex-wrap gap-1">;
                    {industry.solutions.map((solution, solutionIndex) => (;
                      <span key={solutionIndex} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                        {solution}
                      </span>;
                    ))}
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Testimonials */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              What Enterprise Leaders Say;
            </h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Trusted by industry leaders across various sectors;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {testimonials.map((testimonial, index) => (;
              <div key={index} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-6">;
                <div className="flex items-center space-x-1 mb-4">;
                  {[...Array(testimonial.rating)].map((_, i) => (;
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>;
                  ))}
                </div>;
                <p className="text-zion-slate-light mb-4 leading-relaxed">;
                  "{testimonial.content}";
                </p>;
                <div>;
                  <div className="font-semibold text-white">{testimonial.name}</div>;
                  <div className="text-sm text-zion-cyan">{testimonial.title}</div>;
                  <div className="text-xs text-zion-slate-light">{testimonial.company}</div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Ready to Transform Your Enterprise?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Let our enterprise experts help you design and implement the perfect solution for your organization.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/request-quote";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Get Enterprise Quote;
            </Link>;
            <Link;
              to="/contact";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Schedule Consultation;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default EnterprisePage;