import React from "react"
import { motion } from "framer-motion"
import { ;
  ArrowRight,;
  CheckCircle, ;
  Cloud, ;
  Cpu, ;
  Shield, ;
  Zap, ;
  Brain, ;
  Globe, ;
  Lock,;
  BarChart3,;
  Users,;
  Rocket;
} from "lucide-react"
import { SEO } from "../components/SEO"
const featuredServices = [;
  {;
    name: 'AI-Powered Analytics',description: 'Advanced machine learning algorithms that provide real-time insights and predictive analytics for your business.',category: 'AI & ML',color: 'from-blue-500 to-cyan-500',icon: Brain,features: ['Real-time data processingPredictive analytics', 'Custom ML modelsAPI integration'],;
    href: '/services/ai-analytics'
  };
  {;
    name: 'Cloud Infrastructure',description: 'Scalable cloud solutions with automated deployment and management for optimal performance.',category: 'Cloud',color: 'from-purple-500 to-pink-500',icon: Cloud,features: ['Auto-scalingLoad balancing', 'Monitoring & alertsSecurity compliance'],;
    href: '/services/cloud-infrastructure'
  };
  {;
    name: 'Cybersecurity Suite',description: 'Comprehensive security solutions protecting your digital assets from evolving threats.',category: 'Security',color: 'from-red-500 to-orange-500',icon: Shield,features: ['Threat detectionVulnerability assessment', 'Incident responseCompliance reporting'],;
    href: '/services/cybersecurity'
  };
  {;
    name: 'Performance Optimization',description: 'Optimize your applications and infrastructure for maximum speed and efficiency.',category: 'Performance',color: 'from-green-500 to-emerald-500',icon: Zap,features: ['Performance monitoringOptimization recommendations', 'Load testingCaching strategies'],;
    href: '/services/performance-optimization'
  };
  {;
    name: 'Data Management',description: 'Comprehensive data solutions including storage, processing, and analytics.',;
    category: 'Data',color: 'from-indigo-500 to-blue-500',icon: BarChart3,features: ['Data warehousingETL pipelines', 'Data governanceBusiness intelligence'],;
    href: '/services/data-management'
  };
  {;
    name: 'Team Collaboration',description: 'Tools and platforms to enhance team productivity and communication.',category: 'Collaboration',color: 'from-yellow-500 to-orange-500',icon: Users,features: ['Project managementCommunication tools', 'File sharingWorkflow automation'],;
    href: '/services/team-collaboration'
  };
];
const emergingTechnologies = [;
  {;
    name: 'Quantum Computing',description: 'Explore the future of computing with quantum algorithms and applications.',icon: Cpu,color: 'from-purple-600 to-indigo-600'
  };
  {;
    name: 'Edge Computing',description: 'Process data closer to the source for faster response times and reduced latency.',icon: Globe,color: 'from-blue-600 to-cyan-600'
  };
  {;
    name: 'Blockchain Solutions',description: 'Secure, transparent, and decentralized solutions for modern business needs.',;
    icon: Lock,color: 'from-green-600 to-emerald-600'
  };
  {;
    name: 'IoT Integration',description: 'Connect and manage your devices for smart automation and insights.',icon: Rocket,color: 'from-orange-600 to-red-600'
  };
];
export default function InnovativeServicesLanding2025() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="2025 Innovative Services Landing - Zion Tech Group"
        description="Discover our revolutionary AI, cloud, and emerging technology services designed to transform your business in 2025 and beyond."
        keywords="AI services, cloud infrastructure, cybersecurity, performance optimization, data management, emerging technologies"
        canonical="https://ziontechgroup.com/innovative-services-2025"
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">;
                2025 Innovative;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Services Landing</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Discover our revolutionary AI, cloud, and emerging technology services designed to transform your business in 2025 and beyond.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                Explore Services;
              </[^>]*>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">;
                Get Started;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Services */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Featured Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our most popular and innovative services that are transforming businesses across industries.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {featuredServices.map((service, index) => (;
              <motion.div
                key={service.name};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.1 * index }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <span className="text-xs text-blue-400 font-medium">{service.category}</[^>]*>
                    <h3 className="text-xl font-semibold text-white">{service.name}</[^>]*>
                  </[^>]*>
                </[^>]*>
                ;
                <p className="text-gray-300 text-sm mb-4">{service.description}</[^>]*>
                ;
                <div className="space-y-2 mb-4">;
                  {service.features.map((feature, featureIndex) => (;
                    <div key={featureIndex} className="flex items-center text-sm">;
                      <[^>]*/>
                      <span className="text-gray-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
                ;
                <a;
                  href={service.href};
                  className="[^"]*"
                >;
                  Learn More <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="px-4 sm:px-6 lg:px-8 mb-20">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
              Let's discuss how our innovative services can help you achieve your goals and stay ahead of the competition.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">;
                Schedule Consultation;
              </[^>]*>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">;
                View Case Studies;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Emerging Technologies */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Emerging Technologies;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Stay ahead of the curve with cutting-edge technologies that are shaping the future of business.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {emergingTechnologies.map((tech, index) => (;
              <motion.div
                key={tech.name};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.1 * index }};
                className="[^"]*"
              >;
                <div className={`p-6 bg-gradient-to-r ${tech.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</[^>]*>
                <p className="text-gray-300 text-sm">{tech.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Final CTA */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Start Your Digital Transformation Today;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join hundreds of businesses that have already transformed their operations with our innovative services.;
            </[^>]*>
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
              Get Started Now;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};