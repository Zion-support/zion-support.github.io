import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Rocket,
  Cpu,
  Lock,
  Database,
  Network,
  Heart,
  Leaf,
  Code,
  BarChart3,
  Server
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business intelligence, automation, and predictive analytics.',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security with threat detection, zero-trust architecture, and compliance.',
      color: 'from-zion-purple to-zion-red'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, DevOps automation, and multi-cloud management.',
      color: 'from-zion-blue to-zion-cyan'
    },
    {
      icon: Rocket,
      title: 'Quantum Technology',
      description: 'Next-generation quantum computing solutions for complex problem-solving.',
      color: 'from-zion-cyan to-zion-green'
    },
    {
      icon: Lock,
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and digital asset management.',
      color: 'from-zion-purple to-zion-blue'
    },
    {
      icon: Leaf,
      title: 'Green IT',
      description: 'Sustainable technology solutions for environmental responsibility.',
      color: 'from-zion-green to-zion-blue'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: Brain },
    { number: '99.98%', label: 'System Uptime', icon: Server },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure with their AI-powered solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, InnovateLab',
      content: 'Their cybersecurity expertise and quantum computing solutions have given us a competitive edge in the market.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, FutureTech',
      content: 'The team at Zion Tech Group is incredibly knowledgeable and delivered our cloud migration project on time and budget.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
            We're building the world's first free marketplace dedicated to high-tech and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Explore Services
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From artificial intelligence to quantum computing, we deliver innovative solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Future of Tech Marketplace
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect with talented professionals, discover innovative products, and access cutting-edge services in our free marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Find Talent</h3>
              <p className="text-zion-slate-light mb-4">
                Connect with skilled professionals in AI, cybersecurity, cloud computing, and more.
              </p>
              <Link 
                to="/talent" 
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Browse Talent
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discover Products</h3>
              <p className="text-zion-slate-light mb-4">
                Explore innovative technology products and solutions from leading providers.
              </p>
              <Link 
                to="/marketplace" 
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Shop Products
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Get Services</h3>
              <p className="text-zion-slate-light mb-4">
                Access professional IT services, consulting, and implementation support.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                View Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Industry Expertise</h3>
                  <p className="text-zion-slate-light">Over 15 years of experience in AI, cybersecurity, and emerging technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                  <p className="text-zion-slate-light">We stay ahead of the curve with the latest technological advancements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Free Marketplace</h3>
                  <p className="text-zion-slate-light">The world's first free marketplace for high-tech and AI services.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-zion-slate-light">Round-the-clock technical support and customer service.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-zion-slate-light">Serving clients worldwide with localized expertise and support.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-zion-slate-light">Track record of successful implementations and satisfied clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join the future of technology with Zion Tech Group. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Latest News & Insights</h2>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
            >
              View All News
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
              <div className="text-zion-cyan text-sm mb-2">Technology</div>
              <h3 className="text-lg font-semibold text-white mb-3">The Future of AI in 2025</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Explore the latest developments in artificial intelligence and what to expect in the coming year.
              </p>
              <div className="text-zion-slate-light text-xs">January 15, 2025</div>
            </div>
            
            <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
              <div className="text-zion-cyan text-sm mb-2">Cybersecurity</div>
              <h3 className="text-lg font-semibold text-white mb-3">Zero-Trust Security Architecture</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Learn about implementing zero-trust security principles in your organization.
              </p>
              <div className="text-zion-slate-light text-xs">January 12, 2025</div>
            </div>
            
            <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6">
              <div className="text-zion-cyan text-sm mb-2">Innovation</div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantum Computing Breakthroughs</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Discover the latest advances in quantum computing and their practical applications.
              </p>
              <div className="text-zion-slate-light text-xs">January 10, 2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
