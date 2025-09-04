import React from "react";
import Link from "next/link";
import { 
  Brain, 
  Check, 
  ExternalLink, 
  Phone, 
  Mail, 
  ArrowRight, 
  Target, 
  Zap, 
  Shield, 
  FileText, 
  BarChart3, 
  Star, 
  Award, 
  Users, 
  Globe, 
  MapPin,
  TrendingUp,
  Clock,
  DollarSign,
  Award as AwardIcon,
  Rocket,
  Cpu,
  Database,
  Lock,
  MessageSquare,
  Calendar,
  BarChart,
  ShoppingCart,
  UserCheck,
  Headphones,
  Package,
  Share2,
  Calculator,
  UserPlus,
  Kanban,
  PieChart,
  Shield as SecurityIcon
} from "lucide-react";
import { innovativeMicroSaasServices2025 } from "../data/innovativeMicroSaasServices2025";

export default function ComprehensiveMicroSaasShowcase() {
  const serviceIcons = {
    "Email Automation": MessageSquare,
    "Data Collection": BarChart,
    "Productivity Tools": Clock,
    "Event Management": Calendar,
    "Content Creation": FileText,
    "E-commerce Solutions": ShoppingCart,
    "Lead Management": UserCheck,
    "Customer Support": Headphones,
    "Inventory Management": Package,
    "Social Media Management": Share2,
    "Financial Management": Calculator,
    "Human Resources": UserPlus,
    "Project Management": Kanban,
    "Business Analytics": PieChart,
    "Cybersecurity": SecurityIcon
  };

  const categories = [
    {
      name: "AI & Automation",
      services: innovativeMicroSaasServices2025.filter(s => 
        s.category.includes("AI") || s.category.includes("Automation") || 
        s.tags.includes("AI") || s.tags.includes("Automation")
      ),
      color: "from-purple-500 to-indigo-600",
      icon: Brain
    },
    {
      name: "Business Intelligence",
      services: innovativeMicroSaasServices2025.filter(s => 
        s.category.includes("Analytics") || s.category.includes("Data") ||
        s.tags.includes("Analytics") || s.tags.includes("Data")
      ),
      color: "from-blue-500 to-cyan-600",
      icon: BarChart3
    },
    {
      name: "Productivity & Management",
      services: innovativeMicroSaasServices2025.filter(s => 
        s.category.includes("Productivity") || s.category.includes("Management") ||
        s.category.includes("Project") || s.category.includes("HR")
      ),
      color: "from-green-500 to-emerald-600",
      icon: Target
    },
    {
      name: "Customer Experience",
      services: innovativeMicroSaasServices2025.filter(s => 
        s.category.includes("Customer") || s.category.includes("Support") ||
        s.category.includes("Email") || s.category.includes("Lead")
      ),
      color: "from-orange-500 to-red-600",
      icon: Users
    },
    {
      name: "E-commerce & Sales",
      services: innovativeMicroSaasServices2025.filter(s => 
        s.category.includes("E-commerce") || s.category.includes("Sales") ||
        s.category.includes("Social Media") || s.category.includes("Content")
      ),
      color: "from-pink-500 to-rose-600",
      icon: ShoppingCart
    },
    {
      name: "Security & Compliance",
      services: innovativeMicroSaasServices2025.filter(s => 
        s.category.includes("Security") || s.category.includes("Cybersecurity") ||
        s.tags.includes("Security") || s.tags.includes("Compliance")
      ),
      color: "from-gray-600 to-slate-700",
      icon: Shield
    }
  ];

  const totalServices = innovativeMicroSaasServices2025.length;
  const averagePrice = Math.round(innovativeMicroSaasServices2025.reduce((sum, service) => sum + service.price, 0) / totalServices);
  const totalMarketSize = "$65+ billion";
  const averageROI = "300%";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Brain className="w-4 h-4 mr-2" />
            {totalServices}+ Revolutionary Micro SAAS Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Comprehensive Micro SAAS Suite 2025
          </h1>
          <p className="text-indigo-100 text-xl mb-8 max-w-4xl mx-auto">
            Transform your business with our complete suite of {totalServices} cutting-edge micro SAAS services. 
            From AI automation to cybersecurity, we provide real solutions with proven ROI and competitive pricing.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">{totalServices}+</div>
              <div className="text-indigo-100">Services</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">${averagePrice}</div>
              <div className="text-indigo-100">Avg. Price/Month</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">{averageROI}</div>
              <div className="text-indigo-100">Average ROI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white">{totalMarketSize}</div>
              <div className="text-indigo-100">Market Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="https://ziontechgroup.com" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Complete Micro SAAS Portfolio
            </h2>
            <p className="text-gray-600 text-lg">
              Organized by category for easy navigation and comparison
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.services.length} services available</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => {
                  const IconComponent = serviceIcons[service.category] || Cpu;
                  return (
                    <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                            <IconComponent className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-500">{service.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-indigo-600">${service.price}</div>
                          <div className="text-xs text-gray-500">/month</div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span>ROI: {service.roi}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Setup: {service.setupTime}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span>Market: {service.marketPrice}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Link 
                          href={service.link}
                          className="flex-1 bg-indigo-600 text-white text-center py-2 px-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                        >
                          Learn More
                        </Link>
                        <Link 
                          href="/contact"
                          className="flex-1 border border-indigo-600 text-indigo-600 text-center py-2 px-3 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
                        >
                          Contact Sales
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Competitive Pricing Across All Services
            </h2>
            <p className="text-gray-600 text-lg">
              Transparent, market-competitive pricing with flexible plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter Plans</h3>
                <div className="text-3xl font-bold text-indigo-600">$15 - $49</div>
                <div className="text-gray-500">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Basic features and functionality</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Email support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Free trial available</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Standard integrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-indigo-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Plans</h3>
                <div className="text-3xl font-bold text-indigo-600">$50 - $149</div>
                <div className="text-gray-500">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Advanced features and AI capabilities</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Analytics and reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Plans</h3>
                <div className="text-3xl font-bold text-indigo-600">$150+</div>
                <div className="text-gray-500">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Full feature suite</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Custom development</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-600">SLA guarantees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our comprehensive micro SAAS suite today. 
            Contact us for a personalized consultation and custom pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Call Now <Phone className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Email Us <Mail className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}