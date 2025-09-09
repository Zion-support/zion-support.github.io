import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechCorp',
      year: '2024',
      link: '#'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI & Machine Learning',
      description: 'Intelligent dashboard that provides real-time insights and predictive analytics for business data.',
      image: '📊',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      client: 'DataInsights Inc.',
      year: '2024',
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '📱',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      client: 'SecureBank',
      year: '2023',
      link: '#'
    },
    {
      id: 4,
      title: 'Cloud Migration Solution',
      category: 'Cloud Solutions',
      description: 'Complete cloud migration strategy and implementation for legacy enterprise systems.',
      image: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      client: 'Enterprise Solutions',
      year: '2023',
      link: '#'
    },
    {
      id: 5,
      title: 'Cybersecurity Platform',
      category: 'Cybersecurity',
      description: 'Comprehensive security platform with threat detection, monitoring, and incident response.',
      image: '🔒',
      technologies: ['Python', 'Elasticsearch', 'React', 'Docker'],
      client: 'SecureTech',
      year: '2023',
      link: '#'
    },
    {
      id: 6,
      title: 'IoT Data Collection System',
      category: 'IoT & Hardware',
      description: 'End-to-end IoT solution for collecting, processing, and analyzing sensor data.',
      image: '🌐',
      technologies: ['Arduino', 'Python', 'MQTT', 'InfluxDB'],
      client: 'SmartCity Corp',
      year: '2022',
      link: '#'
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'AI & Machine Learning',
    'Mobile Development',
    'Cloud Solutions',
    'Cybersecurity',
    'IoT & Hardware'
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group</title>
        <meta name="description" content="Explore our portfolio of successful projects and client work." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-zion-cyan">Portfolio</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the innovative solutions we've created for our clients across various industries and technologies.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-zion-cyan hover:text-zion-blue transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl mb-4">{project.image}</div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-cyan text-zion-blue text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan/80">
                  <Link to={project.link}>View Project</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-zion-cyan text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-zion-slate-light mb-4">
                  "Zion Tech Group delivered an exceptional e-commerce platform that exceeded our expectations. 
                  The team's attention to detail and technical expertise is unmatched."
                </p>
                <div className="text-white font-semibold">Sarah Johnson</div>
                <div className="text-zion-slate-light text-sm">CEO, TechCorp</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-zion-cyan text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-zion-slate-light mb-4">
                  "The AI dashboard they built for us has revolutionized our data analysis capabilities. 
                  Highly recommend their services for any complex technical project."
                </p>
                <div className="text-white font-semibold">Michael Chen</div>
                <div className="text-zion-slate-light text-sm">CTO, DataInsights Inc.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-zion-cyan text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-zion-slate-light mb-4">
                  "Professional, reliable, and innovative. Zion Tech Group transformed our mobile banking 
                  experience and helped us stay ahead of the competition."
                </p>
                <div className="text-white font-semibold">David Rodriguez</div>
                <div className="text-zion-slate-light text-sm">VP Technology, SecureBank</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;