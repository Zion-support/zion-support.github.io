import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  ExternalLink, 
  ArrowRight, 
  Star,
  TrendingUp,
  Users,
  Clock,
  Award,
  Zap,
  Shield,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Cloud
} from "lucide-react";

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise AI Platform for Fortune 500 Retailer",
      client: "Global Retail Corp",
      industry: "Retail & E-commerce",
      challenge: "Needed to implement AI-powered inventory management and customer personalization across 500+ stores worldwide.",
      solution: "Developed a comprehensive AI platform with machine learning models for demand forecasting, automated inventory optimization, and personalized customer recommendations.",
      results: [
        "40% reduction in inventory costs",
        "25% increase in customer satisfaction",
        "60% improvement in demand forecasting accuracy",
        "$50M annual cost savings"
      ],
      technologies: ["Machine Learning", "Python", "AWS", "Kubernetes", "React", "Node.js"],
      duration: "8 months",
      team: "12 engineers",
      image: "/api/placeholder/800/600",
      featured: true,
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Cloud Migration & DevOps Transformation",
      client: "Financial Services Inc.",
      industry: "Financial Services",
      challenge: "Legacy on-premise infrastructure causing scalability issues and high maintenance costs.",
      solution: "Migrated entire infrastructure to AWS with automated CI/CD pipelines, containerization, and comprehensive monitoring.",
      results: [
        "99.9% uptime achieved",
        "70% reduction in deployment time",
        "50% cost savings on infrastructure",
        "Zero-downtime deployments"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Python"],
      duration: "6 months",
      team: "8 engineers",
      image: "/api/placeholder/800/600",
      featured: true,
      category: "Cloud & DevOps"
    },
    {
      id: 3,
      title: "Cybersecurity Overhaul for Healthcare Provider",
      client: "MedCare Systems",
      industry: "Healthcare",
      challenge: "HIPAA compliance issues and increasing cybersecurity threats targeting patient data.",
      solution: "Implemented comprehensive security framework including zero-trust architecture, advanced threat detection, and staff training programs.",
      results: [
        "100% HIPAA compliance achieved",
        "90% reduction in security incidents",
        "24/7 threat monitoring established",
        "Zero data breaches in 18 months"
      ],
      technologies: ["SIEM", "Zero Trust", "Azure AD", "Endpoint Protection", "SOC"],
      duration: "4 months",
      team: "6 security experts",
      image: "/api/placeholder/800/600",
      featured: false,
      category: "Cybersecurity"
    },
    {
      id: 4,
      title: "Mobile-First Banking App Development",
      client: "Community Bank",
      industry: "Fintech",
      challenge: "Needed a modern mobile banking solution to compete with digital-first banks.",
      solution: "Built a secure, user-friendly mobile banking app with biometric authentication, real-time transactions, and AI-powered fraud detection.",
      results: [
        "4.8/5 app store rating",
        "150% increase in mobile transactions",
        "40% reduction in support tickets",
        "95% customer satisfaction"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Biometrics"],
      duration: "5 months",
      team: "10 developers",
      image: "/api/placeholder/800/600",
      featured: true,
      category: "Mobile Development"
    },
    {
      id: 5,
      title: "Data Analytics Platform for Manufacturing",
      client: "Industrial Solutions Ltd.",
      industry: "Manufacturing",
      challenge: "Multiple disconnected systems producing siloed data with no unified analytics capability.",
      solution: "Created a comprehensive data analytics platform that integrates all systems and provides real-time insights for operational optimization.",
      results: [
        "30% improvement in operational efficiency",
        "25% reduction in equipment downtime",
        "Real-time predictive maintenance",
        "$20M in cost savings"
      ],
      technologies: ["Python", "Apache Spark", "Kafka", "React", "D3.js", "AWS"],
      duration: "7 months",
      team: "9 data engineers",
      image: "/api/placeholder/800/600",
      featured: false,
      category: "Data Analytics"
    },
    {
      id: 6,
      title: "E-commerce Platform Modernization",
      client: "Fashion Forward",
      industry: "E-commerce",
      challenge: "Outdated e-commerce platform causing poor user experience and high cart abandonment rates.",
      solution: "Redesigned and rebuilt the entire e-commerce platform with modern architecture, AI-powered recommendations, and seamless checkout experience.",
      results: [
        "45% increase in conversion rate",
        "60% reduction in cart abandonment",
        "3x faster page load times",
        "200% increase in mobile sales"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe", "AWS"],
      duration: "6 months",
      team: "11 developers",
      image: "/api/placeholder/800/600",
      featured: false,
      category: "Web Development"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Zap, count: 15 },
    { name: "Cloud & DevOps", icon: Cloud, count: 22 },
    { name: "Cybersecurity", icon: Shield, count: 8 },
    { name: "Mobile Development", icon: Smartphone, count: 18 },
    { name: "Data Analytics", icon: Database, count: 12 },
    { name: "Web Development", icon: Monitor, count: 25 }
  ];

  const featuredCases = caseStudies.filter(caseStudy => caseStudy.featured);
  const otherCases = caseStudies.filter(caseStudy => !caseStudy.featured);

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group has helped companies transform their technology and achieve remarkable results." />
        <meta name="keywords" content="portfolio, case studies, AI projects, cloud migration, cybersecurity, mobile apps, web development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover how we've helped companies transform their technology and achieve extraordinary results through innovative solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">100+</div>
                <div className="text-sm text-zion-slate-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">$500M+</div>
                <div className="text-sm text-zion-slate-light">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">99.9%</div>
                <div className="text-sm text-zion-slate-light">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">50+</div>
                <div className="text-sm text-zion-slate-light">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="container mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Case Studies</h2>
            <p className="text-zion-slate-light text-center">Our most impactful projects and their results</p>
          </div>
          
          <div className="space-y-12">
            {featuredCases.map((caseStudy) => {
              const CategoryIcon = getCategoryIcon(caseStudy.category);
              return (
                <div key={caseStudy.id} className="card group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zion-cyan text-zion-blue-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <CategoryIcon className="w-4 h-4" />
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                          {caseStudy.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {caseStudy.client}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {caseStudy.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {caseStudy.team}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-zion-cyan mb-2">Challenge:</h4>
                        <p className="text-zion-slate-light text-sm mb-4">{caseStudy.challenge}</p>
                        
                        <h4 className="font-semibold text-zion-cyan mb-2">Solution:</h4>
                        <p className="text-zion-slate-light text-sm mb-4">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-zion-cyan mb-3">Key Results:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {caseStudy.results.map((result, index) => (
                            <div key={index} className="flex items-center text-sm text-zion-slate-light">
                              <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="bg-zion-slate-dark text-zion-slate-light px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/portfolio/${caseStudy.id}`}
                        className="inline-flex items-center bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-blue-light transition-colors group/link"
                      >
                        View Full Case Study
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Case Studies */}
        <section className="bg-zion-slate-dark py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">More Success Stories</h2>
              <p className="text-zion-slate-light text-center">Additional projects showcasing our expertise</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherCases.map((caseStudy) => {
                const CategoryIcon = getCategoryIcon(caseStudy.category);
                return (
                  <div key={caseStudy.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <CategoryIcon className="w-3 h-3" />
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-zion-slate-light mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {caseStudy.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {caseStudy.duration}
                        </div>
                      </div>
                      <p className="text-zion-slate-light text-sm mb-4">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-zion-cyan text-sm mb-2">Top Results:</h4>
                      <div className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center text-xs text-zion-slate-light">
                            <Star className="w-3 h-3 mr-2 text-yellow-400" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {caseStudy.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="bg-zion-slate-dark text-zion-slate-light px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 4 && (
                        <span className="bg-zion-slate-dark text-zion-slate-light px-2 py-1 rounded text-xs">
                          +{caseStudy.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      to={`/portfolio/${caseStudy.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light transition-colors font-semibold text-sm group/link"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                Start Your Project
              </Link>
              <Link 
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;