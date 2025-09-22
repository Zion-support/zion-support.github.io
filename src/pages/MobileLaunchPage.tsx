import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Download, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap,
  Shield,
  Cloud,
  Users,
  Globe,
  Lock,
  BarChart3,
  Target,
  TrendingUp,
  Heart,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to protect your data"
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Seamlessly sync across all your devices and platforms"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools for your entire team"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access your data from anywhere in the world"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays private and under your control"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful insights and reporting capabilities"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    rating: 5,
    comment: "The mobile app has transformed how we manage our IT projects. Incredible performance and user experience!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    company: "Digital Dynamics",
    rating: 5,
    comment: "Finally, a mobile app that matches the quality of the web platform. Seamless integration and powerful features.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Elena Rodriguez",
    company: "Innovation Labs",
    rating: 5,
    comment: "The mobile experience is exceptional. Fast, reliable, and packed with all the features we need on the go.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const appStores = [
  {
    name: "App Store",
    icon: "🍎",
    link: "#",
    badge: "Download on the App Store"
  },
  {
    name: "Google Play",
    icon: "🤖",
    link: "#",
    badge: "Get it on Google Play"
  }
];

export default function MobileLaunchPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Now Available on Mobile</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Mobile App
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Take your IT services and business solutions with you everywhere. Our powerful mobile app brings the full Zion Tech Group experience to your smartphone.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {appStores.map((store, index) => (
                <a
                  key={index}
                  href={store.link}
                  className="flex items-center space-x-3 bg-white text-black px-6 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-2xl">{store.icon}</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">{store.badge}</div>
                    <div className="text-lg font-semibold">{store.name}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="Zion Tech Group Mobile App"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you love about Zion Tech Group, optimized for mobile devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Our Mobile App?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of having Zion Tech Group in your pocket
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Always Accessible</h3>
                    <p className="text-gray-400">Access your projects, services, and support 24/7 from anywhere in the world</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                    <p className="text-gray-400">Optimized for mobile with instant loading and smooth performance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-400">Bank-level security with biometric authentication and encrypted data</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
                    <p className="text-gray-400">Real-time collaboration with your team members on the go</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop"
                  alt="Mobile App Features"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from professionals who use our mobile app daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified about new features, updates, and exclusive mobile app content
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-400">
              <CheckCircle className="w-6 h-6 inline mr-2" />
              Thank you for subscribing! We'll keep you updated on all the latest mobile app features.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Mobile?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Download the Zion Tech Group mobile app today and take your business solutions with you everywhere
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download-app"
              className="bg-white text-zion-blue py-4 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Download Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white py-4 px-8 rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
