import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Heart, 
  Factory, 
  CreditCard, 
  GraduationCap, 
  ShoppingBag, 
  Truck, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Target, 
  TrendingUp, 
  Mail, 
  Smartphone, 
  Building2, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Cloud, 
  Brain, 
  Atom, 
  Rocket, 
  Code, 
  FileText, 
  MessageSquare, 
  Calendar, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Eye, 
  Award, 
  Lightbulb, 
  Settings, 
  Headphones, 
  Search, 
  Clock, 
  Package, 
  Globe2, 
  ShieldCheck, 
  Leaf, 
  Satellite, 
  Microscope, 
  Beaker, 
  TestTube, 
  TruckIcon, 
  FactoryIcon, 
  LeafIcon, 
  SatelliteIcon, 
  BuildingIcon, 
  GaugeIcon, 
  MessageCircleIcon, 
  CalendarIcon, 
  PackageIcon, 
  CreditCardIcon, 
  Globe2Icon, 
  ShieldCheckIcon 
} from 'lucide-react';

const Solutions: React.FC = () => {
  const industrySolutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      solutions: [
        {
          name: 'Digital Transformation Platform',
          description: 'Complete digital transformation strategy and implementation',
          price: 'From $9,999/month',
          features: ['Strategy Development', 'Process Automation', 'Change Management', 'Performance Monitoring'],
          marketPrice: '$8,000-15,000/month',
          href: '/solutions/enterprise/digital-transformation'
        },
        {
          name: 'Enterprise Resource Planning (ERP)',
          description: 'Integrated business management software suite',
          price: 'From $4,999/month',
          features: ['Financial Management', 'Supply Chain', 'Human Resources', 'Customer Relations'],
          marketPrice: '$3,000-8,000/month',
          href: '/solutions/enterprise/erp'
        },
        {
          name: 'Business Intelligence & Analytics',
          description: 'Advanced analytics and reporting solutions for data-driven decisions',
          price: 'From $2,999/month',
          features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
          marketPrice: '$2,000-5,000/month',
          href: '/solutions/enterprise/business-intelligence'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      description: 'Specialized healthcare technology solutions for modern medical practices',
      solutions: [
        {
          name: 'Electronic Health Records (EHR)',
          description: 'Comprehensive patient data management and clinical workflow system',
          price: 'From $1,999/month',
          features: ['Patient Records', 'Clinical Workflows', 'HIPAA Compliance', 'Interoperability'],
          marketPrice: '$1,500-3,000/month',
          href: '/solutions/healthcare/ehr'
        },
        {
          name: 'Telemedicine Platform',
          description: 'Complete virtual healthcare delivery and patient engagement solution',
          price: 'From $1,499/month',
          features: ['Video Consultations', 'Patient Portal', 'Prescription Management', 'Billing Integration'],
          marketPrice: '$1,000-2,500/month',
          href: '/solutions/healthcare/telemedicine'
        },
        {
          name: 'Healthcare Analytics Suite',
          description: 'AI-powered healthcare analytics for improved patient outcomes',
          price: 'From $2,499/month',
          features: ['Patient Analytics', 'Treatment Optimization', 'Risk Assessment', 'Compliance Monitoring'],
          marketPrice: '$2,000-4,000/month',
          href: '/solutions/healthcare/analytics'
        }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing Solutions',
      icon: Factory,
      color: 'from-orange-500 to-red-600',
      description: 'Smart manufacturing and industrial automation solutions',
      solutions: [
        {
          name: 'Smart Factory Platform',
          description: 'IoT-enabled manufacturing optimization and automation system',
          price: 'From $3,999/month',
          features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
          marketPrice: '$3,000-6,000/month',
          href: '/solutions/manufacturing/smart-factory'
        },
        {
          name: 'Supply Chain Management',
          description: 'End-to-end supply chain visibility and optimization platform',
          price: 'From $2,499/month',
          features: ['Inventory Management', 'Demand Forecasting', 'Vendor Management', 'Logistics Tracking'],
          marketPrice: '$2,000-4,000/month',
          href: '/solutions/manufacturing/supply-chain'
        },
        {
          name: 'Quality Management System',
          description: 'Comprehensive quality control and compliance management solution',
          price: 'From $1,999/month',
          features: ['Quality Control', 'Compliance Tracking', 'Audit Management', 'Documentation'],
          marketPrice: '$1,500-3,000/month',
          href: '/solutions/manufacturing/quality-management'
        }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Solutions',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-600',
      description: 'Advanced financial technology solutions for modern banking and fintech',
      solutions: [
        {
          name: 'Digital Banking Platform',
          description: 'Complete digital banking infrastructure and customer experience solution',
          price: 'From $4,999/month',
          features: ['Online Banking', 'Mobile Banking', 'Payment Processing', 'Account Management'],
          marketPrice: '$4,000-8,000/month',
          href: '/solutions/financial/digital-banking'
        },
        {
          name: 'Risk Management System',
          description: 'AI-powered risk assessment and fraud detection platform',
          price: 'From $2,999/month',
          features: ['Risk Assessment', 'Fraud Detection', 'Compliance Monitoring', 'Real-time Alerts'],
          marketPrice: '$2,500-5,000/month',
          href: '/solutions/financial/risk-management'
        },
        {
          name: 'Investment Management Platform',
          description: 'Comprehensive investment portfolio management and analytics solution',
          price: 'From $3,499/month',
          features: ['Portfolio Management', 'Market Analysis', 'Risk Assessment', 'Performance Tracking'],
          marketPrice: '$3,000-6,000/month',
          href: '/solutions/financial/investment-management'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education Solutions',
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-600',
      description: 'Innovative educational technology solutions for modern learning',
      solutions: [
        {
          name: 'Learning Management System (LMS)',
          description: 'Comprehensive online learning platform with advanced features',
          price: 'From $1,999/month',
          features: ['Course Management', 'Student Tracking', 'Assessment Tools', 'Collaboration Features'],
          marketPrice: '$1,500-3,000/month',
          href: '/solutions/education/lms'
        },
        {
          name: 'Virtual Classroom Platform',
          description: 'Interactive virtual learning environment with real-time collaboration',
          price: 'From $1,499/month',
          features: ['Video Conferencing', 'Interactive Whiteboard', 'Screen Sharing', 'Breakout Rooms'],
          marketPrice: '$1,000-2,500/month',
          href: '/solutions/education/virtual-classroom'
        },
        {
          name: 'Student Information System',
          description: 'Complete student data management and academic tracking solution',
          price: 'From $1,299/month',
          features: ['Student Records', 'Grade Management', 'Attendance Tracking', 'Parent Portal'],
          marketPrice: '$1,000-2,000/month',
          href: '/solutions/education/student-information'
        }
      ]
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce Solutions',
      icon: ShoppingBag,
      color: 'from-pink-500 to-rose-600',
      description: 'Modern retail technology solutions for omnichannel commerce',
      solutions: [
        {
          name: 'Omnichannel Commerce Platform',
          description: 'Unified commerce solution for seamless customer experience across channels',
          price: 'From $2,999/month',
          features: ['Multi-channel Integration', 'Inventory Management', 'Customer Analytics', 'Payment Processing'],
          marketPrice: '$2,500-5,000/month',
          href: '/solutions/retail/omnichannel-commerce'
        },
        {
          name: 'Customer Experience Management',
          description: 'AI-powered customer engagement and personalization platform',
          price: 'From $1,999/month',
          features: ['Personalization Engine', 'Customer Journey Mapping', 'Loyalty Programs', 'Feedback Management'],
          marketPrice: '$1,500-3,000/month',
          href: '/solutions/retail/customer-experience'
        },
        {
          name: 'Inventory Optimization System',
          description: 'Smart inventory management with predictive analytics',
          price: 'From $1,499/month',
          features: ['Demand Forecasting', 'Stock Optimization', 'Automated Reordering', 'Analytics Dashboard'],
          marketPrice: '$1,200-2,500/month',
          href: '/solutions/retail/inventory-optimization'
        }
      ]
    }
  ];

  return (
    <>
      <SEO title="Solutions - Zion Tech Group" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Industry-Specific Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Tailored technology solutions designed for your industry. From healthcare to manufacturing, 
                we deliver specialized platforms that address your unique challenges and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Custom Solution
                </Link>
                <Link 
                  to="/services" 
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-600">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <Smartphone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-600">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {industrySolutions.map((industry, industryIndex) => (
              <div key={industry.id} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} mb-4`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{industry.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{industry.description}</p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900">{solution.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-600">{solution.price}</div>
                          <div className="text-sm text-gray-500">Market: {solution.marketPrice}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          to={solution.href}
                          className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                        <Link 
                          to="/contact"
                          className="flex-1 border border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Solutions */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our industry-specific solutions are designed with deep domain expertise and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Deep understanding of industry challenges and regulatory requirements.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
                <p className="text-gray-600">Quick deployment with minimal disruption to your operations.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Built-in compliance features for industry regulations and standards.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">Solutions that grow with your business and adapt to changing needs.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and maintenance services.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful implementations across various industries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Industry-Specific Solutions?</h2>
            <p className="text-xl mb-8">
              Let us design a custom solution tailored to your industry's unique requirements and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
