
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Brain,
  Cloud,
  Lock,
  Zap,
  Globe,
  Code,
  Database,
  Server
} from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";

// Data definitions
const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Clients",
    description: "Trusted worldwide"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    description: "Project completion"
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support",
    description: "Always available"
  },
  {
    icon: Rocket,
    value: "500+",
    label: "Projects",
    description: "Successfully delivered"
  }
];

const aiServices = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with advanced machine learning algorithms.",
    features: [
      "Predictive analytics",
      "Real-time data processing",
      "Custom ML models",
      "Automated reporting"
    ],
    path: "/services/ai-analytics"
  },
  {
    icon: Code,
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs and industry requirements.",
    features: [
      "Custom AI models",
      "API integration",
      "Scalable architecture",
      "Continuous learning"
    ],
    path: "/services/ai-development"
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Unlock the power of your data with intelligent processing and analysis.",
    features: [
      "Data mining",
      "Pattern recognition",
      "Business intelligence",
      "Data visualization"
    ],
    path: "/services/data-intelligence"
  }
];

const featuredServices = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for modern businesses",
    price: "$2,999",
    category: "Enterprise",
    rating: 4.9,
    reviewCount: 127,
    highlights: ["99.9% Uptime", "24/7 Monitoring", "Auto-scaling", "Security"],
    path: "/services/cloud"
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your digital assets",
    price: "$1,999",
    category: "Professional",
    rating: 4.8,
    reviewCount: 89,
    highlights: ["Threat Detection", "Compliance", "Incident Response", "Training"],
    path: "/services/cybersecurity"
  },
  {
    icon: Server,
    title: "DevOps Services",
    description: "Streamline your development and deployment processes",
    price: "$3,499",
    category: "Enterprise",
    rating: 4.9,
    reviewCount: 156,
    highlights: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring", "Automation"],
    path: "/services/devops"
  }
];

const whyChooseUs = [
  {
    icon: Brain,
    title: "Expertise & Innovation",
    description: "Our team of experts stays at the forefront of technological advancements, ensuring cutting-edge solutions for your business."
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "We prioritize the security and reliability of your data and systems, implementing robust measures to protect your assets."
  },
  {
    icon: Rocket,
    title: "Scalability & Performance",
    description: "Our solutions are designed to be scalable and performant, ensuring your business can grow and adapt to new challenges."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With a presence in multiple regions, we provide 24/7 support and ensure seamless connectivity for your global operations."
  }
];

const trustSignals = [
  {
    icon: Users,
    label: "Global Clients",
    description: "Serving businesses across continents, we have a proven track record of delivering excellence."
  },
  {
    icon: Shield,
    label: "Security Certified",
    description: "Our solutions are rigorously tested and certified for security compliance."
  },
  {
    icon: TrendingUp,
    label: "Industry Awards",
    description: "Recognized for innovation and excellence in multiple industry awards."
  },
  {
    icon: Rocket,
    label: "Fast Delivery",
    description: "We deliver projects on time, every time, ensuring minimal disruption to your operations."
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular solutions trusted by businesses worldwide
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400">({service.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder for industry solutions data */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Healthcare IT</h3>
              <p className="text-gray-300 mb-6">Streamlining patient data management and improving medical research with advanced AI.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />Secure data storage and encryption</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />Advanced analytics for patient outcomes</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />Automated clinical trials</li>
              </ul>
              <Link 
                to="/solutions/healthcare"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">FinTech Solutions</h3>
              <p className="text-gray-300 mb-6">Enhancing financial services with AI-driven fraud detection and personalized investment strategies.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />Advanced risk assessment</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />Personalized banking experiences</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />Automated trading algorithms</li>
              </ul>
              <Link 
                to="/solutions/fintech"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">E-commerce Platforms</h3>
              <p className="text-gray-300 mb-6">Improving customer experience and driving sales with AI-powered recommendation engines and personalized marketing.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Smart product recommendations</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Personalized content delivery</li>
                <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Intelligent chatbots</li>
              </ul>
              <Link 
                to="/solutions/ecommerce"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and customer success has made us a trusted partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <signal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{signal.label}</h3>
                <p className="text-gray-300">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <LazyServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <LazyFeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>

      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
  );
}
