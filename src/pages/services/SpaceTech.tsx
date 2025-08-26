import React from 'react';
import Head from 'next/head';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const SpaceTech: React.FC = () => {
  const services = [
    {
      title: "Satellite Technology",
      description: "Advanced satellite systems for communication and observation",
      icon: "🛰️",
      features: ["Communication Satellites", "Earth Observation", "Navigation Systems", "Space Communications"]
    },
    {
      title: "Space Communications",
      description: "Reliable communication solutions for space missions",
      icon: "📡",
      features: ["Deep Space Networks", "Mission Control", "Data Transmission", "Signal Processing"]
    },
    {
      title: "Space Data Analytics",
      description: "Process and analyze space-based data for insights",
      icon: "📊",
      features: ["Remote Sensing", "Data Processing", "Analytics Platforms", "Visualization Tools"]
    },
    {
      title: "Space Infrastructure",
      description: "Ground-based infrastructure for space operations",
      icon: "🏗️",
      features: ["Ground Stations", "Launch Facilities", "Mission Control Centers", "Testing Facilities"]
    }
  ];

  const applications = [
    "Earth Observation & Monitoring",
    "Satellite Communications",
    "Navigation & GPS Systems",
    "Space Exploration",
    "Climate Research",
    "Defense & Security"
  ];

  const benefits = [
    "Access to space-based data and insights",
    "Enhanced communication capabilities",
    "Improved navigation and positioning",
    "Advanced monitoring and surveillance",
    "Innovation in space technology",
    "Competitive advantage in space sector"
  ];

  const technologies = [
    "Satellite Systems",
    "Ground Station Equipment",
    "Communication Protocols",
    "Data Processing Software",
    "Navigation Systems",
    "Remote Sensing Tools"
  ];

  return (
    <>
      <Head>
        <title>Space Technology Services - Zion Tech Group</title>
        <meta name="description" content="Advanced space technology services including satellite systems, space communications, and space data analytics. Explore the final frontier with Zion Tech Group." />
        <meta name="keywords" content="space technology, satellite systems, space communications, space data analytics, space infrastructure" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-12 h-12 text-indigo-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Space Technology
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Explore the final frontier with cutting-edge space technology solutions. 
              From satellite systems to space communications, we're pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Launch Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive space technology solutions for modern space operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Space Technology Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Diverse applications across multiple industries and sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge space technology tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center hover:border-indigo-500/50 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Space Technology Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the potential of space technology for your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Space Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how space technology can revolutionize your operations 
              and open new frontiers for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Launch Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpaceTech;
    {
      title: "Earth Observation",
      description: "Environmental monitoring, climate research, and natural disaster assessment",
      icon: Globe
    },
    {
      title: "Communications",
      description: "Global connectivity, broadband internet, and emergency communications",
      icon: Satellite
    },
    {
      title: "Navigation",
      description: "GPS, positioning systems, and autonomous vehicle guidance",
      icon: Target
    },
    {
      title: "Scientific Research",
      description: "Space exploration, astronomy, and fundamental physics research",
      icon: Lightbulb
    },
    {
      title: "Defense & Security",
      description: "National security, surveillance, and strategic communications",
      icon: Shield
    },
    {
      title: "Commercial Space",
      description: "Space tourism, mining, and commercial satellite services",
      icon: Rocket
    }
  ];

  const technologies = [
    {
      name: "AI & Machine Learning",
      description: "Autonomous systems and intelligent data processing",
      icon: Cpu
    },
    {
      name: "Quantum Computing",
      description: "Advanced computing for complex space calculations",
      icon: Zap
    },
    {
      name: "5G & IoT",
      description: "High-speed connectivity and sensor networks",
      icon: TrendingUp
    },
    {
      name: "Blockchain",
      description: "Secure data management and satellite operations",
      icon: Shield
    },
    {
      name: "Edge Computing",
      description: "On-board processing and real-time analytics",
      icon: Database
    },
    {
      name: "Robotics",
      description: "Autonomous space systems and maintenance",
      icon: Users
    }
  ];

  const benefits = [
    "Access to global markets and opportunities",
    "Innovation in critical technology sectors",
    "Enhanced national security capabilities",
    "Environmental monitoring and climate research",
    "Economic growth and job creation",
    "Scientific advancement and discovery"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Space Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Reaching for the
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Stars</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Cutting-edge space technology solutions that enable satellite operations, 
              space research, and exploration missions for the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Space Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Space Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive space technology solutions covering satellite systems, 
              data analytics, cybersecurity, and mission support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space Technology Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how space technology is transforming industries and 
              enabling new capabilities across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enabling Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power modern space systems 
              and enable next-generation space capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Invest in Space Technology?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Space technology offers unprecedented opportunities for innovation, 
                economic growth, and scientific advancement across multiple sectors.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <Orbit className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Space Innovation</h3>
                <p className="text-gray-300 mb-6">
                  We're pushing the boundaries of what's possible in space, 
                  enabling new missions and capabilities.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Advanced satellite systems</p>
                  <p>• AI-powered space analytics</p>
                  <p>• Secure space communications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Space Technology Development Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A systematic approach to developing space technology solutions 
            that meet the highest standards of reliability and performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Requirements</h3>
              <p className="text-gray-300">Mission analysis and technical requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300">System architecture and detailed design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300">Implementation and testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
              <p className="text-gray-300">Launch and mission operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Space Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our space technology solutions can help you 
            reach new heights and achieve your space mission goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Mission
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Solutions
            </a>
          </div>
=======
=======
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $service: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This service page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
  );
};

export default $service;
=======
export default $service;
=======
