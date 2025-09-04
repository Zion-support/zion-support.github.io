import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Code, 
  Database, 
  Network, 
  Smartphone, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  ShoppingCart, 
  Headphones, 
  Mail, 
  Search, 
  Clock, 
  DollarSign, 
  Target, 
  Workflow, 
  Atom, 
  Truck, 
  Factory, 
  Leaf, 
  Satellite, 
  Building, 
  Gauge, 
  MessageCircle, 
  Calendar, 
  Package, 
  CreditCard, 
  Globe2, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  Settings, 
  Eye, 
  Heart, 
  GraduationCap, 
  ShoppingBag 
} from "lucide-react";

const HomePage = (props: any) => {
  const featuredServices = [
    {
      name: "AI Content Creation Suite",
      description: "Automated content generation for blogs, social media, and marketing materials",
      icon: Brain,
      price: "From $199/month",
      href: "/services/ai-content-creation-suite"
    },
    {
      name: "Cloud Migration Services",
      description: "Seamless migration to cloud platforms with zero downtime",
      icon: Cloud,
      price: "From $2,999/project",
      href: "/services/cloud-migration"
    },
    {
      name: "Cybersecurity Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      icon: Shield,
      price: "From $1,499/assessment",
      href: "/services/cybersecurity-assessment"
    },
    {
      name: "Affiliate Marketing Tracking",
      description: "Comprehensive affiliate program management and tracking platform",
      icon: ShoppingCart,
      price: "From $99/month",
      href: "/services/affiliate-tracking"
    }
  ];

  const industrySolutions = [
    { name: "Healthcare", icon: Heart, href: "/solutions/healthcare" },
    { name: "Manufacturing", icon: Factory, href: "/solutions/manufacturing" },
    { name: "Financial", icon: CreditCard, href: "/solutions/financial" },
    { name: "Education", icon: GraduationCap, href: "/solutions/education" },
    { name: "Retail", icon: ShoppingBag, href: "/solutions/retail" },
    { name: "Enterprise", icon: Building, href: "/solutions/enterprise" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <SEO title="Home - Zion Tech Group" description="Professional IT services and AI solutions" />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              index
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional index services and solutions
            </p>
            <div className="grid md: gri d-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link to="/pricing" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link to="/contact" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
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

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most popular AI, IT, and micro SaaS solutions designed to transform your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                    <service.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-cyan-600 font-semibold mb-4">{service.price}</div>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored technology solutions designed for your specific industry needs and challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <Link 
                  key={index}
                  to={industry.href}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mr-4">
                      <industry.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Specialized solutions for {industry.name.toLowerCase()} industry with compliance and best practices.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with industry expertise to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                  <Brain className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Solutions</h3>
                <p className="text-gray-600">Leverage the latest AI technologies to automate processes and gain insights.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                  <Shield className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Robust security measures and compliance with industry standards.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Quick implementation with minimal disruption to your operations.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with deep industry knowledge and expertise.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">Solutions that grow with your business and adapt to changing needs.</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                  <Award className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful implementations and satisfied clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Get started with a free consultation and discover how our AI and technology solutions 
              can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Free Consultation
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
      </div>
    </>
  );
};

export default index;