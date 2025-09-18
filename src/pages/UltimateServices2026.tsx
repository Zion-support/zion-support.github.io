import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Target, 
  Users, 
  Cpu, 
  Database,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Globe,
  Settings,
  Lock,
  TrendingUp,
  Code,
  Cloud,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function UltimateServices2026() {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation planning for enterprise transformation.",
      features: ["AI Roadmap Development", "Technology Assessment", "ROI Analysis", "Implementation Planning"],
      price: "From $15,000",
      duration: "4-8 weeks",
      color: "from-purple-500 to-pink-500"
    },
      icon: Zap,
      title: "AI Development & Integration",
      description: "Custom AI solutions development and seamless integration with existing business systems.",
      features: ["Custom AI Models", "API Integration", "Data Pipeline Setup", "Performance Optimization"],
      price: "From $25,000",
      duration: "8-16 weeks",
      color: "from-blue-500 to-cyan-500"
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Enterprise-grade AI security solutions and compliance frameworks for regulated industries.",
      features: ["Security Audits", "Compliance Frameworks", "Risk Assessment", "Data Protection"],
      price: "From $20,000",
      duration: "6-12 weeks",
      color: "from-red-500 to-orange-500"
      icon: Rocket,
      title: "AI Automation Solutions",
      description: "Intelligent automation systems that streamline operations and reduce manual workload.",
      features: ["Process Automation", "Workflow Optimization", "RPA Implementation", "Monitoring Systems"],
      price: "From $18,000",
      duration: "6-10 weeks",
      color: "from-green-500 to-emerald-500"
      icon: Target,
      title: "AI Analytics & Insights",
      description: "Advanced analytics platforms powered by AI for data-driven decision making.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Insight Generation"],
      price: "From $12,000",
      color: "from-indigo-500 to-purple-500"
      icon: Users,
      title: "AI Training & Support",
      description: "Comprehensive training programs and ongoing support for AI system adoption.",
      features: ["Team Training", "Documentation", "24/7 Support", "System Maintenance"],
      price: "From $8,000",
      duration: "2-4 weeks",
      color: "from-teal-500 to-blue-500"
    }
  ];
  const industries = [
    { name: "Healthcare", icon: "🏥", clients: "150+", description: "AI-powered diagnostics and treatment optimization" },
    { name: "Finance", icon: "💰", clients: "200+", description: "Fraud detection and algorithmic trading systems" },
    { name: "Manufacturing", icon: "🏭", clients: "180+", description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: "🛍️", clients: "300+", description: "Personalized recommendations and inventory management" },
    { name: "Education", icon: "🎓", clients: "120+", description: "Adaptive learning and student performance analytics" },
    { name: "Transportation", icon: "🚗", clients: "90+", description: "Autonomous vehicles and route optimization" }
  const testimonials = [
      name: "Sarah Johnson",
      role: "CTO, TechCorp Global",
      content: "The AI transformation has been incredible. We've seen 67% efficiency gains and $2.3M in cost savings within the first year.",
      rating: 5,
      company: "TechCorp Global"
      name: "Michael Chen",
      role: "CEO, HealthTech Solutions",
      content: "Their AI solutions revolutionized our patient care. Treatment success rates increased by 89% while reducing costs by 45%.",
      company: "HealthTech Solutions"
      name: "Emily Rodriguez",
      role: "VP Operations, RetailMax",
      content: "The personalized recommendation engine increased our sales by 156% and customer satisfaction by 78%. Outstanding results!",
      company: "RetailMax"
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Award, value: "50+", label: "Industry Awards", color: "text-purple-600" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-green-600" },
    { icon: TrendingUp, value: "340%", label: "Average ROI", color: "text-orange-600" }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Ultimate AI Services 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI solutions that drive innovation, efficiency, and growth. 
              From strategy to implementation, we're your trusted partner in the AI revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-full hover:bg-blue-500/20 transition-all duration-300">
                View Case Studies
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-600', '-500')} to-${stat.color.replace('text-', '').replace('-600', '-400')} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
      {/* Services Section */}
      <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs and industry requirements.
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-green-400">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{service.price}</span>
                      <span className="text-blue-400 text-sm">{service.duration}</span>
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
      {/* Industries Section */}
      <div className="py-20 bg-black/20">
              Industries We Serve
              Proven expertise across diverse industries with tailored AI solutions for every sector.
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                <div className="text-blue-400 font-semibold mb-2">{industry.clients} clients</div>
                <p className="text-gray-400 text-sm">{industry.description}</p>
      {/* Testimonials Section */}
              Client Success Stories
              Hear from our satisfied clients who have transformed their businesses with our AI solutions.
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
      {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center">
              Ready to Transform Your Business?
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our AI solutions to achieve 
              unprecedented growth, efficiency, and innovation.
                Start Your AI Journey
                Schedule Consultation
    </div>
  );
}
