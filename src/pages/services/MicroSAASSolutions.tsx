import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain,
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Brain
} from 'lucide-react';

export default function MicroSAASSolutions() {
  const services = [
    {
      title: "AI-Powered CRM Platform",
      description: "Intelligent customer relationship management with predictive analytics, automated follow-ups, and smart lead scoring.",
      icon: Brain,
      features: ["Predictive Analytics", "Automated Follow-ups", "Smart Lead Scoring", "Real-time Insights", "AI Chat Support"],
      price: "$299/month",
      marketPrice: "$599/month",
      savings: "50% savings",
      category: "Customer Management",
      rating: 4.9,
      reviewCount: 342
    },
    {
      title: "Cybersecurity Threat Detection",
      description: "AI-powered security platform with real-time threat detection, automated incident response, and compliance monitoring.",
      icon: Shield,
      features: ["Real-time Monitoring", "AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Protection"],
      price: "$499/month",
      marketPrice: "$1,200/month",
      savings: "58% savings",
      category: "Security",
      rating: 4.8,
      reviewCount: 189
    },
    {
      title: "Cloud Cost Optimization",
      description: "AI-driven cloud cost management that automatically reduces spending by 30-50% through intelligent resource optimization.",
      icon: Cloud,
      features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management", "ROI Tracking"],
      price: "$199/month",
      marketPrice: "$450/month",
      savings: "56% savings",
      category: "Cloud Management",
      rating: 4.7,
      reviewCount: 234
    },
    {
      title: "HR & Recruitment AI",
      description: "Intelligent talent management platform with AI-powered candidate screening, automated interviews, and performance analytics.",
      icon: Users,
      features: ["AI Screening", "Automated Interviews", "Performance Analytics", "Skill Assessment", "Talent Pipeline"],
      price: "$399/month",
      marketPrice: "$800/month",
      savings: "50% savings",
      category: "Human Resources",
      rating: 4.6,
      reviewCount: 156
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial insights with AI-powered forecasting, expense tracking, and automated reporting for better decision making.",
      icon: BarChart3,
      features: ["Real-time Analytics", "AI Forecasting", "Expense Tracking", "Automated Reports", "KPI Monitoring"],
      price: "$249/month",
      marketPrice: "$600/month",
      savings: "59% savings",
      category: "Finance",
      rating: 4.8,
      reviewCount: 203
    },
    {
      title: "Inventory Management System",
      description: "Smart inventory tracking with AI demand forecasting, automated reordering, and real-time stock monitoring.",
      icon: Database,
      features: ["AI Demand Forecasting", "Automated Reordering", "Real-time Monitoring", "Barcode Scanning", "Supplier Management"],
      price: "$179/month",
      marketPrice: "$400/month",
      savings: "55% savings",
      category: "Operations",
      rating: 4.5,
      reviewCount: 127
    },
    {
      title: "Project Management Suite",
      description: "Collaborative project management with AI task prioritization, time tracking, and automated workflow optimization.",
      icon: Target,
      features: ["AI Task Prioritization", "Time Tracking", "Workflow Automation", "Team Collaboration", "Progress Analytics"],
      price: "$159/month",
      marketPrice: "$350/month",
      savings: "55% savings",
      category: "Project Management",
      rating: 4.7,
      reviewCount: 298
    },
    {
      title: "Customer Support Automation",
      description: "AI-powered customer support with intelligent ticket routing, automated responses, and sentiment analysis.",
      icon: Smartphone,
      features: ["AI Ticket Routing", "Automated Responses", "Sentiment Analysis", "Multi-channel Support", "Performance Metrics"],
      price: "$129/month",
      marketPrice: "$300/month",
      savings: "57% savings",
      category: "Customer Support",
      rating: 4.6,
      reviewCount: 178
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies and pre-built templates",
      icon: Zap,
      details: "Deploy in 2-4 weeks vs. 6-12 months traditional development"
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one with cloud-native architecture",
      icon: TrendingUp,
      details: "Handles 10x growth without infrastructure changes"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions and pay-as-you-grow pricing",
      icon: DollarSign,
      details: "60% lower total cost of ownership vs. traditional software"
    },
    {
      title: "Enterprise Security",
      description: "Enterprise-grade security and compliance standards with SOC 2, GDPR, and HIPAA support",
      icon: Shield,
      details: "Bank-level security with 99.9% uptime guarantee"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems with AI diagnostics support",
      icon: Building,
      useCases: ["Patient Portals", "AI Diagnostics", "Compliance Management", "Telemedicine"]
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools with real-time fraud detection",
      icon: Building,
      useCases: ["Fraud Detection", "Compliance Reporting", "Risk Management", "Customer Analytics"]
    },
    {
      name: "Education",
      description: "Learning management and student tracking with AI-powered personalization",
      icon: Building,
      useCases: ["Student Analytics", "Personalized Learning", "Administrative Tools", "Assessment Platforms"]
    },
    {
      name: "Real Estate",
      description: "Property management and client portals with market analysis tools",
      icon: Building,
      useCases: ["Property Management", "Client Portals", "Market Analysis", "Lead Management"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing solutions with IoT integration and predictive maintenance",
      icon: Building,
      useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Performance Analytics"]
    },
    {
      name: "Retail",
      description: "Digital retail transformation with AI-powered inventory and customer insights",
      icon: Building,
      useCases: ["Inventory Management", "Customer Analytics", "E-commerce Integration", "Loyalty Programs"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Zion Tech Group's micro SAAS solutions transformed our operations. We deployed their AI-powered CRM in just 3 weeks and saw a 40% increase in customer retention.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Green Manufacturing Co.",
      content: "The inventory management system saved us $50,000 in the first quarter alone. The AI demand forecasting is incredibly accurate.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "HR Manager",
      company: "InnovateCorp",
      content: "Our recruitment process is now 3x faster with the AI-powered HR platform. The automated screening saves us hours every week.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

const MicroSAASSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Innovative micro SAAS platforms designed to solve specific business challenges with scalable solutions."
        keywords="micro SAAS, software as a service, business solutions, scalable platforms"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Micro SAAS Solutions</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Innovative micro SAAS platforms designed to solve specific business challenges with scalable solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Focused Business Solutions</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Our micro SAAS solutions are designed to address specific business needs with 
              targeted, scalable platforms that deliver immediate value.
            </p>
            <p className="text-lg text-zion-blue-light">
              From workflow automation to data analytics, we create specialized tools 
              that help businesses operate more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASSolutions;