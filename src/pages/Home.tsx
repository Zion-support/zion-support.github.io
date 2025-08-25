

import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Target as TargetIcon,
  Bot,
  Microchip,
  Globe2,
  BarChart,
  ShieldCheck,
  Zap as ZapIcon
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEOConfigs } from '../components/SEOHead';

// Lazy load components for better performance
const LazyHeroSection = React.lazy(() => import('../components/home/HeroSection'));
const LazyServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const LazyFeaturesSection = React.lazy(() => import('../components/home/FeaturesSection'));
const LazyTestimonialsSection = React.lazy(() => import('../components/home/TestimonialsSection'));
const LazyCTASection = React.lazy(() => import('../components/home/CTASection'));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const highlights = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation.",
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance standards to protect your business and data.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with global CDN, advanced caching, and real-time monitoring.",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Solutions designed to scale and adapt as your business grows and technology evolves.",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
        description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
        type="website"
        url="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <Suspense fallback={<LoadingFallback message="Loading Hero Section..." />}>
        <LazyHeroSection />
      </Suspense>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Zion Tech
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Future of Technology is Here
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl p-4 bg-gradient-to-br ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Suspense fallback={<LoadingFallback message="Loading Services..." />}>
        <LazyServicesSection />
      </Suspense>

      {/* Features Section */}
      <Suspense fallback={<LoadingFallback message="Loading Features..." />}>
        <LazyFeaturesSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<LoadingFallback message="Loading Testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>
    </>
  );
};

export default Home;
