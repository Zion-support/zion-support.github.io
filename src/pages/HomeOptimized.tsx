







;
import { ArrowRight, CheckCircle, Globe, Rocket, Shield, Star, Target, Users, Zap } from 'lucide-react';
import { Helmet } from "react-helmet-async";


import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../components/Header";
import BannerRotationManager from "../components/BannerRotationManager";
import { latestInsights } from "../content/insights";

// Lazy load heavy components
const EnhancedTestimonials = lazy(() => import("../components/EnhancedTestimonials"));
const ModernFeatures = lazy(() => import("../components/ModernFeatures"));
const LatestInsights = lazy(() => import("../components/LatestInsights"));

const LoadingSection = () => (
  <div className="animate-pulse bg-white/5 rounded-xl h-64 w-full"></div>
);

const HomeOptimized = () => {
  return (
    <>
      <Helmet>
        <title>
          Zion Tech Group - Leading AI & IT Solutions | Transform Your Business
        </title>
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. Enterprise security, AI innovation, and expert consulting services."
        />
        <meta
          name="keywords"
          content="AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation"
        />
        <meta
          property="og:title"
          content="Zion Tech Group - Leading AI & IT Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge AI and IT solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Zion Tech Group - Leading AI & IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Transform your business with cutting-edge AI and IT solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
        <Header />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <Rocket className="w-4 h-4 mr-2 animate-pulse" />
              Trusted by 500+ companies worldwide
              <Rocket className="w-4 h-4 ml-2 animate-bounce" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent animate-gradient bg-300%">
                Zion Tech Group
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              Transform your business with cutting-edge AI solutions, enterprise-grade security, 
              and next-generation cloud infrastructure. Join 500+ companies already scaling with us!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Support" },
                { value: "5★", label: "Client Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-zion-cyan group-hover:text-zion-blue-light transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Banner Rotation Section */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <BannerRotationManager
            banners={[
              'october2025-new-breakthrough',
              'october2025-tech-breakthrough',
              'october2025-next-gen-ai',
            ]}
            maxBanners={3}
            autoRotate={false}
          />
        </section>

        {/* Latest Insights Section */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <Suspense fallback={<LoadingSection />}>
            <LatestInsights />
          </Suspense>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We deliver exceptional technology solutions that drive business
              growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Advanced cybersecurity solutions protecting your business from evolving threats.",
                features: ["SOC 2 Compliance", "Penetration Testing", "24/7 Monitoring"],
                color: "blue",
              },
              {
                icon: Zap,
                title: "AI Innovation",
                description: "Cutting-edge artificial intelligence solutions that transform your operations.",
                features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
                color: "purple",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "World-class engineers and consultants dedicated to your success.",
                features: ["10+ Years Experience", "Certified Professionals", "Dedicated Support"],
                color: "cyan",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with localized expertise and support.",
                features: ["50+ Countries", "Local Support", "24/7 Availability"],
                color: "blue-light",
              },
            ].map((feature, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className={`bg-zion-${feature.color}/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-${feature.color}/30 transition-colors border border-zion-${feature.color}/30 shadow-lg`}>
                  <feature.icon className={`w-8 h-8 text-zion-${feature.color}-light group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-sm text-zion-slate">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Insights Preview */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Latest Insights</h3>
            <Link to="/insights" className="text-zion-cyan hover:underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {latestInsights.slice(0, 4).map((item) => (
              <article key={item.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-zion-cyan mb-2">{item.category}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-zion-slate-light mb-4">{item.summary}</p>
                  <div className="text-sm text-zion-slate flex items-center justify-between">
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <span>{item.readMinutes} min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto animate-fade-in">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechCorp",
                  quote: "Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%.",
                },
                {
                  name: "Michael Chen",
                  role: "CTO, InnovateLab",
                  quote: "Outstanding team and exceptional results. They delivered our mobile app ahead of schedule and under budget.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Security Director, FinanceFirst",
                  quote: "The security solutions they implemented gave us complete peace of mind. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-slate">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Features Section */}
        <Suspense fallback={<LoadingSection />}>
          <ModernFeatures />
        </Suspense>

        {/* Enhanced Testimonials Section */}
        <Suspense fallback={<LoadingSection />}>
          <EnhancedTestimonials />
        </Suspense>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto animate-fade-in">
              Join thousands of companies that trust Zion Tech Group for their
              technology needs. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeOptimized;
